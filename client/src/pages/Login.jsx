import React, { useState } from "react";
import styled from "styled-components";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { accessToken } = await response.json();
        localStorage.setItem("accessToken", accessToken); // Store access token in local storage
        window.location.href = "/admin/home"; // Redirect to the admin page
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit">Submit</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

const Input = styled.input`
  margin: 20px;
`;
const Button = styled.button`
  margin: 20px;
  border: 1px solid green;
`;
const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;
