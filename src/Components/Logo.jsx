import React from "react";
import { Link } from "react-router-dom";

const letters = ["T-blue", "i-red", "C-black"];
const Logo = () => {
  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        {letters.map((letter, idx) => {
          const [l, color] = letter.split("-");
          return (
            <h1
              key={idx}
              style={{
                color,
                fontWeight: "bolder",
              }}
            >
              {l}
            </h1>
          );
        })}
      </div>
    </Link>
  );
};

export default Logo;
