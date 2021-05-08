//React Hooks Lab: refactored to Hooks

import { useState } from "react";

const Calculate = () => {
  const [input, setInput] = useState("");
  const [option, setOption] = useState("");
  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleOptions = (e) => {
    setOption(e.target.value);
  };

  const doMath = () => {
    const array = input.split(",").map(Number);
    let sum = 0;
    if (option === "sum") {
      array.forEach((num) => {
        sum += num;
        setAnswer(sum);
      });
    } else if (option === "average") {
      array.forEach((num) => {
        const avg = (sum += num) / array.length;
        setAnswer(avg);
      });
    } else if (option === "mode") {
      let occurrence = {};
      array.forEach((el) => {
        if (occurrence[el]) {
          occurrence[el] += 1;
        } else {
          occurrence[el] = 1;
        }
      });
      const mostFreq = findMostFreq(occurrence);
      setAnswer(mostFreq);
    }
  };

  const findMostFreq = (occurrence) => {
    debugger;
    console.log(occurrence);
    let maxCount = 0;
    let mostFreq;
    for (let el in occurrence) {
      if (occurrence[el] > maxCount) {
        maxCount = occurrence[el];
        mostFreq = el;
      }
    }
    return mostFreq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doMath();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Enter each number in the array, separated by a ','</p>
        <input type="text" name="input" value={input} onChange={handleChange} />
      </label>
      <br />
      <br />
      <select value={option} onChange={handleOptions}>
        <option value="" defaultValue disabled></option>
        <option value="sum">Sum</option>
        <option value="average">Average</option>
        <option value="mode">Mode</option>
      </select>
      <br />
      <br />
      <button>Calculate</button>
      <p>{answer}</p>
    </form>
  );
};

export default Calculate;
