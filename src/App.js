import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="wrapper">
          <div className="cracked">
            <span>cracked</span>
            <span>cracked</span>
            <span>cracked</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
