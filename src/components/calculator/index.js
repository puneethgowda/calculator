import React, { useState } from "react";
import Output from "./Output";
import InputKey from "./InputKey";
import "./calculator.scss";
import useCalculator from "../../hooks/calculator";
import Switch from "../switch";

const makeKeys = (KEYS, scientific) => {
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
  let list = [
    [NUMBER1, NUMBER2, NUMBER3, PLUS],
    [NUMBER4, NUMBER5, NUMBER6, MINUS],
    [NUMBER7, NUMBER8, NUMBER9, MULTIPLY],
    [CLEAR, NUMBER0, EQUALS, DIVIDE],
  ];
  if (scientific) {
    list.push([TOGGLESIGN, SQUAREROOT, SQUARE]);
  }
  return list;
};

const Calculator = () => {
  const [scientific, setScientific] = useState(false);
  const { output, onInputClick, KEYS } = useCalculator({ fixedOutput: 3 });
  const keys = makeKeys(KEYS, scientific);
  const toggleScientific = (status) => {
    setScientific(status);
  };
  return (
    <div className="calculator-wrapper">
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
        <div className="calculator__switch">
            <Switch
                showLabel={true}
                onText="Scientific"
                offText=""
                callback={(status) => toggleScientific(status)}
                isCheckbox
            />
        </div>
    </div>
  );
};

export default Calculator;
