import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setopen] = useState(false);

  const handleClick = () => {
    setopen(!open);
  };
  return (
    <Head>
      <NavItem end to="/">
        <Logo>Richard Kroeker</Logo>
      </NavItem>
      {(open || window.innerWidth > 600) && (
        <Nav onClick={handleClick}>
          <NavItem end to="/cv">
            CV
          </NavItem>
          <NavItem end to="/projects">
            Projects
          </NavItem>
          <NavItem end to="/media">
            Media
          </NavItem>
          <NavItem end to="/dispatches">
            Dispatches
          </NavItem>

          <NavItem end to="/matchbox">
            Matchbox
          </NavItem>
          <NavItem end to="/murdena-and-albert-marshall-bursary">
            Marshall Bursary
          </NavItem>
          <NavItem end to="/contact">
            Contact
          </NavItem>
        </Nav>
      )}

      <Hamburger onClick={handleClick}>
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 12 12"
          enableBackground="new 0 0 12 12"
          id="Слой_1"
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <rect fill="white" height="1" width="11" x="0.5" y="5.5" />
            <rect fill="white" height="1" width="11" x="0.5" y="2.5" />
            <rect fill="white" height="1" width="11" x="0.5" y="8.5" />
          </g>
        </svg>
      </Hamburger>
    </Head>
  );
}

const Head = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 10vw;
  background-color: #000;
  z-index: 100;
`;

const Logo = styled.div`
  color: #b6b4b4;
`;

const Nav = styled.nav`
  display: block;
  position: absolute;
  right: 0;
  top: 50px;
  width: 30vw;
  background: black;

  @media only screen and (min-width: 600px) {
    position: relative;
    top: 0;
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavItem = styled(NavLink)`
  color: #fff;
  padding: 15px;
  display: block;
`;

const Hamburger = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;
