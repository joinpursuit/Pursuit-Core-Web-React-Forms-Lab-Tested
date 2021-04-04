import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      type: "",
      result: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSelectChange = (e) => {
    this.setState({ type: e.target.value });
  };

  sum = (nums) => {
    return nums.reduce((prev, next) => prev + next, 0);
  };

  average = (nums) => {
    return this.sum(nums) / nums.length;
  };

  mode = (nums) => {
    const counter = nums.reduce((acc, num) => {
      if (acc[num]) {
        acc[num]++;
      } else {
        acc[num] = 1;
      }
      return acc;
    }, {});

    const sortedKeys = Object.keys(counter).sort(
      (a, b) => counter[b] - counter[a]
    );
    return sortedKeys[0];
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { input, type } = this.state;
    const nums = this.parseInput(input);
    let result;

    if (!input || !this.validateNums(nums)) {
      result = "Invalid input.";
    } else {
      switch (type) {
        case "sum":
          result = this.sum(nums);
          break;
        case "average":
          result = this.average(nums);
          break;
        case "mode":
          result = this.mode(nums);
          break;
        default:
          break;
      }
    }

    this.setState({ result });
  };

  parseInput = (input) => {
    try {
      return input.split(",").map((n) => Number(n));
    } catch (e) {
      return false;
    }
  };

  isNumber = (val) => {
    return typeof val === "number" && !isNaN(val);
  };

  validateNums = (nums) => {
    return nums && nums.every((n) => this.isNumber(n));
  };

  calculateResult = (nums, type) => {};

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <h1>Enter each number in the array, separated by a ','</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInputChange} />
          <select onChange={this.handleSelectChange}>
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        <p>{result}</p>
      </div>
    );
  }
}

export default App;
