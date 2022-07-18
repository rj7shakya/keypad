import React, { useState } from "react";
import Field from "./Field";

import Key from "./Key";
import KeypadContainer from "./KeypadContainer";

const Keypad = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
  const [allkeys, setallkeys] = useState("");

  const onAdd = (val) => {
    if (allkeys.length < 10) {
      setallkeys(allkeys + val);
    } else {
      alert("Maximum 10 digits allowed");
    }
  };

  const onRemove = () => {
    if (allkeys.length > 0) {
      setallkeys(allkeys.substring(0, allkeys.length - 1));
    } else {
      alert("No digits left");
    }
  };

  return (
    <div className="main__container">
      <KeypadContainer>
        <Field allkeys={allkeys} onRemove={onRemove} />
        <div className="phone__keypad">
          {numbers.map((i, index) => (
            <Key number={i} key={index} onAdd={onAdd} />
          ))}
        </div>
      </KeypadContainer>
    </div>
  );
};

export default Keypad;
