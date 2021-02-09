import React from "react";
import "./App.scss";
import Calculator from "./components/calculator";
import ThemeSwitch from "./components/theme";

function App() {
  return (
    <div className="app">
        <div className="app__switch">

            <ThemeSwitch />
        </div>
      <Calculator />
    </div>
  );
}

export default App;
