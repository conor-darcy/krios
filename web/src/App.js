import React from "react";
import "./App.css";
import Example from "./components/shared/Example/Component";

function App() {
  const abc = 1;
  let zzz = abc * 2;
  zzz = 4;
  return (
    <div className="App">
      <header className="App-header">
        <Example name="Bob" />
      </header>
    </div>
  );
}

export default App;
