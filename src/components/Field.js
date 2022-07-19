import React from "react";
import back from "./back.webp";

const Field = () => {
  return (
    <div className="phone__field">
      <div className="phone__number">{}</div>
      <img className="phone__back" src={back} />
    </div>
  );
};

export default Field;
