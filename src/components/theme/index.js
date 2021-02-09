import React, { useEffect } from "react";
import Switch from "../switch";
import "./theme.scss"

const MODES = {
  LIGHT: "light",
  DARK: "dark",
};

const ThemeSwitch = () => {
  useEffect(() => {
    toggleMode(false);
  },[]);
  const toggleMode = (status) => {
    document.body.className = !status ? MODES.DARK : MODES.LIGHT;
  };
  return (
    <div>
      <Switch showLabel={true} onText="Light" offText="Dark" callback={(status) => toggleMode(status)} />
    </div>
  );
};

export default ThemeSwitch;
