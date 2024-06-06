import React from "react";
import styled from "styled-components";

export default function Interviews() {
  return (
    <Wrapper>
      <Text>
        Kroeker, Richard. “Radio Alex” FM radio interview, Alexandra Township,
        South Africa. June 25, 2011
      </Text>
      <Text>
        Kroeker, Richard. Botswana Television (BTV) interview. July 2011
      </Text>
      <Text>
        Kroeker, Richard. Pictou Landing Health Centre interview with CBC
        Maritimes Sept. 2009
      </Text>
      <Text>
        Kroeker, Richard. “Building with phone books” interview with Elizabeth
        Chiang, Carleton University Newspaper. Aug. 2005
      </Text>
      <Text>
        Kroeker, Richard. “Building with phone books” interview with Karen
        Birchard, Chronicle of Higher Education. Sept. 2005
      </Text>
      <Text>
        Kroeker, Richard. “Design for Development” interview with Victor
        Nerenberg of Radio Canada International. Aug. 2005
      </Text>
      <Text>
        Kroeker, Richard. “Building with phone books” Global TV news, local and
        National. Aug. 2005
      </Text>
      <Text>
        Kroeker, Richard. “Building with phone books” CBC local News – TV. Aug.
        2005
      </Text>
      <Text>
        Kroeker, Richard. “Building with phone books” Interview with CJOB radio
        – Winnipeg
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
