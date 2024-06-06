import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <Foot>©2024</Foot>;
}

const Foot = styled.footer`
  position: absolute;
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #000;
  color: white;
`;
