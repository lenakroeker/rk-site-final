import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dateModify from "../methods/dateModify";

export default function NewsCard({ data }) {
  return (
    <Wrapper>
      <News>
        <Title>{data.title}</Title>
        <DateText>{dateModify(data.date)}</DateText>
        <Text>{data.text}</Text>
        <ImgGrid>
          {data.images &&
            data.images.map((img, index) => <Img src={img} key={index} />)}
        </ImgGrid>
      </News>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid black;
  position: relative;
`;

const News = styled.div`
  padding: 20px;
  margin: 20px 0;
`;

const Title = styled.h3``;

const Text = styled.p``;

const DateText = styled.p`
  position: absolute;
  top: 0;
  right: 0;
`;

const Img = styled.img`
  height: 200px;
`;

const ImgGrid = styled.div``;
