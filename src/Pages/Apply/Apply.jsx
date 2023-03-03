import React from "react";
import styled from "styled-components";
import ApplyNavBar from "./ApplyNavBar";
import { Outlet } from "react-router-dom";

function Apply() {
  return (
    <Container>
      <ApplyNavBar />
      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
}

export default Apply;

const Container = styled.div`
  position: relative;
  margin-bottom: 1cm;
  padding: 2cm 0;
  .content {
    padding: 0 1cm;
  }
`;
