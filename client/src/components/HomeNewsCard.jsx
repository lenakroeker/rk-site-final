import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function HomeNewsCard({ data }) {
  const [dateText, setDateText] = useState("");

  useEffect(() => {
    if (data.date) {
      const date = new Date(data.date);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);

      const day = date.getDate();
      const suffix = getOrdinalSuffix(day);

      setDateText(formattedDate.replace(day, `${day}${suffix}`));
    }
  }, [data.date]);

  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  return (
    <NewsItem>
      <NewsTitle>{data.title}</NewsTitle>
      <NewsDate>{dateText}</NewsDate>
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

const NewsDate = styled.p``;

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

const NewsText = styled.p``;
