import React, { useDebugValue } from "react";

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      math: "",
      sum: "",
    };
  }

  handleSelectChange = (e) => {
    const { value } = e.target;
    this.setState({
      math: value,
    });
  }
  
  handleSum = (e) => {
      const 
 
  }

  render() {
    const { math } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit} className="form-container">

        <h2>Enter each number in the array, separated by a ','</h2>
        <input type="text" onChange={this.handleSelectChange}></input>
        <select value={math} onChange={this.handleSelectChange}>
          <option value=""></option>
          <option value="sum" onChange={this.handleSum}>sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default DropDown;
