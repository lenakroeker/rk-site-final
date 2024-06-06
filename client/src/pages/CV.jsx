import React, { useState } from "react";
import styled from "styled-components";
import Academic from "../cvContent/Academic";
import Articles from "../cvContent/Articles";
import Awards from "../cvContent/Awards";
import Education from "../cvContent/Education";
import Exhibitions from "../cvContent/Exhibitions";
import Interviews from "../cvContent/Interviews";
import Presentations from "../cvContent/Presentations";
import Professional from "../cvContent/Professional";
import Published from "../cvContent/Published";
import Research from "../cvContent/Research.jsx";

export default function CV() {
  const [shown, setShown] = useState(null);

  const toggleShow = (cat) => {
    setShown(cat);
    console.log(shown);
  };
  return (
    <Wrapper>
      <Title>CV</Title>
      <CategoryNavigation>
        <Category onClick={() => toggleShow("education")}>Education</Category>
        <Category onClick={() => toggleShow("awards")}>Awards</Category>
        <Category onClick={() => toggleShow("academic")}>
          Academic & Education Experience
        </Category>
        <Category onClick={() => toggleShow("exhibitions")}>
          Exhibitions
        </Category>
        <Category onClick={() => toggleShow("professional")}>
          Professional Design Experience
        </Category>
        <Category onClick={() => toggleShow("research")}>
          Research Awards
        </Category>
        <Category onClick={() => toggleShow("published")}>
          Published Writing / Work
        </Category>
        <Category onClick={() => toggleShow("articles")}>
          Articles and Publications About the Work
        </Category>
        <Category onClick={() => toggleShow("presentations")}>
          Invited Public Presentations
        </Category>
        <Category onClick={() => toggleShow("interviews")}>Interviews</Category>
      </CategoryNavigation>
      <Content id="content">
        {shown === "education" && <Education />}
        {shown === "awards" && <Awards />}
        {shown === "academic" && <Academic />}
        {shown === "exhibitions" && <Exhibitions />}
        {shown === "professional" && <Professional />}
        {shown === "research" && <Research />}
        {shown === "published" && <Published />}
        {shown === "articles" && <Articles />}
        {shown === "presentations" && <Presentations />}
        {shown === "interviews" && <Interviews />}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 80vh;
  width: 100vw;
  @media only screen and (min-width: 500px) {
    padding: 10vw;
    width: 98vw;
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const CategoryNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px auto;
  width: 90vw;

  @media only screen and (min-width: 500px) {
    width: 100%;
    margin: auto;
    min-width: 400px;
  }
`;

const Category = styled.div`
  border: 1px solid black;
  height: auto;
  padding: 10px;
  margin: 3px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  border-radius: 10px;
  width: 100%;

  @media only screen and (min-width: 500px) {
    height: 70px;
    width: 200px;
    &:hover {
      background: black;
      color: #fffafc;
    }
  }
`;

const Content = styled.div`
  margin: auto;
  max-width: 80vw;
`;
