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

  const renderContentWithImages = () => {
    const paragraphs = data.text.split(/\n\s*\n/); // Split text into paragraphs
    const content = [];
    const images = data.images || [];

    paragraphs.forEach((paragraph, index) => {
      content.push(<p key={`paragraph-${index}`}>{paragraph}</p>);
      // Insert an image after every 2 paragraphs
      if (index % 2 === 1 && images[Math.floor(index / 2)]) {
        content.push(
          <EssayImg
            key={`img-${Math.floor(index / 2)}`}
            src={images[Math.floor(index / 2)]}
            alt={`Image ${Math.floor(index / 2) + 1}`}
          />
        );
      }
    });

    return content; // Return the content array
  };

  return (
    <Wrapper>
      {data.type === "news" ? (
        <News>
          <Title>{data.title}</Title>
          <DateText>{dateText}</DateText>
          <Text>{data.text}</Text>
          <ImgGrid>
            {data.images &&
              data.images.map((img, index) => <Img src={img} key={index} />)}
          </ImgGrid>
        </News>
      ) : data.type === "blog" ? (
        <Blog>
          <Title>{data.title}</Title>
          <DateText>{dateText}</DateText>
          <Text>{data.text}</Text>
          <ImgGrid>
            {data.images &&
              data.images.map((img, index) => <Img src={img} key={index} />)}
          </ImgGrid>
          <URL href={data.url}>{data.url}</URL>
          {data.video && (
            <iframe
              width="560"
              height="315"
              src={data.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          )}
        </Blog>
      ) : (
        <Essay>
          <Title>{data.title}</Title>
          <DateText>{dateText}</DateText>
          <Content>{renderContentWithImages()}</Content>
        </Essay>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid black;
  position: relative;
`;

const News = styled.div`
  background-color: #ff93937b;
  padding: 20px;
  margin: 20px 0;
`;

const Blog = styled.div`
  background-color: #b8b8fd6d;
  padding: 20px;
  text-align: right;
  margin: 20px 0;
`;

const Essay = styled.div`
  background-color: #c3fdc37e;
  text-align: center;
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

const Content = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 200px;
`;

const URL = styled.a``;

const EssayImg = styled.img`
  width: 60%;
`;

const ImgGrid = styled.div``;
