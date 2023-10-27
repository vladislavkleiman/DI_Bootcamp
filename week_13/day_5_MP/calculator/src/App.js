import React, { useState } from "react";
import "./App.css";

function App() {
  const [sum, setSum] = useState(null);

  const addThem = () => {
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);
    const total = number1 + number2;
    setSum(total);
  };
  return (
    <div className="main">
      <h1>Adding Two Numbers</h1>
      <div className="numbers">
        <input name="number1" id="number1" type="number" step="1" />
        <input name="number2" id="number2" type="number" step="1" />
      </div>
      <button className="addThem" onClick={() => addThem()}>
        Add Them!
      </button>
      <h1 className="sumTotal">{sum}</h1>
    </div>
  );
}

export default App;
