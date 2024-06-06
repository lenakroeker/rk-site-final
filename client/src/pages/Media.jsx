import React from "react";
import styled from "styled-components";

export default function Media() {
  return (
    <Wrapper>
      <Title>Media</Title>
      <Videos>
        <VideoBox>
          <VideoTitle>
            "Etuaptmumk": two-eyed seeing and design | Dr. Albert Marshall &
            Richard Kroeker
          </VideoTitle>
          <Date>March 10th, 2022</Date>
          <Iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OAKQkZrGKdA?si=U9U_UVqKouCAZ5nY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></Iframe>
        </VideoBox>
        <VideoBox>
          <VideoTitle>
            Knowledge Exchange as Practice Panel - DeRico Symonds, Juanita
            Peters, Richard Kroeker
          </VideoTitle>
          <Date>February 12th, 2021</Date>
          <Iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iLhEhZ0GDe4?si=ZMqevkhJZc-L1Csu"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></Iframe>
        </VideoBox>
        <VideoBox>
          <VideoTitle>Richard Kroeker, Two Eyed Seeing</VideoTitle>
          <Date>February 2nd, 2018</Date>
          <Iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YgfkhU8TTnY?si=mWQQehPXF0gnI_yP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></Iframe>
        </VideoBox>
      </Videos>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 80vh;
  @media only screen and (min-width: 500px) {
    padding: 10vw;
    width: 98vw;
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const Videos = styled.div`
  text-align: center;
`;

const VideoBox = styled.div`
  text-align: center;
  border-top: 1px solid black;
  margin: 0 10vw;

  @media only screen and (min-width: 500px) {
    margin: 4vw 0;
  }
`;

const VideoTitle = styled.h3`
  text-align: center;
`;

const Iframe = styled.iframe`
  margin: auto auto 40px auto;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
  @media only screen and (min-width: 500px) {
    width: 50vw;
    height: 300px;
    min-width: 450px;
  }
`;

const Date = styled.p`
  text-align: center;
  opacity: 0.7;
  font-style: italic;
`;
