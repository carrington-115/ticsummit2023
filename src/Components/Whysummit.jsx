import React from "react";
import styled from "styled-components";
import { dots } from "../Images";
import { Zoom } from "react-reveal";

function Whysummit() {
  return (
    <Container>
      <h1>Why TiC Summit??</h1>
      <div className="reason-grid">
        <div>
          <h1>1.</h1>
          <h2>
            A chance to receive mentoring from successful business people and
            professors at the national Polytechnique
          </h2>
        </div>
        <div>
          <h1>2.</h1>
          <h2>A chance to have a scholarship with our program</h2>
        </div>
        <div>
          <h1>3.</h1>
          <h2>Certificates of recognition to all selected participants</h2>
        </div>
        <div>
          <h1>4.</h1>
          <h2>Prizes worth 1 Million CFA Francs to the finalists.</h2>
        </div>
        <div>
          <h1>5.</h1>
          <h2>
            Free training on many personal and professional development topics
          </h2>
        </div>
      </div>
      <hr />
      <Zoom top>
        <img className="dot1" src={dots} />
      </Zoom>
      <Zoom top>
        <img className="dot2" src={dots} />
      </Zoom>
      <Zoom top>
        <img className="dot3" src={dots} />
      </Zoom>
    </Container>
  );
}

export default Whysummit;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1cm;
  position: relative;

  h1 {
    font-size: 3em;
    color: #0066ff;
    margin-bottom: 1cm;
    text-align: center;
  }
  .reason-grid {
    display: grid;
    justify-content: center;
    margin-top: 2cm;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1cm;
    margin: 0 3cm;
    z-index: 2;
    @media (min-width: 320px) and (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 0.25cm;
      margin: 0;
      margin: 0 0.5cm;
    }
    div {
      h2 {
        font-size: 25px;
        padding: 0 0.5cm;
      }
      h1 {
        font-size: 5em;
        @media (min-width: 320px) and (max-width: 480px) {
          display: none;
        }
      }
    }
  }
  .dot1,
  .dot2,
  .dot3 {
    position: absolute;
    z-index: 0;
    opacity: 70%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .dot1 {
    left: 0;
    top: 0;
    width: 2cm;
    height: 2cm;
  }
  .dot2 {
    right: 0;
    bottom: 0;
    width: 4cm;
    height: 4cm;
  }
  hr {
    width: 50%;
    margin-top: 1cm;
  }
`;
