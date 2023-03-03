import React from "react";
import styled from "styled-components";
import { ContentVideos } from "../Components";
import { Link } from "react-router-dom";

const links = [
  { id: 1, name: "Design thinking", url: "/courses/designthinking" },
  { id: 2, name: "Business plan", url: "/courses/businessplan" },
  { id: 3, name: "Project management", url: "/courses/projectmanagement" },
  {
    id: 4,
    name: "Prototyping your apps using Figma",
    url: "/courses/prototypingwithfigma",
  },
  {
    id: 5,
    name: "How to plan your Finance according to your project requirements",
    url: "/courses/financemanagement",
  },
  { id: 6, name: "Problem solving", url: "/courses/problemsolvingapproach" },
  {
    id: 7,
    name: "Build a Social Media page with HTML and CSS",
    url: "/courses",
  },
  { id: 8, name: "Build a website with HTML and CSS", url: "/courses" },
  { id: 9, name: "TIC Summit 2022 Day 1 & 2 Summary", url: "/courses" },
];

const linkStyle = {
  textDecoration: "none",
  color: "#0066FF",
};
function Curriculum() {
  return (
    <Container>
      <div className="main-part">
        <h1>Curriculum</h1>
        <ContentVideos />
      </div>
      <div className="aside-div">
        <aside>
          <h1>Overview</h1>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link style={linkStyle} to={link.url}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Container>
  );
}

export default Curriculum;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  .main-part {
    width: 60%;
    padding: 0 1cm 1cm 1cm;
    h1 {
      margin-bottom: 0.5cm;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: 3cm;
      align-items: center;
      padding: 0 1cm;
    }
  }
  .aside-div {
    width: 30%;
    display: flex;
    justify-content: center;
    padding: 1.5cm 0 1.5cm 0;
    aside {
      display: flex;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.1);
      width: 90%;
      height: fit-content;
      border-radius: 0.2cm;
      padding: 0 0 1cm 1cm;
      margin-right: 1cm;
      h1 {
        text-align: center;
        padding: 0.5cm;
        margin-right: 0.5cm;
      }
      ul {
        width: 80%;
        li {
          margin-bottom: 0.25cm;
          font-size: 1.2em;
        }
      }
      @media (min-width: 320px) and (max-width: 480px) {
        display: none;
      }
    }
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
  }
`;
