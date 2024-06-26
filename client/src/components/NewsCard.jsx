import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function NewsCard({ data }) {
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
    <Wrapper>
      <News>
        <Title>{data.title}</Title>
        <DateText>{dateText}</DateText>
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
