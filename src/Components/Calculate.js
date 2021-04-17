import React from "react";

class Calculate extends React.Component {
  state = { input: "", inputArr: "", mathDefault: "sum" };

  handleInputCalculate = (e) => {
    e.preventDefault();
  };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value})
    // console.log(e.target.value);
  };

  handleSelectChange = (e) => {
    this.setState({ mathDefault: e.target.value})
  }

  render() {
      const { inputArr, mathDefault } = this.state;
      console.log(this.state)
      return (
      <>
        <form onSubmit={this.handleCalculate}>
          <label>
            Enter each number in the array, separated by a ','
            <input onChange={this.handleInputChange} value={inputArr} />
          </label>
          <select onChange={this.handleSelectChange} value={mathDefault}>
            <option value="sum">Sum</option>
            <option value="average">Average</option>
            <option value="mode">Mode</option>
          </select>
          <button>Calculate</button>
        </form>
        <p></p>
      </>
    );
  }
}

export default Calculate;
