import React from "react";

class UserInput extends React.Component {
  state = { number: "", math: "sum", showMath: "" };

  handleSelect = (e) => {
    this.setState({ math: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.handleChange();
  };

  handleInput = (e) => {
    this.setState({ number: e.target.value });
  };

  handleChange = (e) => {
    const { number, showMath, math, value } = this.state;
    const numArr = number.split(",").map((num) => {
      return Number(num);
    });
    let sum = 0;
    let average = 0;
    let mode = 0;
    let count = 0;
    numArr.forEach((num) => {
      sum += num;
      average = sum / numArr.length;
    });
    for (let i = 0; i < numArr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (numArr[j] === numArr[i]) {
          mode = numArr[j];
          count++;
        }
      }
    }
    if (math === "sum") {
      this.setState({ showMath: sum, math: value });
    } else if (math === "average") {
      this.setState({ showMath: average, math: value });
    } else {
      this.setState({ showMath: mode, math: value });
    }
  };
  render() {
    const { number, math, showMath } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="box" onChange={this.handleInput} value={number} />
        <select className="selectbox" onChange={this.handleSelect} value={math}>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button className="btn">Calculate</button>
        <p>{showMath}</p>
      </form>
    );
  }
}

export default UserInput;
