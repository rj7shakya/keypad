import React from "react";

import back from "./back.webp";
import Key from "./Key";

const Keypad = () => {
  return (
    <div className="main__container">
      <div className="phone__container">
        <div className="phone__field">
          <div className="phone__number"></div>
          <img className="phone__back" src={back} />
        </div>
        <div className="phone__keypad">
          <Key number={"1"} />
          <Key number={"2"} />
          <Key number={"3"} />
          <Key number={"4"} />
          <Key number={"5"} />
          <Key number={"6"} />
          <Key number={"7"} />
          <Key number={"8"} />
          <Key number={"9"} />
          <Key number={"*"} />
          <Key number={"0"} />
          <Key number={"#"} />
        </div>
      </div>
    </div>
  );
};

export default Keypad;
