import React from "react";
import styled from "styled-components";
import { mtn, orange } from "../../Images";

function Payments() {
  return (
    <Container>
      <h2>
        Proceed to do your payments. Below are the mobile money payment
        platforms we support.
      </h2>
      <div className="momo-img">
        <div>
          <img src={mtn} />
        </div>
        <div>
          <img src={orange} />
        </div>
      </div>
      <div className="pay">
        <PayButton href="https://flutterwave.com/pay/ywv8kzbojh2h">
          Pay now
        </PayButton>
      </div>
    </Container>
  );
}

export default Payments;

const Container = styled.div`
  h2 {
    width: 50%;
    margin-bottom: 1cm;
  }
  .momo-img {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30%;
  }
  .pay {
    width: 100%;
    margin-top: 1cm;
  }
`;

const PayButton = styled.a`
  background-color: black;
  text-decoration: none;
  width: 5cm;
  padding: 0.5cm 1cm;
  font-size: 1.3em;
  color: white;
  height: 1.5cm;
  border-radius: 0.5cm;
  border: 2px solid transparent;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: transparent;
    border-color: black;
  }
`;
