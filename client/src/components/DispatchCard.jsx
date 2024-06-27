import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import dateModify from "../methods/dateModify";

export default function DispatchCard({ essay }) {
  return (
    <Wrapper>
      <Nav end to={`/dispatches/${essay._id}`}>
        <Essay>
          <Title>{essay.title}</Title>
          <DateText>{dateModify(essay.date)}</DateText>
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
