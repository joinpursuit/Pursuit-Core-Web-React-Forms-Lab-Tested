import React from "react";

class Calculate extends React.Component {
  state = { input: "", option: "", answer: "" };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleOptions = (e) => {
    this.setState({ option: e.target.value });
  };

  // handleSum = () => {
  //   // debugger
  //   const { inputArray } = this.state;
  //   let total = 0;

  //   total += total;
  //   this.setState({ answer: total });
  //   console.log(this.setState);
  // };

  doMath = () => {
    const { input, option } = this.state;
    const array = input.split(",").map(Number);
    let sum = 0;
    if (option === "sum") {
      array.forEach((num) => {
        sum += num;
        this.setState({ answer: sum });
      });
    } else if (option === "average") {
      array.forEach((num) => {
        const avg = (sum += num) / array.length;
        this.setState({ answer: avg });
        // debugger
      });
    } else if (option === "mode") {
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    // const { inputArray, math } = this.state;
    // let sum = 0;
    // if (math === "sum") {
    //   sum += inputArray;
    //   return sum;
    console.log(this.state);
    this.doMath();
  };

  render() {
    const { input, option, answer } = this.state;
    // debugger;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Enter each number in the array, separated by a ','</p>
          <input
            type="text"
            name="input"
            value={input}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <br />
        <select value={option} onChange={this.handleOptions}>
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
  }
}

export default Calculate;
