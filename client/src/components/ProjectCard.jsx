import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function ProjectCard(project) {
  return (
    <NavLink end to={`/projects/${project.data._id}`}>
      <Wrapper>
        <Img src={project.data.images[0]} />
        <Title>{project.data.title}</Title>
      </Wrapper>
    </NavLink>
  );
}
const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  @media only screen and (min-width: 500px) {
    aspect-ratio: 1/1;
  }

  &:hover {
    background: black;
    color: #fffafc;
  }
`;

const Img = styled.img`
  display: none;
  @media only screen and (min-width: 500px) {
    display: block;
    object-fit: cover;
    max-width: 100%;
  }
`;

const Title = styled.h3``;
