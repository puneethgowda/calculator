import React, { useState } from "react";
import "./switch.scss";

const Switch = ({ callback, onText, offText, isCheckbox }) => {
  const [on, setOn] = useState(false);
  const toggleMode = () => {
    setOn((on) => {
      const updatedStatus =   !on;
        callback && callback(updatedStatus);
        return updatedStatus
    });
  };
  return (
    <div className="toggle-wrapper">
      <div className="label">{offText}</div>
      <div onClick={toggleMode} className={(isCheckbox && on) ? "toggle-switch toggle-switch--1" : "toggle-switch"}>
        <div className={on ? "knob knob--active" : "knob"} />
      </div>
      <div className="label">{onText}</div>
    </div>
  );
};

export default Switch;
