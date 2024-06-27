import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Admin() {
  const logout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/admin";
  };

  return (
    <Wrapper>
      <H1>Welcome Admin!</H1>

      <Div>
        <Link to="/admin/edit-delete-project">
          <Button>Projects</Button>
        </Link>
        <Link to="/admin/edit-delete-article">
          <Button>News</Button>
        </Link>
        <Link to="/admin/edit-delete-dispatch">
          <Button>Dispatches</Button>
        </Link>
        <Link to="/admin/edit-delete-event">
          <Button>Events</Button>
        </Link>
      </Div>
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

const Div = styled.div`
  display: flex;
`;
