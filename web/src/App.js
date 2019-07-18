import React from "react";
import "./App.css";
import Example from "./components/shared/Example/Component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Example name="Bob" />
      </header>
    </div>
  );
}

export default App;
