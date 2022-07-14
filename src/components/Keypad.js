import React from "react";

import back from "./back.webp";

const Keypad = () => {
  return (
    <div className="main__container">
      <div className="phone__container">
        <div className="phone__field">
          <div className="phone__number"></div>
          <img className="phone__back" src={back} />
        </div>
        <div className="phone__keypad">
          <div className="phone__key one">1</div>
          <div className="phone__key two">2</div>
          <div className="phone__key three">3</div>
          <div className="phone__key four">4</div>
          <div className="phone__key five">5</div>
          <div className="phone__key six">6</div>
          <div className="phone__key seven">7</div>
          <div className="phone__key eight">8</div>
          <div className="phone__key nine">9</div>
          <div className="phone__key asterisk">*</div>
          <div className="phone__key zero">0</div>
          <div className="phone__key hash">#</div>
        </div>
      </div>
    </div>
  );
};

export default Keypad;
