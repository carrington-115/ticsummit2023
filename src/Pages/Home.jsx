import React from "react";
import styled from "styled-components";
import { LandIntro, Whysummit, AboutTic, Eligibility } from "../Components";

function Home() {
  return (
    <Container>
      <div className="intro">
        <LandIntro />
      </div>
      <Whysummit />
      <AboutTic />
      <Eligibility />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  .intro {
    height: 100vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 3cm;
  }
`;
