export const isDigit = (input) => {
  return new RegExp("[0-9]").test(input);
};

export const toggleSign = (value) => {
  return value <= 0 ? Math.abs(value) : -Math.abs(value);
};
