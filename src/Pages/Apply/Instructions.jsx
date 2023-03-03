import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Instructions() {
  const innerLinkStyle = {
    textDecoration: "none",
  };
  const navigate = useNavigate();
  return (
    <Container>
      <div className="welcome-msg">
        <h2>
          Congratulations Innovators. You are away from registering for TIC
          SUMMIT 2023. To proceed, read the instructions below and follow the
          appropriate links.
        </h2>
        <ol>
          <h3>
            <strong>Note:</strong> Make sure to visit our &nbsp;
            <Link to="/curriculum" style={innerLinkStyle}>
              Curriculum page
            </Link>
          </h3>
          <li>
            Have an idea you want to develop to solve a Problem in your
            community or contact us for &nbsp;
            <a
              style={innerLinkStyle}
              href="https://forms.gle/78efRTDA4AEfFi6D8"
            >
              mentorship
            </a>
            .
          </li>
          <li>
            Proceed to the
            <Link to="/apply/application_fee" style={innerLinkStyle}>
              &nbsp;Payments page&nbsp;
            </Link>
            to pay your application fee. You can pay the application using
            Mobile money (MTN or Orange Mobile money payment)
          </li>
          <li>Then Fill the Registration Form</li>
        </ol>
        <div className="proceed">
          <button onClick={() => navigate("/apply/application_fee")}>
            Proceed to Payment
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Instructions;

const Container = styled.div`
  font-size: 1.2em;
  margin: 0 2cm;
  .welcome-msg {
    h2 {
      width: 70%;
      font-size: 1.2em;
    }
  }
  ol {
    h3 {
      margin-bottom: 0.5cm;
    }
  }
  .proceed {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1cm 2cm 0 0;
    button {
      background-color: black;
      width: 30%;
      font-size: 1.3em;
      color: white;
      height: 1.5cm;
      border-radius: 0.8cm;
      border: 2px solid transparent;
      cursor: pointer;
      &:hover {
        color: black;
        background-color: transparent;
        border-color: black;
      }
    }
  }
`;
