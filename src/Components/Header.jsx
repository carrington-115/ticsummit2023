import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Images";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const logoLinkStyle = {
  TextDecoration: "none",
};
function Header() {
  const [scroll, setScroll] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const navigate = useNavigate();

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
        <div className="pages">
          <PageLink to="/" style={logoLinkStyle}>
            Home
          </PageLink>
          <PageLink to="/curriculum" style={logoLinkStyle}>
            Curriculum
          </PageLink>
        </div>
        <button className="header-btn" onClick={() => navigate("/apply")}>
          Apply
        </button>
        <div
          className="menu"
          onClick={() => {
            setShowBar(true);
          }}
        >
          <HiMenuAlt3 />
        </div>
      </nav>
      <SideBar show={showBar}>
        <div className="first-part" show={showBar}>
          <div className="logo" scrolling={scroll} show={showBar}>
            <img src={Logo} alt="logo" />
          </div>
          <div
            className="close-btn"
            show={showBar}
            onClick={() => {
              setShowBar(false);
            }}
          >
            <GrClose />
          </div>
        </div>
        <div className="pages" show={showBar}>
          <SidePageLink show={showBar} onClick={() => setShowBar(false)} to="/">
            Home
          </SidePageLink>
          <SidePageLink
            show={showBar}
            onClick={() => setShowBar(false)}
            to="/curriculum"
          >
            Curriculum
          </SidePageLink>
          <button>Apply</button>
        </div>
      </SideBar>
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
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 25px;
    margin: 0;
    margin: 0.25cm 0;
  }
`;
const SidePageLink = styled(PageLink)``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  .header-btn {
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    .pages {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-right: 2cm;
      @media (min-width: 320px) and (max-width: 480px) {
        display: none;
      }
    }
  }

  .menu {
    @media (min-width: 481px) {
      display: none;
    }
    margin-left: 0.5cm;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    svg {
      width: 1.5cm;
      height: 1.5cm;
    }
  }
`;

const SideBar = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0.5cm 1cm;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
  transition: all 0.2s 250ms ease-in;
  @media (min-width: 481px) {
    display: none;
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
  .first-part {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .close-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    svg {
      width: 1.5cm;
      height: 1.5cm;
    }
  }
  .pages {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      background-color: #000000;
      color: #e8aa42;
      padding: 0.25cm 1cm;
      font-size: 20px;
      border-radius: 5px;
      margin-top: 1cm;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
`;
