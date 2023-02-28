import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "../Images";

const logoLinkStyle = {
  TextDecoration: "none",
};
function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setScroll(true);
      }
    });
  }, []);

  return (
    <Container scrolling={scroll}>
      <Link className="logo-link" to="/" style={logoLinkStyle}>
        <div className="logo" scrolling={scroll}>
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <nav className="navigation">
        <PageLink to="/" style={logoLinkStyle}>
          Home
        </PageLink>
        <PageLink to="/curriculum" style={logoLinkStyle}>
          Curriculum
        </PageLink>
        <button>Apply</button>
      </nav>
    </Container>
  );
}

export default Header;

const PageLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0 0.5cm;
  font-size: 20px;
  &:hover {
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
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
    @media (min-width: 320px) and (max-width: 480px) {
      width: ${(props) => (props.scrolling ? "90px" : "108px")};
      height: ${(props) => (props.scrolling ? "70px" : "95px")};
      transition: all 0.5s 250ms ease-in;
      img {
        width: 100%;
        height: 100%;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .logo-link {
    justify-self: flex-start;
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
  nav {
    justify-self: flex-end;
  }
`;
