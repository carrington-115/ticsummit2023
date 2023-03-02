import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { CoursePageNavbar } from "../Components";

function CoursePage() {
  return (
    <Container>
      <CoursePageNavbar />
      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
}

export default CoursePage;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  .content {
    max-height: 89vh;
    position: absolute;
    right: 0;
    top: 50;
    bottom: 0;
    width: 80%;
    z-index: 0;
    display: flex;
    overflow-y: visible;
  }
`;
