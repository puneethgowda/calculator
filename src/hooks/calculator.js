import { useState } from "react";
import { KEYS } from "./constants";
import { isDigit, toggleSign } from "./helper";

const useCalculator = ({ fixedOutput }) => {
  const [leftOperand, setLeftOperand] = useState([]);
  const [rightOperand, setRightOperand] = useState([]);
  const [operator, setOperator] = useState(null);
  const [output, setOutput] = useState(0);

  function reset() {
    setOperator(null);
    setLeftOperand([]);
    setRightOperand([]);
    setOutput(0);
  }

  function calculate() {
    let output = "";
    switch (operator) {
      case KEYS.PLUS.value: {
        output = Number(leftOperand.join("")) + Number(rightOperand.join(""));
        break;
      }
      case KEYS.MINUS.value: {
        output = Number(leftOperand.join("")) - Number(rightOperand.join(""));
        break;
      }
      case KEYS.MULTIPLY.value: {
        output = Number(leftOperand.join("")) * Number(rightOperand.join(""));
        break;
      }
      case KEYS.DIVIDE.value: {
        output = Number(leftOperand.join("")) / Number(rightOperand.join(""));
        break;
      }
        default:  return ;
    }
    setOutput(output);
    setLeftOperand([output]);
    setRightOperand([]);
    return output;
  }

  function setToState(operation) {
    if (output && !leftOperand.length && !rightOperand.length && !operator) {
      setOutput(operation(output));
      setLeftOperand([]);
      setRightOperand([]);
      setOperator(null);
    } else if (leftOperand.length && !rightOperand.length) {
      setOutput(operation(leftOperand));
      setLeftOperand([]);
      setRightOperand([]);
      setOperator(null);
    } else if (operator && rightOperand.length) {
      const result = calculate();
      setOutput(operation(result));
      setLeftOperand([]);
      setRightOperand([]);
      setOperator(null);
    }
  }
  function addToStack(key) {
    if (isDigit(key) && (!leftOperand.length || !operator)) {
      const display = [...leftOperand, key];
      setLeftOperand(display);
      setOutput(display.join(""));
    } else if (isDigit(key) && leftOperand.length) {
      const display = [...rightOperand, key];
      setRightOperand(display);
      setOutput(display.join(""));
    } else if (
      [
        KEYS.PLUS.value,
        KEYS.MINUS.value,
        KEYS.MULTIPLY.value,
        KEYS.DIVIDE.value,
      ].includes(key) &&
      rightOperand.length
    ) {
      calculate();
      setOperator(key);
    } else if (
      [
        KEYS.PLUS.value,
        KEYS.MINUS.value,
        KEYS.MULTIPLY.value,
        KEYS.DIVIDE.value,
      ].includes(key) &&
      !rightOperand.length
    ) {
      setOperator(key);
    } else if (key === KEYS.EQUALS.value) {
      calculate();
    } else if (key === KEYS.CLEAR.value) {
      reset();
    } else if (key === KEYS.SQUARE.value) {
      setToState((value) => Math.pow(value, 2));
    } else if (key === KEYS.SQUAREROOT.value) {
      setOutput(Math.sqrt(output));
      setLeftOperand([]);
      setRightOperand([]);
      setOperator(null);
    } else if (key === KEYS.TOGGLESIGN.value) {
      setToState((value) => {
        const isArray = typeof value === "object";
        return toggleSign(isArray ? value.join("") : value);
      });
    }
  }

  function formatOutput() {
    if (output === undefined || isNaN(output)) {
      reset();
      return 0;
    }
    return Number(output) % 1 !== 0
      ? Number(output).toFixed(fixedOutput)
      : Number(output);
  }
  return { output: formatOutput(), onInputClick: addToStack, KEYS };
};

export default useCalculator;
