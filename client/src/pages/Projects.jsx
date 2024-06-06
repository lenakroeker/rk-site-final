import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard.jsx";
import { publicRequest } from "../../requestMethod.js";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await publicRequest.get("projects");
        setProjects(res.data.reverse()); // Reversing the data here

        setProjects(res.data);
      } catch {}
    };
    getProjects();
  }, []);

  return (
    <Wrapper>
      <Title>Projects</Title>
      <ProjectGrid>
        {projects.map((item, index) => (
          <ProjectCard data={item} key={index} />
        ))}
      </ProjectGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 80vh;
  padding: 100px 12vw;
  width: 100vw;
  @media only screen and (min-width: 500px) {
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const ProjectGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  @media only screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
