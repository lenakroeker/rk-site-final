import React from "react";
import styled from "styled-components";

export default function Research() {
  return (
    <Wrapper>
      <Text>
        <Bold>2008</Bold>
        Graham Foundation Grant. Symposium on Dakota Sacred Places, Past,
        Present, and Future
      </Text>
      <Text>
        <Bold>2006</Bold>
        CBIP (Commercial Buildings Incentives Program) Grant, Natural Resources
        Canada. Passive energy technology, Pictou Landing Health Centre
      </Text>
      <Text>
        <Bold>2005</Bold>
        SSHRC major grant, co-applicant with Ted Cavanagh, Roger Mullin
        Cheticamp Projects – Coastal studio (undisclosed amount)
      </Text>
      <Text>
        <Bold>2004</Bold>
        Industrial Research Assistance Program – Pictou Landing Health
        Centre,community sawmill / training centre design
      </Text>
      <Text>
        <Bold>2003</Bold>
        Industrial Research Assistance Program Grant: Multiple unit , low energy
        affordable housing design
      </Text>
      <Text>
        <Bold>2002</Bold>
        Collaborator and project initiater in CIDA major grant proposal
        development: Gambia Project. Major Grant awarded to Dalhousie University
        Faculty of Architecture
      </Text>
      <Text>
        <Bold>2002</Bold>
        Appointed Honorary Research Associate, Nova Scotia College of Art and
        Design August 2002
      </Text>
      <Text>
        <Bold>2001</Bold>
        Travel Research Grant to Baubiologie Institute & Prof. Gernot Minke,
        Germany
      </Text>
      <Text>
        <Bold>2000</Bold>
        Canada Council Major Grant in Architecture: Study of First Nations
        Building Technology in North Eastern North America
      </Text>
      <Text>
        <Bold>2000</Bold>
        Industrial Research Assistance Program Grant : Development of
        Prefabrication Methods for Small Diameter Roundwood Structures
      </Text>
      <Text>
        <Bold>2000</Bold>
        Nova Scotia Education Development Grant. Gambia: Design and Community
        Development Education Project: Results in Major CIDA Grant to Dalhousie
        University School of Architecture, 2002
      </Text>
      <Text>
        <Bold>1999</Bold>
        Industrial Research Assistance Program Grant : Earth Forming of Concrete
        Shell Structures
      </Text>
      <Text>
        <Bold>1995</Bold>
        SSHRC Minor Grant: Documentation of Eskasoni Project
      </Text>
      <Text>
        <Bold>1995</Bold>
        Participant in RAIC - CIDA Youth Program in Architecture, Columbia.
        Principal grant recipient Dr. Essy Baniassad
      </Text>
      <Text>
        <Bold>1994</Bold>
        Canada - Nova Scotia Agreement on Sustainable Economic Development:
        Green Building Grant awarded in association with Eskasoni First Nation
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
  margin-right: 0.5em;
  font-weight: bold;
`;
