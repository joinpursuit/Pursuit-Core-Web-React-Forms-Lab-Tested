import React from "react";

class NumberInputForm extends React.Component {
  state = { math: "", input: "", answer: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const { math, input } = this.state;
    // debugger
    const arrSplit = input.split(",").map(Number);
    let sumNum = 0;
    let avg = 0;
    if (math === "sum") {
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
      arrSplit.sort((item) => {
        let max = 1,
          mode = arrSplit[0];
        let currCount = 1;

        for (let i = 1; i < arrSplit.length; i++) {
          if (arrSplit[i] == arrSplit[i - 1]) currCount++;
          else {
            if (currCount > max) {
              max = currCount;
              mode = arrSplit[i - 1];
            }
            currCount = 1;
          }
        }
        if (currCount > max) {
          max = currCount;
          mode = arrSplit[arrSplit.length - 1];
        }
        this.setState({ answer: mode});
      });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    //     if (value === "sum") {
    //         return ((prevState) => {
    //             [...prevState, name]
    //         }
    //     }
  };

  // the input/select needs to mirror the state

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
          <button type="submit">Calculate</button>
        </form>
        <h3>{answer}</h3>
      </div>
    );
  }
}

export default NumberInputForm;
