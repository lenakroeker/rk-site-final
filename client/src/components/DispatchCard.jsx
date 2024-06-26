import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function DispatchCard({ essay }) {
  const [dateText, setDateText] = useState("");

  useEffect(() => {
    if (essay.date) {
      const date = new Date(essay.date);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);

      const day = date.getDate();
      const suffix = getOrdinalSuffix(day);

      setDateText(formattedDate.replace(day, `${day}${suffix}`));
    }
  }, [essay.date]);

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
  //     const paragraphs = dispatch.text.split(/\n\s*\n/); // Split text into paragraphs
  //     const content = [];
  //     const images = dispatch.images || [];

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
      <Nav end to={`/dispatches/${essay._id}`}>
        <Essay>
          <Title>{essay.title}</Title>
          <DateText>{dateText}</DateText>
          {/* <Content>{renderContentWithImages()}</Content> */}
        </Essay>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid black;
  position: relative;
`;

const Essay = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.h3``;

const DateText = styled.p``;

const Nav = styled(NavLink)`
  color: black !important;
`;
