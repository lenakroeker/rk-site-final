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

  // Get project data
  useEffect(() => {
    const getEventById = async () => {
      try {
        const res = await publicRequest.get(`/events/find/${id}`);
        setEvent(res.data);
        setInputs(res.data);
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
        <Wrapper>
          <Link to="/admin/home">&#8678; Back to Admin Home</Link>

          <Title>Edit {event.title}</Title>
          <Form>
            <InputFields>
              <Item>
                <Itemlabel>Title</Itemlabel>
                <Iteminput
                  name="title"
                  type="text"
                  defaultValue={event.title}
                  onChange={handleChange}
                />
              </Item>
              <Item>
                <Itemlabel>Location</Itemlabel>
                <Iteminput
                  name="location"
                  type="text"
                  defaultValue={event.location}
                  onChange={handleChange}
                />
              </Item>
              <Item>
                <Itemlabel>Date</Itemlabel>
                <Iteminput
                  name="date"
                  type="date"
                  defaultValue={event.date}
                  onChange={handleChange}
                />
              </Item>
              <Item>
                <Itemlabel>More info URL</Itemlabel>
                <Iteminput
                  name="link"
                  type="url"
                  defaultValue={event.link}
                  onChange={handleChange}
                />
              </Item>
            </InputFields>

            <Button onClick={handleClick}>Apply Edits</Button>
            {success && (
              <>
                <p>
                  <strong>Success!</strong> Your event has been updated
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

const Back = styled(Link)`
  display: block;
  text-align: center;
  margin: 20px 30%;
  width: 100%;
`;
