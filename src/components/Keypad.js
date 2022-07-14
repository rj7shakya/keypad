import React from "react";

import back from "./back.webp";
import Key from "./Key";

const Keypad = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

  return (
    <div className="main__container">
      <div className="phone__container">
        <div className="phone__field">
          <div className="phone__number"></div>
          <img className="phone__back" src={back} />
        </div>
        <div className="phone__keypad">
          {numbers.map((i, index) => (
            <Key number={i} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keypad;
