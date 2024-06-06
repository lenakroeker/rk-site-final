import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethod.js";

export default function ProjectDetail() {
  const location = useLocation();
  const [project, setProject] = useState(null); // Initialize with null
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getProjectById = async () => {
      console.log(id);
      try {
        const res = await publicRequest.get(`/projects/find/${id}`);
        setProject(res.data);
        console.log(res.data); // Log the response data
      } catch (error) {
        console.error("Error fetching the project:", error);
      }
    };

    getProjectById();
  }, [id]);

  return (
    <Wrapper>
      {project && (
        <>
          <Title>{project.title}</Title>
          <Location>{project.location}</Location>
          <Text>{project.text}</Text>
          <ImgWrapper>
            {project.images.map((image, index) => {
              if (index > 0) {
                return <Img src={image} key={index} />;
              }
            })}
          </ImgWrapper>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 80vh;
  padding: 100px 12vw;
  width: 100vw;
  text-align: center;
  @media only screen and (min-width: 500px) {
    width: 97vw;
  }
`;

const Title = styled.h2`
  text-align: center;
`;
const Location = styled.h3`
  font-weight: bold;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 50px auto;
  max-width: 1000px;
  grid-gap: 20px;
  @media only screen and (min-width: 500px) {
    min-width: 340px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  background-color: #cfdee4;
  @media only screen and (min-width: 500px) {
    width: auto;
    height: 300px;
    min-width: 340px;
  }
`;
const Text = styled.p`
  max-width: 800px;
  margin: auto;
`;
