import React from "react";
import styled from "styled-components";
import {
  LandIntro,
  Whysummit,
  AboutTic,
  Eligibility,
  Curriculum,
} from "../Components";

function Home() {
  return (
    <Container>
      <div className="intro" id="#home">
        <LandIntro />
      </div>
      <Whysummit id="#contact" />
      <AboutTic id="#about" />
      <Eligibility />
      <Curriculum id="#curriculum" />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  .intro {
    height: 100vh;
    @media (min-width: 320px) and (max-width: 480px) {
      height: 85vh;
    }
  }
  @media (min-width: 320px) and (max-width: 700px) {
    padding-top: 3cm;
  }
`;
