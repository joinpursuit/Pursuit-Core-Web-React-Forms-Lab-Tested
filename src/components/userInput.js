import React from "react";

class UserInput extends React.Component {
  state = { number: "", math: "sum", showMath: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleMath();
  };

  handleSelect = (e) => {
    this.setState({ math: e.target.value });
  };

  handleInput = (e) => {
    this.setState({ number: e.target.value });
  };

  handleMath = (e) => {
    const { number, showMath, value, math } = this.state;
    const numArr = number.split(",").map((num) => {
      return Number(num);
    });
    if (number === "") {
      this.setState({ showMath: "Invalid input." });
    } else {
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
    }
  };

  render() {
    const { number, math, showMath } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input className="input" onChange={this.handleInput} value={number} />
          <select
            className="selectBox"
            onChange={this.handleSelect}
            value={math}
          >
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button className="calc_button">Calculate</button>
        </form>
        <p>{Number.isNaN(showMath) ? "Invalid input." : showMath}</p>
      </>
    );
  }
}

export default UserInput;
