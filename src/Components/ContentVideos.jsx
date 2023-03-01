import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

import {
  designthinking,
  finance,
  problemsolving,
  projectmanagement,
  prototyping,
  businessplan,
} from "../Images";

const videosContent = [
  {
    id: 1,
    image: designthinking,
    name: "Design thinking",
    instructor: "Bill Agha",
    content:
      "Design thinking is a human-centered approach to innovation—anchored in understanding customer needs, rapid prototyping, and generating creative ideas—that will transform the way you develop products, services, processes, and organizations.",
  },
  {
    id: 2,
    image: businessplan,
    name: "Business plan",
    instructor: "Bill Agha",
    content:
      "Design thinking is a human-centered approach to innovation—anchored in understanding customer needs, rapid prototyping, and generating creative ideas—that will transform the way you develop products, services, processes, and organizations.",
  },
  {
    id: 3,
    image: projectmanagement,
    name: "Project management",
    instructor: "Bill Agha",
    content:
      "Design thinking is a human-centered approach to innovation—anchored in understanding customer needs, rapid prototyping, and generating creative ideas—that will transform the way you develop products, services, processes, and organizations.",
  },
  {
    id: 4,
    image: prototyping,
    name: "Prototyping your Apps using Figma",
    instructor: "Bill Agha",
    content:
      "Design thinking is a human-centered approach to innovation—anchored in understanding customer needs, rapid prototyping, and generating creative ideas—that will transform the way you develop products, services, processes, and organizations.",
  },
  {
    id: 5,
    image: finance,
    name: "How to plan your Finance according to your project requirements",
    instructor: "Bill Agha",
    content:
      "Design thinking is a human-centered approach to innovation—anchored in understanding customer needs, rapid prototyping, and generating creative ideas—that will transform the way you develop products, services, processes, and organizations.",
  },
  {
    id: 6,
    image: problemsolving,
    name: "Problem solving",
    instructor: "Bill Agha",
    content:
      "Design thinking is a human-centered approach to innovation—anchored in understanding customer needs, rapid prototyping, and generating creative ideas—that will transform the way you develop products, services, processes, and organizations.",
  },
];
function ContentVideos() {
  return (
    <Container>
      <Component
        imgLink={videosContent[0].image}
        name={videosContent[0].name}
        instructor={videosContent[0].instructor}
        content={videosContent[0].content}
        link="/"
      />
      <Component
        imgLink={videosContent[1].image}
        name={videosContent[1].name}
        instructor={videosContent[1].instructor}
        content={videosContent[1].content}
        link="/"
      />
      <Component
        imgLink={videosContent[2].image}
        name={videosContent[2].name}
        instructor={videosContent[2].instructor}
        content={videosContent[2].content}
        link="/"
      />
      <Component
        imgLink={videosContent[3].image}
        name={videosContent[3].name}
        instructor={videosContent[3].instructor}
        content={videosContent[3].content}
        link="/"
      />
      <Component
        imgLink={videosContent[4].image}
        name={videosContent[4].name}
        instructor={videosContent[4].instructor}
        content={videosContent[4].content}
        link="/"
      />
      <Component
        imgLink={videosContent[5].image}
        name={videosContent[5].name}
        instructor={videosContent[5].instructor}
        content={videosContent[5].content}
        link="/"
      />
    </Container>
  );
}

export default ContentVideos;

function Component(props) {
  return (
    <Fade left>
      <ComponentContainer to={props.link}>
        <div className="image">
          <img src={props.imgLink} />
        </div>
        <div className="details">
          <h2>{props.name}</h2>
          <h3>Course Instructor: {props.instructor}</h3>
          <p>{props.content}</p>
        </div>
      </ComponentContainer>
    </Fade>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
`;

const ComponentContainer = styled(Link)`
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  text-decoration: none;
  padding: 0.5cm;
  border-radius: 0.15cm;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  border: 2px solid transparent;
  margin: 0.25cm 0 0.5cm 0;
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  &:hover {
    border-color: black;
  }
  .image {
    margin-right: 1cm;
    @media (min-width: 320px) and (max-width: 480px) {
      margin: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .details {
    h2 {
      font-size: 2em;
      color: #0066ff;
      margin-bottom: 0.3cm;
    }
    p {
      font-size: 1em;
      text-align: justify;
    }
    h3,
    p {
      color: black;
    }
  }
`;
