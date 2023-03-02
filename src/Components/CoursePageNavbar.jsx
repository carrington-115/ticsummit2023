import React, { useState } from "react";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { ImExit } from "react-icons/im";
import { NavLink, useNavigate } from "react-router-dom";

function CoursePageNavbar() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const navigate = useNavigate();

  return (
    <NavigationContainer show={toggleMenu}>
      <div className="menu" onClick={() => setToggleMenu(!toggleMenu)}>
        <HiMenu />
      </div>
      <div className="close" onClick={() => navigate("/curriculum")}>
        <ImExit />
      </div>
      <SideBar show={toggleMenu}>
        <Pages>
          <SidePageLink show={toggleMenu} to="/courses/designthinking">
            Design thinking
          </SidePageLink>
          <SidePageLink show={toggleMenu} to="/courses/problemsolvingapproach">
            Problem solving
          </SidePageLink>
          <SidePageLink show={toggleMenu} to="/courses/projectmanagement">
            Project management
          </SidePageLink>
          <SidePageLink show={toggleMenu} to="/courses/prototypingwithfigma">
            Figma (prototyping)
          </SidePageLink>
          <SidePageLink show={toggleMenu} to="/courses/financemanagement">
            Finance management
          </SidePageLink>
          <SidePageLink show={toggleMenu} to="/courses/businessplan">
            Business Plan
          </SidePageLink>
        </Pages>
      </SideBar>
    </NavigationContainer>
  );
}

export default CoursePageNavbar;

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.15cm 1.5cm;
  border: 1px solid black;
  background-color: #050505;
  z-index: 2;
  .menu {
    border: 2px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
    svg {
      width: 1.5cm;
      height: 1.5cm;
      color: white;
    }
  }
  .close {
    width: 1cm;
    height: 1cm;
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 0.15cm;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
    svg {
      width: 100%;
      height: 100%;
      color: white;
    }
  }
`;

const SideBar = styled.nav`
  position: absolute;
  top: 10;
  left: 0;
  bottom: 0;
  min-height: 89vh;
  background-color: #ffff;
  width: 7cm;
  box-shadow: 3px 2px 16px -1px rgba(0, 0, 0, 0.2);
  transform: ${(props) =>
    props.show ? "translateX(0%)" : "translateX(-100%)"};
  transition: all 0.25s 250ms ease-out;
`;

const Pages = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5cm;
  width: 100%;
`;

const SidePageLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2em;
  padding: 0.25cm 0 0.25cm 1cm;
  color: black;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &.active {
    background-color: rgba(0, 0, 0);
    color: white;
  }
`;
