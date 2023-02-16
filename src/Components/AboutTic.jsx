import React from "react";
import styled from "styled-components";
import { image1 } from "../Images";

function AboutTic() {
  return (
    <Container>
      <div className="about-text">
        <h1>About The TiC Summit</h1>
        <p>
          The TiC Summit is an annual hackathon and pitching competition hosted
          by the TiC Foundation. With the main aim of fostering creativity
          amongst secondary school students by giving them a chance to present
          projects on various topics Ranging from smart dustbin to websites and
          so on Register today with your team and you project, together let’s
          build the future we deserve
        </p>
      </div>
      <div className="about-image">
        <img src={image1} />
      </div>
    </Container>
  );
}

export default AboutTic;

const Container = styled.div`
  display: flex;
  margin-top: 1cm;
  width: 100%;
  overflow-y: hidden;
  padding: 1cm;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  .about-text {
    width: 40%;
    margin-right: 0.5cm;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 90%;
    }
    h1 {
      font-size: 4em;
    }
    p {
      font-size: 1.55em;
    }
  }
  .about-image {
    width: 50%;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 90%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  hr {
    width: 50%;
  }
`;
