import React from "react";
import "./Form.css";
class Form extends React.Component {
  constructor() {
    super();
    this.state = { userInput: "", operation: "sum", result: "" };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const newUserInput = this.state.userInput.split("," || " ");
    let total = 0;
    let obj = {};
    let mode;
    let modeReps = -Infinity;

    let integerVerification = newUserInput.every((input) => {
      return !isNaN(input);
    });
    if (this.state.userInput !== "" && integerVerification) {
      const { operation } = this.state;
      if (this.state.result !== "Invalid input.") {
        // newUserInput.forEach((number) => {
        //   total += Number(number);
        // });
        for (let i = 0; i < newUserInput.length; i++) {
          total += Number(newUserInput[i]);
          let currentMode = newUserInput[i];

          if (obj[currentMode]) {
            obj[currentMode]++;
          } else {
            obj[currentMode] = 1;
          }
        }

        for (let key in obj) {
          if (obj[key] > modeReps) {
            mode = key;
            modeReps = obj[key];
          }
        }

        if (operation === "sum") {
          this.setState({ result: total });
        } else if (operation === "average") {
          this.setState({ result: total / newUserInput.length });
        } else if (operation === "mode") {
          this.setState({ result: mode });
          // debugger;
        }
      }
    } else {
      this.setState({ result: "Invalid input." });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    // console.log(this.state);
    return (
      <section className="main">
        <h1>Calculations App</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Enter each number in the input separted by a coma</label>
          <input
            name="userInput"
            value={this.userInput}
            onChange={this.handleChange}
          />
          <select name="operation" onChange={this.handleChange}>
            <option value="sum">Sum</option>
            <option value="average">Average</option>
            <option value="mode">Mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        <p>{this.state.result}</p>
      </section>
    );
  }
}

export default Form;
