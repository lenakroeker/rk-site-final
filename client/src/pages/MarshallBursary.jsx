import React from "react";
import styled from "styled-components";

export default function MarshallBursary() {
  return (
    <Wrapper>
      <Title>The Murdena and Albert Marshall Bursary</Title>
      <A
        href="https://alumniapps2.dal.ca/giving/?gift=marshallbursary&fbclid=IwZXh0bgNhZW0CMTAAAR3m6_gyTYLmR-1ZfvmXB2aUiQ7W3qM-N6TRtC-yW9x9sZOEaGvJOZkptFQ_aem_YRqv6uC46fOBheCrR3lniA"
        target="_blank"
      >
        Donate to the Bursary Here
      </A>
      <Iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9UVIrr01DIA?si=lquYfdaeZa2YbbBi"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullCcreen
      ></Iframe>
      <Text>
        For many years, Albert and Murdena Marshall have welcomed Dalhousie
        Architecture students into their home and shared their knowledge and
        time with generations of students learning about Indigenous ways of
        building and the concept of Etuaptmumk, Two-Eyed Seeing. In 2021, with
        the help of Professor Emeritus Richard Kroeker, the Marshall Bursary was
        established to provide financial support to a Mi’kmaw student pursuing a
        degree in architecture, planning or engineering.
      </Text>
      <A
        href="https://www.dal.ca/giving/for-our-donors/giving-power/giving-power-spring-summer-2023/coming-together-supporting-mikmaw-students-in-design-professions.html"
        target="_blank"
      >
        More Info
      </A>
    </Wrapper>
  );
}

const Title = styled.h2``;
const Iframe = styled.iframe``;

const Wrapper = styled.div`
  text-align: center;
  min-height: 80vh;
  padding: 100px 6vw;

  @media only screen and (min-width: 500px) {
    padding: 100px;
    width: 98vw;
  }
`;

const Text = styled.p`
  max-width: 800px;
  margin: 20px auto;
`;

const A = styled.a`
  color: black;
  padding: 10px 30px;
  background: #d0f3ff;
  display: block;
  margin: 30px auto;
  border-radius: 10px;
  width: 300px;
  transition: 0.5s ease;
  &:hover {
    background-color: #00b7ff;
    color: black !important;
  }
`;
