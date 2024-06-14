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
          Authorization: `Bearer ${token}`,
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
    <Wrapper>
      <Link to="/admin/home">&#8678; Back to Admin Home</Link>
      <Title>New Event</Title>
      <Form>
        <InputFields>
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
            <Itemlabel>Location</Itemlabel>
            <Iteminput
              name="location"
              type="text"
              placeholder="location"
              onChange={handleChange}
            />
          </Item>
          <Item>
            <Itemlabel>Event Date</Itemlabel>
            <Iteminput
              name="date"
              type="date"
              placeholder="url"
              onChange={handleChange}
            />
          </Item>
          <Item>
            <Itemlabel>More info link</Itemlabel>
            <Iteminput
              name="link"
              type="text"
              placeholder="url"
              onChange={handleChange}
            />
          </Item>
        </InputFields>

        <Button onClick={handleClick}>Create</Button>
        {success && (
          <>
            <p>
              <strong>Success!</strong> Your event has been created
            </p>
            <Back to="/admin/home">&#8678; Back to Admin Home</Back>
            <New onClick={handleRefresh}>Create another event</New>
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
