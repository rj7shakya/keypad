import React from "react";
import back from "./back.webp";

const Field = ({ allkeys, onRemove }) => {
  return (
    <div className="phone__field">
      <div className="phone__number">{allkeys}</div>
      <img className="phone__back" src={back} onClick={onRemove} />
    </div>
  );
};

export default Field;
