import React from "react";

const InputKey = ({ input, onClick }) => {
  return (
    <button className="key" onClick={onClick}>
      {input}
    </button>
  );
};

export default InputKey;
