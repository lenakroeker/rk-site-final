import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dateModify from "../methods/dateModify";

export default function HomeNewsCard({ data }) {
  return (
    <NewsItem>
      <NewsTitle>{data.title}</NewsTitle>
      <NewsDate>{dateModify(data.date)}</NewsDate>
      <NewsBox>
        <NewsText>{data.text}</NewsText>

        <NewsImages>
          {data.images &&
            data.images.map((img, index) => <NewsImg src={img} key={index} />)}
        </NewsImages>
      </NewsBox>
    </NewsItem>
  );
}

const NewsItem = styled.div`
  padding: 20px 20vw;
`;
const NewsTitle = styled.h2``;

const NewsDate = styled.p`
  color: black;
`;

const NewsBox = styled.div`
  display: flex;
`;

const NewsImages = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NewsImg = styled.img`
  width: 20vw;
`;

const NewsText = styled.p`
  margin: 0 20px 0 0;
  padding: 0;
`;
