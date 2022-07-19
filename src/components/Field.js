import React, { useState } from "react";
import back from "./back.webp";

const Field = (props) => {
  console.log(props);

  return (
    <div className="phone__field">
      <div className="phone__number">{props.allkeys}</div>
      <img className="phone__back" src={back} onClick={props.removeDigit} />
    </div>
  );
};

export default Field;
