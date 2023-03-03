import React from "react";
import styled from "styled-components";
import { DiagBox, dots } from "../Images";
import { Zoom } from "react-reveal";
import CountDown from "./Countdown/CountDown";
import { useNavigate } from "react-router-dom";

function LandIntro() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>
        Inspiring and Empowering the <h1 className="special">Next Gen</h1> of
        TechPreneurs
      </h1>
      <h3>
        <p>A Tech Innovative Challenge-TiC Summit</p> to Inspire Youths to
        unleash their creative potentials and develop problem solving and
        technology skills.
      </h3>
      <button onClick={() => navigate("/apply/instructions")}>Apply Now</button>
      <CountDown />
      <hr />
      <Zoom right>
        <img className="style1" src={DiagBox} />
      </Zoom>
      <Zoom left>
        <img className="style2" src={DiagBox} />
      </Zoom>
      <Zoom top>
        <img className="style3" src={dots} />
      </Zoom>
      <Zoom top>
        <img className="style4" src={dots} />
      </Zoom>
      <Zoom top>
        <img className="style5" src={dots} />
      </Zoom>
    </Container>
  );
}

export default LandIntro;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  text-align: center;
  position: relative;
  h1 {
    letter-spacing: 5px;
    font-weight: bold;
  }
  .special {
    color: #0066ff;
  }
  h3 {
    width: 40%;
    line-height: 1cm;
    font-size: 23px;
    margin-top: 0.5cm;
    font-weight: normal;
    p {
      font-weight: normal;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      width: 90%;
    }
  }
  h1,
  h3 {
    z-index: 3;
  }
  button {
    font-size: 1.5em;
    padding: 0.3cm 1.2cm;
    margin-top: 0.25cm;
    color: white;
    background-color: black;
    border-radius: 5px;
    z-index: 2;
    cursor: pointer;
    border: 2px solid transparent;
    &:hover {
      background-color: transparent;
      color: black;
      border-color: black;
    }
  }
  hr {
    width: 50%;
    margin-top: 2cm;
  }
  .style1 {
    position: absolute;
    right: 0;
    top: -20;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .style2 {
    position: absolute;
    left: 0;
    top: -20;
    transform: rotateY(180deg);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .style3 {
    position: absolute;
    left: 20%;
    top: 10;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .style4 {
    position: absolute;
    right: 20%;
    top: 5%;
    width: 0.5cm;
    height: 0.5cm;
    img {
      width: 50%;
      height: 50%;
    }
  }
  .style5 {
    position: absolute;
    right: 12%;
    bottom: 0%;
    img {
      width: 50%;
      height: 50%;
    }
  }
  .style1,
  .style2,
  .style3,
  .style4,
  .style5 {
    z-index: 0;
  }
`;
