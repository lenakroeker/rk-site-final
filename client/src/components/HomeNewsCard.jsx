import React from "react";
import styled from "styled-components";

export default function HomeNewsCard({ data }) {
  return (
    <NewsItem>
      <NewsTitle>{data.title}</NewsTitle>
      <NewsDate>{data.date}</NewsDate>
      <NewsImages>
        {data.images.map((img, index) => (
          <NewsImg src={img} key={index} />
        ))}
      </NewsImages>
      <NewsText>{data.text}</NewsText>
    </NewsItem>
  );
}

const NewsItem = styled.div`
  padding: 20px;
`;
const NewsTitle = styled.h2``;

const NewsDate = styled.p``;

const NewsImages = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NewsImg = styled.img`
  width: 50%;
`;

const NewsText = styled.p``;
