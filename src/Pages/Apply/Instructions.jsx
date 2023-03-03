import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Instructions() {
  const innerLinkStyle = {
    textDecoration: "none",
  };
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
            <strong>Note:</strong> Make sure to visit our
            <Link to="/curriculum" style={innerLinkStyle}>
              Curriculum page
            </Link>
          </h3>
          <li>
            Have an idea you want to develop to solve a Problem in your
            community or contact us for
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
            <Link to="/apply/payments" style={innerLinkStyle}>
              Payments page
            </Link>
            to pay your application fee. You can pay the application using
            Mobile money (MTN or Orange Mobile money payment)
          </li>
          <li>Then Fill your Registration Form</li>
        </ol>
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
`;
