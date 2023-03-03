import React from "react";
import styled from "styled-components";

function ApplyForm() {
  return (
    <Container>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSewP8UAkgd2Aqf5xyxZEzpRcM_8oMXMBNAVzqgtOpJl9_4twA/viewform?embedded=true"
        width="1200"
        height="1000"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Container>
  );
}

export default ApplyForm;

const Container = styled.div``;
