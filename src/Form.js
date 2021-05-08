import React, {useState} from "react";

const Form = () => {
  const [input, setInput] = useState("")
  const [operation, setOperation] = useState("sum") 
  const [result, setResult] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = input.split(",");
    let total = 0;
    if (input === "") {
      setResult("Invalid input.");
    } else if (operation === "sum") {
      arr.forEach((num) => {
        total += Number(num);
        setResult(total );
      });
    } else if (operation === "average") {
      arr.forEach((num) => {
        total += Number(num);
        setResult( total / arr.length );
      });
    } else if (operation === "mode") {
      const obj = {};
      for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
          obj[arr[i]] += 1;
        } else {
          obj[arr[i]] = 1;
        }
      }
      let num = 0;
      let mostCommonKey;
      for (let key in obj) {
        let value = obj[key];
        if (value > num) {
          num = value;
          mostCommonKey = key;
        }
      }
      setResult( mostCommonKey );
      console.log(mostCommonKey);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleOperation = (e) => {
    setOperation( e.target.value );
  };

  
    return (
      <div>
        <h1>Enter each number in the array, separated by a ','</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="input"
            type="text"
            onChange={handleChange}
            value={input}
          />
          <br />
          <br />
          <select
            name="operation"
            value={operation}
            onChange={handleOperation}
          >
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <br />
          <br />
          <button>Calculate</button>
        </form>
        <p>{Number.isNaN(result) ? "Invalid input." : result}</p>
      </div>
    );
  }


export default Form;
