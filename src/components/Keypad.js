import React, { useState } from "react";
import Field from "./Field";

import Key from "./Key";

const Keypad = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
  const [allkeys, setallkeys] = useState("");

  return (
    <div className="main__container">
      <div className="phone__container">
        <Field allkeys={allkeys} />
        <div className="phone__keypad">
          {numbers.map((i, index) => (
            <Key
              number={i}
              key={index}
              onAdd={(val) => setallkeys(allkeys + val)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keypad;
