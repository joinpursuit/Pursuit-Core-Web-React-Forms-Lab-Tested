import React from "react";

class Form extends React.Component {
  state = { array: "", result: "", operations: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleArray = (e) => {
    const nums = e.target.value;
    this.setState({ array: nums });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.array === "") {
      this.setState({ result: "Invalid input." });
    } else {
    const newArray = this.state.array.split(",").map(Number);
    // console.log(this.state)
    if(newArray.some(isNaN)) {
      this.setState({ result: "Invalid input." });
    } else if(this.state.operations === "sum") {
      let sumArray = 0;
      let aveArray;
      newArray.forEach((el) => {
        sumArray += el;
      });
      this.setState({ result: sumArray });
    } else if (this.state.operations === "average") {
      let sumArray = 0;
      let aveArray;
      newArray.forEach((el) => {
        sumArray += el;
        aveArray = sumArray / newArray.length;
      });
      this.setState({ result: aveArray });
    } else if (this.state.operations === "mode") {
      let obj = {};
      for (let i = 0; i < newArray.length; i++) {
        let el = newArray[i];
        if (obj[el] !== undefined) {
          obj[el] += 1;
        } else {
          obj[el] = 1;
        }
      }
      let mostCommon = -Infinity;
      let commonElement;
      for (let key in obj) {
        if (obj[key] > mostCommon) {
          mostCommon = obj[key];
          commonElement = key;
        }
      }
      this.setState({ result: Number(commonElement) });
    }
  }
}
  render() {
    const { array, result, operations } = this.state;
    console.log(this.state);
    return (
      <div>
        <h2>Enter each number in the array, separated by a ','</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={array} onChange={this.handleArray} />
          <br />
          <br/>
          <select
            name="operations"
            value={operations}
            onChange={this.handleChange}
          >
            <option value="" defaultValue disabled={true}></option>
            <option name="sum" value="sum">
              sum
            </option>
            <option name="average" value="average">
              average
            </option>
            <option name="mode" value="mode">
              mode
            </option>
          </select>
          <br />
          <br/>
          <button>Calculate</button>
          <p>{result}</p>
        </form>
      </div>
    );
  }
}

export default Form;
