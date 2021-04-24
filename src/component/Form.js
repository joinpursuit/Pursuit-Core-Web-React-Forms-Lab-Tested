import React from "react";

class Form extends React.Component {
  state = { input: "", answer: "", value: "" };
  data = [];

  hadleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleValue = (e) => {
    this.setState({ value: e.target.value });
  };

  separateNum = () => {
    const { input } = this.state;
    this.data = input.split(",").map((el) => Number(el));
    return this.data.map((num) => {
      return !isNaN(num);
    });
  };
  handleForSum = () => {
    let sum = 0;
    this.data.forEach((num) => {
      sum += num;
    });
    this.setState({ answer: sum });
    return sum;
  };

  handleForAvg = () => {
    let total = this.handleForSum();
    this.setState({ answer: total / this.data.length });
  };
  handleForMode = () => {
    const object = {};
    let num = 0;
    let highestKey = 0;
    this.data.forEach((number) => {
      object[number] = (object[number] || 0) + 1;
    });
    for (let key in object) {
      const value = object[key];
      if (value > num) {
        num = value;
        highestKey = key;
      }
    }
    this.setState({ answer: highestKey });
  };

  handleForSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === "sum" && this.separateNum()) {
        this.handleForSum();
      } else if (this.state.value === "average" && this.separateNum()) {
        this.handleForAvg();
      } else if (this.state.value === "mode" && this.separateNum()) {
        this.handleForMode();
      } else {
        this.setState({ answer: "Invalid input." });
      }
  };
  render() {
    const { input, answer, value } = this.state;
    console.log({ answer });
    return (
      <div>
        <h1>Enter each number in the array, separated by a ","</h1>
        <form onSubmit={this.handleForSubmit}>
          <input onChange={this.hadleChange} value={input}></input>
          <select onChange={this.handleValue} value={value}>
            <option></option>
            <option>sum</option>
            <option>average</option>
            <option>mode</option>
          </select>
          <button type="submit">Calculate</button>
          <p>{answer}</p>
        </form>
      </div>
    );
  }
}

export default Form;
