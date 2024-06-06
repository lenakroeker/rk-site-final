import React from "react";
import styled from "styled-components";

export default function Education() {
  return (
    <Wrapper>
      <Text>
        <Bold>1989</Bold>
        Architectural Association Professional Practice Registered Architect
        Qualification: Architects' Registration Board of the United Kingdom
        Registration number: 055601G
      </Text>
      <Text>
        <Bold>1984</Bold>
        Architectural Association Diploma, London, U.K
      </Text>
      <Text>
        <Bold>1976-78</Bold>
        Graduate level non-degree studies in philosophy & history of philosophy,
        University of Winnipeg, Canada.
      </Text>
      <Text>
        <Bold>1976</Bold>
        Bachelor of Environmental Studies, University of Manitoba, Winnipeg,
        Canada
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 30px 0;
  padding: 5px 20px;
  background: #f5fbff84;
  @media only screen and (min-width: 500px) {
    margin: 50px 0;
    padding: 30px;
    min-width: 400px;
  }
`;
const Text = styled.p``;
const Bold = styled.span`
  font-weight: bold;
  margin-right: 0.5em;
`;
