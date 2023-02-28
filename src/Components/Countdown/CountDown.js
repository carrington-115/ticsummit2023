import React, { useState, useEffect } from "react";
import Component from "./Component";
import styled from "styled-components";

function CountDown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const defaultCountDown = () => {
    let deadline = new Date("March 15, 2023").getTime();

    let interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = deadline - now;
      let set_days = Math.floor(distance / (24 * 60 * 60 * 1000));
      let set_hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      let set_minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      let set_seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval();
      } else {
        setDays(set_days);
        setHours(set_hours);
        setMinutes(set_minutes);
        setSeconds(set_seconds);
      }
    });
  };

  useEffect(() => {
    defaultCountDown();
  });

  return (
    <Container>
      <Component
        loopDay={days}
        loopHours={hours}
        loopMinutes={minutes}
        loopSeconds={seconds}
      />
    </Container>
  );
}

export default CountDown;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
