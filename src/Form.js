import React from "react";

class Form extends React.Component {
  state = { input: "", operation: "sum", result: 0 };

  handleSubmit = (e) => {
    const {  input, operation } = this.state;
    e.preventDefault();
    const arr = input.split(",");
    let total = 0;
    if (input === "") {
      this.setState({ result: "Invalid input." });
    } else if (operation === "sum") {
      arr.forEach((num) => {
        total += Number(num);
        this.setState({ result: total });
      });
    } else if (operation === "average") {
      arr.forEach((num) => {
        total += Number(num);
        this.setState({ result: total / arr.length });
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
      this.setState({ result: mostCommonKey });
      console.log(mostCommonKey);
    }
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleOperation = (e) => {
    this.setState({ operation: e.target.value });
  };

  render() {
    const { input, operation, result } = this.state;
    console.log(this.state);
    return (
      <div>
        <h1>Enter each number in the array, separated by a ','</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="input"
            type="text"
            onChange={this.handleChange}
            value={input}
          />
          <br />
          <br />
          <select
            name="operation"
            value={operation}
            onChange={this.handleOperation}
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
}

export default Form;
