import React from "react";

class Calculate extends React.Component {
  state = {
    input: "",
    mathDefault: "sum",
    result: null,
  };

  calculateSum = () => {
    const { input } = this.state;
    const newArr = input.split(",").map(Number);
    return newArr.reduce((acc, el) => acc + el, 0)
  };

  calculateAverage = (sum) => {
    const { input } = this.state;
    const newArr = input.split(",").map(Number);
      return this.setState({ result: sum / newArr.length})
  }

  handleCalculation = () => {
    const { mathDefault } = this.state;
    // const newArr = input.split(",").map(Number);
    let sum = this.calculateSum();
    if (mathDefault === "sum") {
      this.setState({ result: sum })
    } else if (mathDefault === "average") {
      this.calculateAverage(sum)
    } else if (mathDefault === "mode") {
      // solve for mode
      this.setState({ result: "hi"})
    }
  };

  handleInputCalculate = (e) => {
    e.preventDefault();
    this.handleCalculation();
  };

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSelectChange = (e) => {
    this.setState({ mathDefault: e.target.value });
  };

  render() {
    const { input, result, mathDefault } = this.state;
    return (
      <>
        <form onSubmit={this.handleInputCalculate}>
          <label>
            Enter each number in the array, separated by a ','
            <input onChange={this.handleInputChange} value={input} />
          </label>
          <select onChange={this.handleSelectChange} value={mathDefault}>
            <option value="sum">Sum</option>
            <option value="average">Average</option>
            <option value="mode">Mode</option>
          </select>
          <button>Calculate</button>
        </form>
        <p>{result}</p>
      </>
    );
  }
}

export default Calculate;
