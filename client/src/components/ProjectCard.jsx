import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function ProjectCard(project) {
  return (
    <Nav end to={`/projects/${project.data._id}`}>
      <Wrapper>
        <Img src={project.data.images[0]} />
        <Hover>
          <Title>{project.data.title}</Title>
        </Hover>
      </Wrapper>
    </Nav>
  );
}
const Wrapper = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  height: 80px;
  overflow: hidden;
  @media only screen and (min-width: 500px) {
    aspect-ratio: 1/1;
    height: auto;
  }
`;

const Img = styled.img`
  display: block;
  object-fit: contain;
  max-width: 100%;
  @media only screen and (min-width: 500px) {
    display: block;
    object-fit: cover;
    max-width: 100%;
  }
`;

const Hover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  transition: 0.5s ease-in-out;
  opacity: 0.85;

  @media only screen and (min-width: 500px) {
    width: 100%;
    height: 100%;
    opacity: 0;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const Title = styled.h3`
  margin: 10px;
`;
const Nav = styled(NavLink)`
  color: black !important;
`;
