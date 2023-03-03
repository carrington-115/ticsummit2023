import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function ApplyNavBar() {
  return (
    <Container>
      <nav>
        <RegSubLink to="/apply/instructions">Instructions</RegSubLink>
        <RegSubLink to="/apply/application_fee">Payments</RegSubLink>
        <RegSubLink to="/apply/application_form">Registration Form</RegSubLink>
      </nav>
    </Container>
  );
}

export default ApplyNavBar;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    height: 1.5cm;
  }
`;

const RegSubLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5em;
  color: white;
  font-weight: bold;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-radius: 0.5cm;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  &.active {
    background-color: white;
    color: black;
  }
`;
