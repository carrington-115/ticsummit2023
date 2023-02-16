import React from "react";
import styled from "styled-components";
import { elirec1, elirec2, elirec3 } from "../Images";
import { Fade } from "react-reveal";

function Eligibility() {
  return (
    <Container>
      <div className="line">
        <hr />
      </div>
      <main className="title">
        <h1>Eligibility</h1>
      </main>
      <Fade left>
        <div>
          <img src={elirec1} />
          <h4>Be a Secondary or High School Student</h4>
        </div>
      </Fade>
      <Fade left>
        <div>
          <img src={elirec2} />
          <h4>Be a Cameroonian of Nationality</h4>
        </div>
      </Fade>
      <Fade left>
        <div>
          <img src={elirec3} />
          <h4>Have a creative Idea</h4>
        </div>
      </Fade>
    </Container>
  );
}

export default Eligibility;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    margin-bottom: 0.5cm;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 5px;
    }
    h4 {
      font-size: 2em;
      margin-left: 1cm;
      @media (min-width: 320px) and (max-width: 480px) {
        font-size: 1em;
      }
    }
    svg {
      position: relative;
      @media (min-width: 320px) and (max-width: 480px) {
        width: 2px;
        height: 1cm;
      }
    }
  }
  main {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1cm;
    h1 {
      font-size: 4em;
    }
  }
  .line {
    width: 100%;
    display: flex;
    justify-content: center;
    hr {
      width: 50%;
      margin-bottom: 1cm;
    }
  }
`;
