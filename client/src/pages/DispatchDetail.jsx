import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethod.js";
import dateModify from "../methods/dateModify";

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
        <Page>
          <Title>{essay.title}</Title>
          <Day>{dateModify(essay.date)}</Day>
          <Text>{essay.text}</Text>
          <ImgWrapper>
            {essay.images &&
              essay.images.map((image, index) => {
                if (index > 0) {
                  return (
                    <ImgDiv>
                      <ImgNum>{index}</ImgNum>
                      <Img
                        src={image}
                        key={index}
                        onClick={() => openModal(image)}
                      />
                    </ImgDiv>
                  );
                }
              })}
          </ImgWrapper>
        </Page>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 80vh;
  padding: 100px 12vw;
  width: 100vw;
  @media only screen and (min-width: 500px) {
    padding: 100px 0;
  }
`;

const Page = styled.div`
  margin: 0 auto;
  max-width: 800px;
  text-align: left;
`;

const Title = styled.h2``;
const Day = styled.h3`
  font-size: 16px;
  font-weight: 400;
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

const ImgDiv = styled.div``;

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

const ImgNum = styled.div`
  position: absolute;
  background: black;
  color: white;
  width: 20px;
  padding: 0.1em;
  text-align: center;
`;

const Text = styled.div`
  margin-top: 50px;
`;
