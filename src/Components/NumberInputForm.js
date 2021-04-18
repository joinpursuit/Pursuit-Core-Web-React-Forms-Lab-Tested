import React from "react";

class NumberInputForm extends React.Component {
  state = { math: "", input: "", answer: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const { math, input } = this.state;
    const arrSplit = input.split(",").map(Number);
    let sumNum = 0;
    let avg = 0;
    if (math === "") {
        this.setState({answer: "Invalid input."})
    } else if (math === "sum") {
      arrSplit.forEach((item) => {
        sumNum += item;
      });
      this.setState({ answer: sumNum });
    } else if (math === "average") {
      arrSplit.forEach((item) => {
        sumNum += item;
        avg = sumNum / arrSplit.length;
      });
      this.setState({ answer: avg });
    } else if (math === "mode") {
      let obj = [];
      let mostCommon = -Infinity;
      let mode;
      for (let i = 0; i < arrSplit.length; i++) {
        const el = arrSplit[i];
        if (obj[el]) {
          obj[el] += 1;
        } else {
          obj[el] = 1;
        }
      }
      for (let key in obj) {
        if (obj[key] > mostCommon) {
          mostCommon = obj[key];
          mode = key;
        }
      }
      this.setState({ answer: mode });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state);
    const { input, math, answer } = this.state;
    return (
      <div className="inputForm">
        <h1>Enter each number in the array, separated ","</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={input} name="input" onChange={this.handleChange} />
          <select value={math} name="math" onChange={this.handleChange}>
            <option value=""></option>
            <option value="sum">Sum</option>
            <option value="average">Average</option>
            <option value="mode">Mode</option>
          </select>
          <button>Calculate</button>
        </form>
        <h3>{Number.isNaN(answer) ? "Invalid input." : answer}</h3>
      </div>
    );
  }
}

export default NumberInputForm;
