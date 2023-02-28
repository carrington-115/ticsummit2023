import React from "react";
import {
  designthinking,
  finance,
  problemsolving,
  projectmanagement,
  prototyping,
  businessplan,
} from ".../Images";
import styled from "styled-components";

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
    id: 1,
    image: designthinking,
    name: "Design thinking",
    instructor: "Bill Agha",
    content:
      "Design thinking is a human-centered approach to innovation—anchored in understanding customer needs, rapid prototyping, and generating creative ideas—that will transform the way you develop products, services, processes, and organizations.",
  },
  {
    id: 1,
    image: designthinking,
    name: "Design thinking",
    instructor: "Bill Agha",
    content:
      "Design thinking is a human-centered approach to innovation—anchored in understanding customer needs, rapid prototyping, and generating creative ideas—that will transform the way you develop products, services, processes, and organizations.",
  },
];

function ContentVideos() {
  return <Container>ContentVideos</Container>;
}

function Component(props) {
  return (
    <ComponentContainer>
      <div className="image">
        <img src={props.imgLink} alt={props.imgName} />

      </div>
    </ComponentContainer>
  );
}

export default ContentVideos;

const Container = styled.div``;

const ComponentContainer = styled.section``;
