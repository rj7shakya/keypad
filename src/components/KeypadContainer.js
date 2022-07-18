import React from "react";

const KeypadContainer = (props) => {
  console.log("props", props);
  return <div className="phone__container">{props?.children}</div>;
};

export default KeypadContainer;
