import React from "react";

class Form extends React.Component {
  state = {
    input: "",
    select: "",
    result: "",
  };
  handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { input, select } = this.state;
    if ((!isNaN(input) && input.includes(",")) || input !== "" ) {
      const arr = input.split(",");
      let sum = 0;
      if (select === "sum") {
        arr.map((el) => (sum += Number(el)));
        this.setState({ result: sum });
        this.setState({ input: "" });
      } else if (select === "average") {
        arr.map((el) => (sum += Number(el)));
        const average = sum / arr.length;
        this.setState({ result: average });
        this.setState({ input: "" });
      } else if (select === "mode") {
        let count = {};
        let highest = -Infinity;
        arr.forEach((el) => {
          if (count[el] > highest) {
            count[el]++;
            highest = Number(el);
          } else {
            count[el] = 1;
          }
        });
        this.setState({ result: highest });
        this.setState({ input: "" });
      }
    } else {
      this.setState({ result: "Invalid input."});
    }
  };
  render() {
    const { input, select, result } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="input" value={input} onChange={this.handleChange} />
        <select name="select" value={select} onChange={this.handleChange}>
          <option></option>
          <option>sum</option>
          <option>average</option>
          <option>mode</option>
        </select>
        <button>Calculate</button>
        <h2>{result}</h2>
      </form>
    );
  }
}

export default Form;
