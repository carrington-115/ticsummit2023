import React from "react";
import styled from "styled-components";
import { bmc, pitch, design_thinking } from "../Images";
import { Flip } from "react-reveal";
import { useNavigate } from "react-router-dom";

const part = [
  {
    id: 1,
    location: design_thinking,
    topic: "Design Thinking",
    link: "/courses/designthinking",
    content:
      "It’s a 5 step process which involve: (1) Researching the user (Empathize), (2) Stating the problem (Define), (3) Developing your ideas (ideate), (4) Creating your solution (prototyping), (5) Testing (Try your solution)",
  },
  {
    id: 1,
    location: bmc,
    topic: "Business Model Canvas",
    link: "/courses/businessplan",
    content:
      "A visual representation of a business model, highlighting goals, otives, partners, users, competitors, market and source of  income.",
  },
  {
    id: 1,
    location: pitch,
    topic: "Project Pitching",
    link: "/curriculum",
    content:
      "This is the process of presenting ones project or idea to a potential investor or to a panel of judges/jury members for a prize either in kind or in cash.",
  },
];
function Curriculum() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="first-part">
        <h1>Curriculum</h1>
        <p>
          TiC foundation has well structured curriculum with both created and
          curated content which has been tailored to suite the an average
          creative secondary school student in any class. The content covers
          topics like design thinking, prototyping , deployment, testing and so
          much more.
        </p>
      </div>
      <div className="part-grid">
        {part.map((part) => (
          <Flip right>
            <div key={part.id} onClick={() => navigate(part.link)}>
              <img src={part.location} />
              <h2>{part.topic}</h2>
              <p>{part.content}</p>
            </div>
          </Flip>
        ))}
      </div>
      <div className="more" onClick={() => navigate("/curriculum")}>
        <h2>More</h2>
      </div>
    </Container>
  );
}

export default Curriculum;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1cm 2cm;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0.5cm;
  }
  .first-part {
    h1 {
      font-size: 3em;
    }
    p {
      font-size: 1.5em;
    }
  }

  .part-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2cm;
    margin: 1cm 1cm;
    @media (min-width: 320px) and (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
      margin: 0;
      margin: 0.5cm 0.25cm;
      grid-gap: 0.5cm;
    }
    div {
      box-shadow: 2px 1px 26px -4px rgba(0, 0, 0, 0.3);
      padding: 0.5cm;
      border-radius: 10px;
      border: 0.5px solid transparent;
      cursor: pointer;
      &:hover {
        border-color: black;
      }
      img {
        width: 5cm;
        height: 5cm;
      }
      p {
        font-size: 1.2em;
        padding: 0.5cm 0.5cm 0.5cm 0;
      }
    }
  }
  .more {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    color: #0066ff;
    cursor: pointer;
    h2 {
      padding-bottom: 0.15cm;
      &:hover {
        border-bottom: 1px solid #0066ff;
      }
    }
  }
`;
