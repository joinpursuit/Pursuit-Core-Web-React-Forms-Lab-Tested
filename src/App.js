import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [option, setOption] = useState("");
  const [variable, setVariable] = useState("");

  const validity = () => {
    let arr = text.split("");
    let every = arr.every((elem) => {
      return !isNaN(elem) || elem === ",";
    });
    return every && text && option;
  };

  const sumFunction = () => {
    let arr = text.split(",");
    let sum = 0;
    arr.forEach((elem) => {
      sum += Number(elem);
    });
    return sum;
  };

  const avgFunction = () => {
    let arr = text.split(",");
    let count = 0;
    let sum = sumFunction();
    arr.forEach((elem) => {
      count++;
    });
    return sum / count;
  };

  const modeFunction = () => {
    let arr = text.split(",");
    let count = 0;
    let element = 0;
    for (let i = 0; i < arr.length; i++) {
      let tempElement = arr[i];
      let tempCount = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === tempElement) {
          tempCount++;
        }
      }
      if (tempCount > count) {
        element = tempElement;
        count = tempCount;
      } else if (count === 0) {
        element = arr[0];
      }
    }
    return element;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validity()) {
      if (option === "sum") {
        setVariable(sumFunction());
      }
      if (option === "average") {
        setVariable(avgFunction());
      }
      if (option === "mode") {
        setVariable(modeFunction());
      }
    } else {
      setVariable("Invalid input.");
    }
  };

  const inputChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const selectChange = (e) => {
    const { value } = e.target;
    setOption(value);
  };

  return (
    <div className="App">
      <div>
        <h1>Enter each number in the array, separated by a "," </h1>
      </div>

      <div>
        <form onSubmit={handleFormSubmit}>
          <input value={text} onChange={inputChange} type="text" id="" />
          <select onChange={selectChange} value={option} id="">
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
          <p>{variable}</p>
        </form>
      </div>
    </div>
  );
};

export default App;
