import React from "react";
import styled from "styled-components";

function Curriculum() {
  return (
    <Container>
      <div className="intro">
        <h1>Curriculum</h1>
      </div>
    </Container>
  );
}

export default Curriculum;

const Container = styled.div`
  .intro {
    margin: 0 0 1cm 1cm;
  }
`;
