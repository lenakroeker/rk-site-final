import React from "react";
import styled from "styled-components";

export default function NewsCard({ data }) {
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Date>{data.date}</Date>
      <Content>
        <ImgGrid>
          {data.images.map((img, index) => (
            <Img src={img} key={index} />
          ))}
        </ImgGrid>
        <Text>{data.text}</Text>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid black;
`;
const Title = styled.h3``;
const Text = styled.p``;
const Date = styled.p``;
const Content = styled.div``;
const Img = styled.img`
  height: 200px;
`;
const ImgGrid = styled.div``;
