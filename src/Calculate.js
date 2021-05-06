import React from "react";

class Calculator extends React.Component {
  state = { userNum: "", total: "", value: "" };
  numArray = [];

  handleInput = (e) => {
    this.setState({ userNum: e.target.value });
  };

  handleValue = (e) => {
    this.setState({ value: e.target.value });
  };

  checkNum = () => {
    const { userNum } = this.state;
    this.numArray = userNum.split(",").map((element) => Number(element));
    return this.numArray.every((num) => {
      return !isNaN(num);
    });
  };
  calculateSum = () => {
    let sum = 0;
    this.numArray.forEach((num) => {
      sum += num;
    });
    this.setState({ total: sum });
    return sum;
  };

  calculateAvg = () => {
    let sum = this.calculateSum();
    this.setState({ total: sum / this.numArray.length });
  };

  calculateMode = () => {
    let countObject = {};
    let num = 0;
    let highestKey = 0;

    this.numArray.forEach((number) => {
      countObject[number] = (countObject[number] || 0) + 1;
    });
    for (let key in countObject) {
      const value = countObject[key];
      if (value > num) {
        num = value;
        highestKey = key;
      }
    }
    this.setState({ total: highestKey });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === 'sum' && this.checkNum()){
        this.calculateSum();
    }
    else if (this.state.value === 'average' && this.checkNum()){
        this.calculateAvg();
    }
   else if (this.state.value === 'mode' && this.checkNum()){
        this.calculateMode();
    } else {
        this.setState({total: "Invalid input."})
    }
  };

  render() {
    const { userNum, total, value } = this.state;
    return (
      <>
        <h1>Enter each number in the array, separated by a ","</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} value={userNum} />
          <select value={value} onChange={this.handleValue}>

            <option></option>
            <option>sum </option>
            <option>average</option>
            <option>mode</option>
          </select>
          <button type="submit">Submit</button>
          <p>{total}</p>
        </form>
      </>
    );
  }
}

export default Calculator;