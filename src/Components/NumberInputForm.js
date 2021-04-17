import React from "react";

class NumberInputForm extends React.Component {
  state = { sum: 0, input:[], };

  handleSubmit = (e) => {
      e.preventdefault();

  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
      console.log(this.state)
    return (
      <div className="inputForm">
        <h1>Enter each number in the array, separated ","</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="input" onChange={this.handleChange}/>
          <select name="math" onChange={this.handleChange}>
            <option value=""></option>
            <option value="sum">Sum</option>
            <option value="average">Average</option>
            <option value="mode">Mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
      </div>
    );
  }
}

export default NumberInputForm;
