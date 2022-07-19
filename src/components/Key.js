import React from "react";

const Key = ({ number, addDigit }) => {
  return (
    <div className="phone__key one" onClick={() => addDigit(number)}>
      {number}
    </div>
  );
};

export default Key;
