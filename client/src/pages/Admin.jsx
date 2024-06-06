import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Admin() {
  const logout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/admin"; // Redirect to login page
  };

  return (
    <Wrapper>
      <H1>Welcome Admin!</H1>
      <Link to="/admin/home/addProject">
        <Button>Add Project</Button>
      </Link>
      <Link to="/admin/home/addarticle">
        <Button>Add News Article</Button>
      </Link>
      <Link to="/admin/home/addevent">
        <Button>Add Event</Button>
      </Link>
      <Button onClick={logout}>Logout</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px 20vw;
  padding: 30px;
`;

const H1 = styled.h2`
  text-align: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #98fbfe;
  }
  &:active {
    background-color: #8efbbf;
  }
`;
