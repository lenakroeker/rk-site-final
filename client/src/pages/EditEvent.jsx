import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { publicRequest } from "../../requestMethod.js";

export default function EditEvent() {
  const [inputs, setInputs] = useState({});
  const [success, setSuccess] = useState(false);

  const location = useLocation();
  const [event, setEvent] = useState(null);
  const id = location.pathname.split("/")[3];
  console.log(id);

  // Get project data
  useEffect(() => {
    const getEventById = async () => {
      try {
        const res = await publicRequest.get(`/events/find/${id}`);
        setEvent(res.data);
        setInputs(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching the event:", error);
      }
    };

    getEventById();
  }, [id]);

  // Update inputs on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");

    const event = { ...inputs };
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${API_URL}/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(event),
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
      {event && (
        <NewProductC>
          <Link to="/admin/home">&#8678; Back to Admin Home</Link>

          <AddProductTitle>Edit {event.title}</AddProductTitle>
          <AddProductForm>
            <InputFields>
              <AddProjectItem>
                <AddProjectItemlabel>Title</AddProjectItemlabel>
                <AddProjectIteminput
                  name="title"
                  type="text"
                  defaultValue={event.title}
                  onChange={handleChange}
                />
              </AddProjectItem>
              <AddProjectItem>
                <AddProjectItemlabel>Location</AddProjectItemlabel>
                <AddProjectIteminput
                  name="location"
                  type="text"
                  defaultValue={event.location}
                  onChange={handleChange}
                />
              </AddProjectItem>
              <AddProjectItemTextArea>
                <AddProjectItemlabel>Date</AddProjectItemlabel>
                <AddProjectIteminput
                  name="date"
                  type="date"
                  defaultValue={event.date}
                  onChange={handleChange}
                />
              </AddProjectItemTextArea>
              <AddProjectItemTextArea>
                <AddProjectItemlabel>More info URL</AddProjectItemlabel>
                <AddProjectIteminput
                  name="link"
                  type="url"
                  defaultValue={event.url}
                  onChange={handleChange}
                />
              </AddProjectItemTextArea>
            </InputFields>

            <AddProjectButton onClick={handleClick}>
              Apply Edits
            </AddProjectButton>
            {success && (
              <>
                <p>
                  <strong>Success!</strong> Your event has been updated
                </p>
                <Back to="/admin/home">&#8678; Back to Admin Home</Back>
              </>
            )}
          </AddProductForm>
        </NewProductC>
      )}
    </>
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
  margin: 20px auto;
`;
