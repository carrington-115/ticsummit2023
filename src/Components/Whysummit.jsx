import React from "react";
import styled from "styled-components";
import { dots } from "../Images";
import { Zoom } from "react-reveal";

const reasons = [
  {
    id: 1,
    reason:
      "A chance to receive mentoring from successful business people and professors at the national Polytechnique",
  },
  {
    id: 2,
    reason: "A chance to have a scholarship with our program ",
  },
  {
    id: 3,
    reason: "Certificates of recognition to all selected participants",
  },
  {
    id: 4,
    reason: "Prizes worth 1 Million CFA Francs to the finalists.",
  },
  {
    id: 5,
    reason:
      "Free training on many personal and professional development topics",
  },
];
function Whysummit() {
  return (
    <Container>
      <h1>Why TiC Summit??</h1>
      <div className="reason-grid">
        {reasons.map((reason) => (
          <div key={reason.id}>
            <h1>{reason.id}</h1>
            <h2>{reason.reason}</h2>
          </div>
        ))}
      </div>
      <div className="reason-mob">
        <ol>
          {reasons.map((reason) => (
            <li key={reason.id}>
              <h2>{reason.reason}</h2>
            </li>
          ))}
        </ol>
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
      display: none;
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
  .reason-mob {
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 2;
    ol {
      width: 80%;
      li,
      li::marker {
        font-size: 1.2em;
      }
    }
    @media (min-width: 480px) {
      display: none;
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
