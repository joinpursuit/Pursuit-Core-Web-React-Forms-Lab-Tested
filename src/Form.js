//React Hooks Lab: refactored to Hooks

import { useState } from "react";

const Form = () => {
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
      let timesHappened = {};
      array.forEach((element) => {
        if (timesHappened[element]) {
          timesHappened[element] += 1;
        } else {
          timesHappened[element] = 1;
        }
      });
      const common = frequentfunc(timesHappened);
      setAnswer(common);
    }
  };

  const frequentfunc = (timesHappened) => {
    debugger;
    console.log(timesHappened);
    let totalCounted = 0;
    let common;
    for (let element in timesHappened) {
      if (timesHappened[element] > totalCounted) {
        totalCounted = timesHappened[];
        common = element;
      }
    }
    return common;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doMath();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
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

export default Form;
