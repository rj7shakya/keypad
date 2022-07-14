import React from "react";

const Key = ({ number, onAdd }) => {
  return (
    <div className="phone__key one" onClick={() => onAdd(number)}>
      {number}
    </div>
  );
};

export default Key;
