import React from "react";

const letters = ["T-blue", "i-red", "C-black"];
const Logo = () => {
  return (
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
  );
};

export default Logo;
