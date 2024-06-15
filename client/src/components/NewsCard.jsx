import React from "react";
import styled from "styled-components";

export default function NewsCard({ data }) {
  return (
    <Wrapper>
      {data.type == "news" ? (
        <News>
          <Title>{data.title}</Title>
          <Date>{data.date}</Date>
          <Content>
            <ImgGrid>
              {data.images &&
                data.images.map((img, index) => <Img src={img} key={index} />)}
            </ImgGrid>
            <Text>{data.text}</Text>
          </Content>
          <Title>{data.title}</Title>
          <Date>{data.date}</Date>
          <Content>
            <ImgGrid>
              {data.images &&
                data.images.map((img, index) => <Img src={img} key={index} />)}
            </ImgGrid>
            <Text>{data.text}</Text>
          </Content>
        </News>
      ) : data.type == "blog" ? (
        <Blog>
          <Title>{data.title}</Title>
          <Date>{data.date}</Date>
          <Content>
            <ImgGrid>
              {data.images &&
                data.images.map((img, index) => <Img src={img} key={index} />)}
            </ImgGrid>
            <Text>{data.text}</Text>
          </Content>
        </Blog>
      ) : (
        <Essay>
          <Title>{data.title}</Title>
          <Date>{data.date}</Date>
          <Content>
            <ImgGrid>
              {data.images &&
                data.images.map((img, index) => <Img src={img} key={index} />)}
            </ImgGrid>
            <Text>{data.text}</Text>
          </Content>
        </Essay>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid black;
`;

const News = styled.div`
  background-color: #ff9393;
`;
const Blog = styled.div`
  background-color: #b8b8fd;
`;
const Essay = styled.div`
  background-color: #c3fdc3;
`;
const Title = styled.h3``;
const Text = styled.p``;
const Date = styled.p``;
const Content = styled.div``;
const Img = styled.img`
  height: 200px;
`;
const ImgGrid = styled.div``;
