import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function DispatchCard({ data }) {
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

  //   const renderContentWithImages = () => {
  //     const paragraphs = data.text.split(/\n\s*\n/); // Split text into paragraphs
  //     const content = [];
  //     const images = data.images || [];

  //     paragraphs.forEach((paragraph, index) => {
  //       content.push(<p key={`paragraph-${index}`}>{paragraph}</p>);
  //       // Insert an image after every 2 paragraphs
  //       if (index % 2 === 1 && images[Math.floor(index / 2)]) {
  //         content.push(
  //           <EssayImg
  //             key={`img-${Math.floor(index / 2)}`}
  //             src={images[Math.floor(index / 2)]}
  //             alt={`Image ${Math.floor(index / 2) + 1}`}
  //           />
  //         );
  //       }
  //     });

  //     return content; // Return the content array
  //   };

  return (
    <Wrapper>
      <Essay>
        <Nav end to={`/dispatches/${data.data._id}`}>
          <Title>{data.title}</Title>
          <DateText>{dateText}</DateText>
          {/* <Content>{renderContentWithImages()}</Content> */}
        </Nav>
      </Essay>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid black;
  position: relative;
`;

const Essay = styled.div`
  background-color: #c3fdc37e;
  text-align: center;
  padding: 20px;
  margin: 20px 0;
`;

const Title = styled.h3``;

const DateText = styled.p`
  position: absolute;
  top: 0;
  right: 0;
`;

const Nav = styled(NavLink)`
  color: black !important;
`;
