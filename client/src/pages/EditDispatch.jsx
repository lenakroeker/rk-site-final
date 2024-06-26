import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { publicRequest } from "../../requestMethod.js";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";

export default function EditDispatch() {
  const [inputs, setInputs] = useState({});
  const [imageUrls, setImageUrls] = useState(new Array(10).fill(null));
  const [files, setFiles] = useState(new Array(10).fill(null));
  const [uploadProgress, setUploadProgress] = useState(new Array(10).fill(0));
  const [success, setSuccess] = useState(false);

  const location = useLocation();
  const [essay, setEssay] = useState(null);
  const id = location.pathname.split("/")[3];

  // Get Essay data
  useEffect(() => {
    const getEssayById = async () => {
      try {
        const res = await publicRequest.get(`/essays/find/${id}`);
        setEssay(res.data);
        setInputs(res.data);
        if (res.data.images) {
          setImageUrls(res.data.images);
        }
      } catch (error) {
        console.error("Error fetching the Essay:", error);
      }
    };

    getEssayById();
  }, [id]);

  // Update inputs on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Upload images to Firebase and get URLs
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress((prevProgress) => {
          const newProgress = [...prevProgress];
          newProgress[index] = progress;
          return newProgress;
        });
      },
      (error) => {
        console.error(`Error uploading file ${fileName}:`, error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setImageUrls((prevImageUrls) => {
              const newImageUrls = [...prevImageUrls];
              newImageUrls[index] = downloadURL;
              return newImageUrls;
            });
          })
          .catch((error) => {
            console.error(
              `Error getting download URL for file ${fileName}:`,
              error
            );
          });
      }
    );
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");

    const Essay = { ...inputs, images: imageUrls.filter(Boolean) };
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${API_URL}/essays/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(essay),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setSuccess(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {Essay && (
        <Wrapper>
          <Link to="/admin/home">&#8678; Back to Admin Home</Link>

          <Title>Edit {essay.title}</Title>
          <Form>
            <InputFields>
              <Item>
                <Itemlabel>Title</Itemlabel>
                <Iteminput
                  name="title"
                  type="text"
                  defaultValue={essay.title}
                  onChange={handleChange}
                />
              </Item>
              <Item>
                <Itemlabel>Date</Itemlabel>
                <Iteminput
                  name="date"
                  type="text"
                  defaultValue={essay.date}
                  onChange={handleChange}
                />
              </Item>
              <ItemTextArea>
                <Itemlabel>Text</Itemlabel>
                <TextField
                  name="text"
                  type="textfield"
                  defaultValue={essay.text}
                  onChange={handleChange}
                />
              </ItemTextArea>
            </InputFields>
            {Array.from({ length: 10 }).map((_, index) => (
              <ItemImage key={index}>
                {index === 0 ? (
                  <Itemlabel>Thumbnail</Itemlabel>
                ) : (
                  <Itemlabel>Image {index}</Itemlabel>
                )}
                <ItemImageinput
                  type="file"
                  onChange={(e) => handleFileChange(e, index)}
                />
                {uploadProgress[index] > 0 && uploadProgress[index] < 100 && (
                  <Progress value={uploadProgress[index]} max="100">
                    {uploadProgress[index]}%
                  </Progress>
                )}
                {imageUrls[index] && (
                  <Thumbnail
                    src={imageUrls[index]}
                    alt={`Thumbnail ${index + 1}`}
                  />
                )}
              </ItemImage>
            ))}
            <Button onClick={handleClick}>Apply Edits</Button>
            {success && (
              <>
                <p>
                  <strong>Success!</strong> Your Essay has been updated
                </p>
                <Back to="/admin/home">&#8678; Back to Admin Home</Back>
              </>
            )}
          </Form>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  margin: 100px 10vw;
  padding: 30px;
  background: #eee7e741;
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const InputFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const Item = styled.div`
  width: 40%;
  margin: 10px;
`;

const ItemTextArea = styled.div`
  width: 90%;
`;

const ItemImage = styled.div`
  width: 25%;
  padding: 5px;
  text-align: center;
  border-radius: 10px;
  background: white;
  margin: 10px;
  border: 1px solid black;
`;

const Itemlabel = styled.label`
  color: #000000;
  font-weight: 600;
  font-size: 16px;
`;

const Iteminput = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  &:focus {
    background-color: #f3f9fe;
  }
`;

const ItemImageinput = styled.input`
  padding: 10px;
  border-radius: 10px;
`;

const TextField = styled.textarea`
  margin: 10px auto 30px auto;
  padding: 10px;
  height: 12em;
  width: 100%;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  border-radius: 10px;
  border: 2px solid black;
  &:focus {
    background-color: #f3f9fe;
  }
`;

const Button = styled.button`
  margin: 30px 20%;
  padding: 20px 100px;
  width: 50%;
  border: none;
  border-radius: 10px;
  background-color: #0511b3;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #00b7ff;
  }
  &:active {
    background-color: #2bff00;
  }
`;

const Progress = styled.progress``;

const Thumbnail = styled.img`
  width: 200px;
  height: auto;
`;

const Back = styled(Link)`
  display: block;
  text-align: center;
  margin: 20px 30%;
  width: 100%;
`;
