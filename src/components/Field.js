import React from "react";
import back from "./back.webp";

const Field = ({ allkeys }) => {
  return (
    <div className="phone__field">
      <div className="phone__number">{allkeys}</div>
      <img className="phone__back" src={back} />
    </div>
  );
};

export default Field;
