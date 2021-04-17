import React from "react";

class Calculate extends React.Component {
  state = { input: "", inputArr: "", mathDefault: "sum" };
  
  handleInputCalculate = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value,
      inputArr: [...this.state.input]
    });
    // console.log(e.target.value);
  };

  handleSelectChange = (e) => {
    this.setState({ mathDefault: e.target.value})
  }

  render() {
      const { input, mathDefault } = this.state;
      return (
      <>
        <form onSubmit={this.handleInputCalculate}>
          <label>
            Enter each number in the array, separated by a ','
43            <input onChange={this.handleInputChange} value={input} />
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
