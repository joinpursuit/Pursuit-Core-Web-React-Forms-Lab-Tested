import React, { Component } from "react";

export default class Calculations extends Component {
  constructor() {
    super();

    this.state = {
      input: [],
    };
  }

  handleInput = (e) => {
    this.setState({ input: e.target.value + "," });
  };

  handleSum = (e) => {
    const { value } = e.target;
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
      if (value !== "") {
        sum = sum + value;
      } else {
        return "Invalid input";
      }
    }
    return sum;
  };

  handleAverage = () => {};

  handleMode = () => {};

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <form className="Calculator" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            id="input"
            value={input}
            onChange={this.handleInput}
          />
          <select>
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
      </div>
    );
  }
}
