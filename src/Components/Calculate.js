import React from "react";

class Calculate extends React.Component {
  state = {
    input: "",
    mathDefault: "sum",
    result: null
  };
  
  handleCalculation = () => {
    const {mathDefault, input} = this.state
    const newArr = input.split(",").map(Number);
    if(mathDefault === 'sum'){
      this.setState({result: newArr.reduce((acc, el) => acc + el, 0)});
    } else if (mathDefault === 'average') {
      console.log('average');
    } else if (mathDefault === 'mode') {
      console.log('mode');
    }}

  handleInputCalculate = (e) => {
    e.preventDefault();
    this.handleCalculation();
    console.log(this.state);
  };

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  handleSelectChange = (e) => {
    this.setState({ mathDefault: e.target.value });
  };

  render() {
    const { input, result, mathDefault } = this.state;
    return (
      <>
        <form
          onSubmit={this.handleInputCalculate}
        >
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



