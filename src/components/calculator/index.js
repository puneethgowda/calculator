import React from "react";
import Output from "./Output";
import InputKey from "./InputKey";
import "./calculator.scss";
import useCalculator from "../../hooks/calculator";

const makeKeys = (KEYS) => {
  const {
    NUMBER1,
    NUMBER2,
    NUMBER3,
    NUMBER4,
    NUMBER5,
    NUMBER6,
    NUMBER7,
    NUMBER8,
    NUMBER9,
    NUMBER0,
    MINUS,
    PLUS,
    DIVIDE,
    MULTIPLY,
    TOGGLESIGN,
    CLEAR,
    EQUALS,
    SQUAREROOT,
    SQUARE,
  } = KEYS;
  return [
    [NUMBER1, NUMBER2, NUMBER3, PLUS],
    [NUMBER4, NUMBER5, NUMBER6, MINUS],
    [NUMBER7, NUMBER8, NUMBER9, MULTIPLY],
    [CLEAR, NUMBER0, EQUALS, DIVIDE],
    [TOGGLESIGN, SQUAREROOT, SQUARE],
  ];
};

const Calculator = () => {
  const { output, onInputClick, KEYS } = useCalculator({ fixedOutput: 3 });
  const keys = makeKeys(KEYS);
  return (
    <div className="calculator">
      <div className="calculator__output">
        <Output output={output} />
      </div>
      {keys.map((row) =>
        row.map((item) => (
          <InputKey
            onClick={() => onInputClick(item.value)}
            key={item.symbol}
            input={item.symbol}
          />
        ))
      )}
    </div>
  );
};

export default Calculator;
