import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "../Images";

const logoLinkStyle = {
  TextDecoration: "none",
};
function Header() {
  return (
    <Container>
      <Link to="/" style={logoLinkStyle}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <button>Apply</button>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25cm 4cm 0.25cm 2cm;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;
    padding: 0 0.5cm;
    border-bottom: 1px solid black;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 10;
  }
  .logo {
    width: 108px;
    height: 95px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  button {
    background-color: #000000;
    color: #e8aa42;
    padding: 0.25cm 1cm;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;
