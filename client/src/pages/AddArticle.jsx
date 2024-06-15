import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [imageUrls, setImageUrls] = useState(new Array(6).fill(null));
  const [files, setFiles] = useState(new Array(6).fill(null));
  const [uploadProgress, setUploadProgress] = useState(new Array(6).fill(0));
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      const newInputs = { ...prev, [name]: value };
      return newInputs;
    });
  };

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

    const project = { ...inputs, images: imageUrls.filter(Boolean) };
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${API_URL}/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(project),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSuccess(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      <Link to="/admin/home">&#8678; Back to Admin Home</Link>
      <Title>New Dispatch</Title>
      <Form>
        <InputFields>
          <ItemRadio>
            <Itemlabel>Post Type (required):</Itemlabel>
            <Radioinput type="radio" id="news" name="type" value="news" />
            <Radiolabel for="news">News</Radiolabel>
            <Radioinput type="radio" id="essay" name="type" value="essay" />
            <Radiolabel for="essay">Essay</Radiolabel>
            <Radioinput type="radio" id="blog" name="type" value="blog" />
            <Radiolabel for="blog">Blog</Radiolabel>
          </ItemRadio>
          <Item>
            <Itemlabel>Title</Itemlabel>
            <Iteminput
              name="title"
              type="text"
              placeholder="title"
              onChange={handleChange}
            />
          </Item>
          <Item>
            <Itemlabel>Date</Itemlabel>
            <Iteminput
              name="date"
              type="date"
              placeholder="date"
              onChange={handleChange}
            />
          </Item>
          <ItemTextArea>
            <Itemlabel>Text</Itemlabel>
            <TextField
              name="text"
              type="textfield"
              placeholder="text"
              onChange={handleChange}
            />
          </ItemTextArea>
          <ItemTextArea>
            <Itemlabel>External link URL</Itemlabel>
            <Iteminput
              name="url"
              type="url"
              placeholder="http://example.com"
              onChange={handleChange}
            />
          </ItemTextArea>
        </InputFields>
        {Array.from({ length: 6 }).map((_, index) => (
          <ItemImage key={index}>
            <Itemlabel>Image {index + 1}</Itemlabel>
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
        <Item>
          <Itemlabel>Video</Itemlabel>
          <Iteminput
            name="video"
            type="string"
            placeholder="https://video-url.com"
            onChange={handleChange}
          />
        </Item>
        <Button onClick={handleClick}>Create</Button>
        {success && (
          <>
            <p>
              <strong>Success!</strong> Your article has been created
            </p>
            <Back to="/admin/home">&#8678; Back to Admin Home</Back>
            <New onClick={handleRefresh}>Create another article</New>
          </>
        )}
      </Form>
    </Wrapper>
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

const ItemRadio = styled.div`
  width: 100%;
  margin: 10px;
  text-align: center;
  background: #dceef5;
  padding: 20px 30px;
  margin: 10px 20%;
`;
const Radioinput = styled.input`
  margin-left: 20px;
`;
const Radiolabel = styled.label``;

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
  height: 8em;
  width: 100%;
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

const New = styled.div`
  padding: 10px 30px;
  background-color: #00ffc3;
  display: block;
  margin: 20px auto;
  cursor: pointer;
  transition: 0.5s ease;
  font-weight: bold;
  &:hover {
    background-color: #88ff00;
    border-radius: 10px;
  }
`;
