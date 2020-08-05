import React from "react";
import ReactLogo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={ReactLogo} className="App-logo" alt="React-Logo" />
          <div className="wrapper">
            <div className="cracked">
              <span>Cracked Font</span>
              <span>Cracked Font</span>
              <span>Cracked Font</span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
