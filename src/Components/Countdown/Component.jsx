import React from "react";
import styled from "styled-components";

function Component({ loopDay, loopHours, loopMinutes, loopSeconds }) {
  return (
    <CountDown>
      <div className="count">
        {loopDay}
        <br /> Days
      </div>
      <div className="count">
        {loopHours} <br /> Hours
      </div>
      <div className="count">
        {loopMinutes} <br /> Mins
      </div>
      <div className="count">
        {loopSeconds} <br /> Secs
      </div>
    </CountDown>
  );
}

export default Component;

const CountDown = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1cm;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
  .count {
    color: #0066ff;
    padding: 0.5cm;
    width: 2.5cm;
    height: 2cm;
    font-size: 25px;
    border: 1px solid #0066ff;
    font-weight: bold;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
      padding: 0;
      font-size: 20px;
      width: 2cm;
      height: 2cm;
    }
  }
`;
