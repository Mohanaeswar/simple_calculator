import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [input, setInput] = useState(""); 

  
  const handleClick = (value) => {
    setInput(input + value);
  };

  
  const calculateResult = () => {
    try {
      setInput(eval(input)); 
    } catch (error) {
      setInput("Error");
    }
  };

  
  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
}

export default App;
