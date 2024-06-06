import React from "react";
import styled from "styled-components";
import MatchboxLogo from "../assets/matchboxlogo.png";

export default function Matchbox() {
  return (
    <Wrapper>
      <Img src={MatchboxLogo} />
      <Text>
        MATCHBOX is an energy calculation tool which offers a basis for
        communication between design consultants throughout the design process.
        MATCHBOX enables systematic analysis of critical building energy flows
        related to climate, occupancy, envelope, and building orientation.
        MATCHBOX does not create the design, or prescribe design solutions, but
        by quickly and simply quantifying, graphing, and tracking the energy
        effects of design decisions, it can give building designers a clear,
        quick measure of the energy consequences of fundamental design
        decisions. MATCHBOX was developed to enable the delivery of net-zero and
        regenerative buildings, by enabling designers to visualize and track the
        energy effects of their decisions from the initial stages of design to
        completion. MATCHBOX useful, elemental technology in compact form.
      </Text>
      <Gateway>
        Find out more on the Matchbox website{" "}
        <A href="https://matchboxenergy.com/" target="_blank">
          HERE
        </A>
      </Gateway>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  min-height: 80vh;
  padding: 100px 6vw;

  @media only screen and (min-width: 500px) {
    padding: 100px;
    width: 98vw;
  }
`;

const Img = styled.img`
  margin: auto auto 30px auto;
  width: 30vw;
  @media only screen and (min-width: 500px) {
    width: 150px;
  }
`;
const Text = styled.p`
  max-width: 800px;
  margin: auto;
`;
const Gateway = styled.p`
  font-weight: bold;
`;
const A = styled.a`
  color: blue;
  text-decoration: underline;
`;
