import React, { useState } from "react";

const FormHooks = () => {
  const [array, setArray] = useState("");
  const [result, setResult] = useState("");
  const [operations, setOperations] = useState("");

  const handleChange = (e) => {
    setOperations(e.target.value);
  };

  const handleArray = (e) => {
    setArray(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (array === "") {
      setResult("Invalid input.");
    } else {
      const newArray = array.split(",").map(Number);
      // console.log(this.state)
      if (newArray.some(isNaN)) {
        setResult("Invalid input.");
      } else if (operations === "sum") {
        let sumArray = 0;
        newArray.forEach((el) => {
          sumArray += el;
        });
        setResult(sumArray);
      } else if (operations === "average") {
        let sumArray = 0;
        let aveArray;
        newArray.forEach((el) => {
          sumArray += el;
          aveArray = sumArray / newArray.length;
        });
        setResult(aveArray);
      } else if (operations === "mode") {
        let obj = {};
        for (let i = 0; i < newArray.length; i++) {
          let el = newArray[i];
          if (obj[el] !== undefined) {
            obj[el] += 1;
          } else {
            obj[el] = 1;
          }
        }
        let mostCommon = -Infinity;
        let commonElement;
        for (let key in obj) {
          if (obj[key] > mostCommon) {
            mostCommon = obj[key];
            commonElement = key;
          }
        }
        setResult(Number(commonElement));
      }
    }
  };

  return (
    <div>
      <h2>Enter each number in the array, separated by a ','</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={array} onChange={handleArray} />
        <br />
        <br />
        <select name="operations" value={operations} onChange={handleChange}>
          <option value="" defaultValue disabled={true}></option>
          <option name="sum" value="sum">
            sum
          </option>
          <option name="average" value="average">
            average
          </option>
          <option name="mode" value="mode">
            mode
          </option>
        </select>
        <br />
        <br />
        <button>Calculate</button>
        <p>{result}</p>
      </form>
    </div>
  );
};

export default FormHooks;
