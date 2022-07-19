import React, { useState } from "react";
import Container from "./Container";
import Field from "./Field";

import Key from "./Key";

const Keypad = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
  const [allkeys, setAllKeys] = useState("123456789");

  const removeDigit = () => {
    if (allkeys.length > 0) {
      setAllKeys(allkeys.substring(0, allkeys.length - 1));
    } else {
      alert("cannot be less than 1");
    }
  };

  const addDigit = (val) => {
    if (allkeys.length > 9) {
      alert("cannot be more than 10 digit");
    } else {
      setAllKeys(allkeys + val);
    }
  };

  return (
    <Container>
      <div className="phone__container">
        <Field allkeys={allkeys} removeDigit={removeDigit} />
        <div className="phone__keypad">
          {numbers.map((i, index) => (
            <Key number={i} key={index} addDigit={addDigit} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Keypad;
