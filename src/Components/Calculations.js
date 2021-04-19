import React, { Component } from "react";

export default class calculations extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      result: "",
      statistic: "",
    };
  }

  handleSum = (e) => {
    const { value } = e.target;
    let totalSum = 0;
    this.setState({ input: value });

    for (let i = 0; i < value.length; i++) {
      let totalValue = e[value[i]];
      if (totalValue !== "") {
        totalSum += value;
      }
    }
    return totalSum;
  };

  handleAverage = () => {};

  handleMode = () => {};

  handleResult = (statistic) => {};

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <form onChange={this.handleSubmit}>
          <input type="text" name="number" value={input}></input>
          <select>
            <option value="sum" onChange={this.handleSum}>
              Sum
            </option>
            <option value="mode">Mode</option>
            <option value="average">Average</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        <p></p>
      </div>
    );
  }
}
