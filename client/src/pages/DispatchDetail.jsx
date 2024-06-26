import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethod.js";

export default function DispatchDetail() {
  const location = useLocation();
  const [essay, setEssay] = useState(null);
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getEssayById = async () => {
      try {
        const res = await publicRequest.get(`/essays/find/${id}`);
        setEssay(res.data);
      } catch (error) {
        console.error("Error fetching the essay:", error);
      }
    };

    getEssayById();
  }, [id]);

  return (
    <Wrapper>
      {essay && (
        <>
          <Title>{essay.title}</Title>
          <Location>{essay.date}</Location>
          <Text>{essay.text}</Text>
          <ImgWrapper>
            {essay.images &&
              essay.images.map((image, index) => {
                if (index > 0) {
                  return (
                    <Img
                      src={image}
                      key={index}
                      onClick={() => openModal(image)}
                    />
                  );
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
    padding: 100px 0;
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
  margin: 50px auto;
  grid-gap: 20px;
  @media only screen and (min-width: 500px) {
    margin: 50px 20px;
  }
`;

const Img = styled.img`
  max-width: 100vw;

  @media only screen and (min-width: 500px) {
    height: 300px;
    width: auto;
    object-fit: contain;
    background-color: #cfdee4;
    cursor: pointer;
  }
`;

const Text = styled.p`
  max-width: 800px;
  margin: auto;
`;
