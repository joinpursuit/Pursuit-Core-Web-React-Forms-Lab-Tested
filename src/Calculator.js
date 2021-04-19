import React, { Component } from "react";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      optionValue: "hello",
      userInput: [],
    };
  }

  handleSelectChange = (e) => {
    const { value } = e.target;
    console.log("before change", this.state.optionValue)
    this.setState({
      optionValue: value,
    }, (previous)=>{console.log(previous)});
    console.log("after change", this.state.optionValue)
  };

  handleChange = (e) => {
    e.preventDefault();


    const numbers = (Array.from(e.target.value)).filter(number => {
       return parseInt(number)
    })
    .map(num => {return parseInt(num)
    })
  
  console.log(numbers)
  }
  render() {
    const { optionValue } = this.state;
    return (
      <div>
        <form onSubmit={this.handleInput}>
          <label htmlFor=""></label>
          <input type="text" onChange={this.handleChange}/>
          <br />
          <select value={optionValue} onChange={this.handleSelectChange}>
            <option value=""></option>
            <option value="sum">Sum</option>
            <option value="average">Average</option>
            <option value="mode">Mode</option>
          </select>
          <br />
          <button type="submit">Calculate</button>

          <p id="result">the selected option is: {this.state.optionValue}</p>

        </form>

        <p id="error"></p>
      </div>
    );
  }
}
