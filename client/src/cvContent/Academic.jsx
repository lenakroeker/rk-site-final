import React from "react";
import styled from "styled-components";

export default function Academic() {
  return (
    <Wrapper>
      <Text>
        <Bold>2019-2020</Bold>
        International Sustainable Science Building Festival: Matchbox Energy
        Modeling, Guest reviewer. RAIC Athabasca University, Tecnologico de
        Monterrey, Mexico, Cardiff School of Art & Design, Witts University, S.
        Africa, University of Botswana
      </Text>
      <Text>
        <Bold>2016</Bold>
        Visiting Professor, Lehigh University
      </Text>
      <Text>
        <Bold>2015</Bold>
        Professor Emeritus, Dalhousie University
      </Text>
      <Text>
        <Bold>2010 - 2012</Bold>
        Acting Director, Dalhousie School of Architecture
      </Text>
      <Text>
        <Bold>2011 - 2012</Bold>
        Visiting Professor, Peter Behrens School of Architecture, Dusseldorf,
        Germany
      </Text>
      <Text>
        <Bold>2003- 2007</Bold>
        Cass Gilbert Visiting Professor, University of Minnesota, College of
        Architecture and Landscape Architecture
      </Text>
      <Text>
        <Bold>2008</Bold>
        Norwegian University of Science and Technology,Trondheim Norway Guest
        Workshop
      </Text>
      <Text>
        <Bold>2008 - 2010</Bold>
        Dalhousie University Senate
      </Text>
      <Text>
        <Bold>2003</Bold>
        Promoted to Full Professor, Dalhousie University Faculty of Architecture
        and Planning
      </Text>
      <Text>
        <Bold>2002</Bold>
        Honorary Research Associate, Nova Scotia College of Art and Design
      </Text>
      <Text>
        <Bold>1991</Bold>
        Faculty of Architecture and Planning, Technical University of Nova
        Scotia / Dalhousie University
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
