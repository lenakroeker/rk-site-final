import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      const newInputs = { ...prev, [name]: value };
      return newInputs;
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");

    const event = { ...inputs };
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${API_URL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify(event),
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
    <NewProductC>
      <Link to="/admin/home">&#8678; Back to Admin Home</Link>
      <AddProductTitle>New Event</AddProductTitle>
      <AddProductForm>
        <InputFields>
          <AddProjectItem>
            <AddProjectItemlabel>Title</AddProjectItemlabel>
            <AddProjectIteminput
              name="title"
              type="text"
              placeholder="title"
              onChange={handleChange}
            />
          </AddProjectItem>
          <AddProjectItem>
            <AddProjectItemlabel>Location</AddProjectItemlabel>
            <AddProjectIteminput
              name="location"
              type="text"
              placeholder="location"
              onChange={handleChange}
            />
          </AddProjectItem>
          <AddProjectItem>
            <AddProjectItemlabel>Event Date</AddProjectItemlabel>
            <AddProjectIteminput
              name="date"
              type="date"
              placeholder="url"
              onChange={handleChange}
            />
          </AddProjectItem>
          <AddProjectItem>
            <AddProjectItemlabel>More info link</AddProjectItemlabel>
            <AddProjectIteminput
              name="link"
              type="text"
              placeholder="url"
              onChange={handleChange}
            />
          </AddProjectItem>
        </InputFields>

        <AddProjectButton onClick={handleClick}>Create</AddProjectButton>
        {success && (
          <>
            <p>
              <strong>Success!</strong> Your event has been created
            </p>
            <Back to="/admin/home">&#8678; Back to Admin Home</Back>
            <New onClick={handleRefresh}>Create another event</New>
          </>
        )}
      </AddProductForm>
    </NewProductC>
  );
}

const NewProductC = styled.div`
  margin: 100px 10vw;
  padding: 30px;
  background: #eee7e741;
`;

const AddProductTitle = styled.h2`
  text-align: center;
`;

const AddProductForm = styled.form`
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

const AddProjectItem = styled.div`
  width: 40%;
  margin: 10px;
`;

const AddProjectItemTextArea = styled.div`
  width: 90%;
`;

const AddProjectItemlabel = styled.label`
  color: #000000;
  font-weight: 600;
  font-size: 16px;
`;

const AddProjectIteminput = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  &:focus {
    background-color: #f3f9fe;
  }
`;

const AddProjectButton = styled.button`
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
