import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      option: "",
      variable: "",
    };
  }

  validity = () => {
    const { text, option } = this.state;
    let arr = text.split("");
    let every = arr.every((elem) => {
      return !isNaN(elem) || elem === ",";
    });
    return every && text && option;
  };

  sumFunction = () => {
    const { text, option, variable } = this.state;
    let arr = text.split(",");
    let sum = 0;
    arr.forEach((elem) => {
      sum += Number(elem);
    });
    return sum;
  };

  avgFunction = () => {
    const { text, option, variable } = this.state;
    let arr = text.split(",");
    let count = 0;
    let sum = this.sumFunction();
    arr.forEach((elem) => {
      count++;
    });
    return sum / count;
  };

  modeFunction = () => {
    const { text, option, variable } = this.state;
    let arr = text.split(",");
    let count = 0;
    let element = 0;
    for (let i = 0; i < arr.length; i++) {
      let tempElement = arr[i];
      let tempCount = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === tempElement) {
          tempCount++;
        }
      }
      if (tempCount > count) {
        element = tempElement;
        count = tempCount;
      } else if (count === 0) {
        element = arr[0];
      }
    }
    return element;
  };

  handleFormSubmit = (event) => {
    const { text, option } = this.state;
    event.preventDefault();
    if (this.validity()) {
      if (option === "sum") {
        this.setState({
          variable: this.sumFunction(),
        });
      }
      if (option === "average") {
        this.setState({
          variable: this.avgFunction(),
        });
      }
      if (option === "mode") {
        this.setState({
          variable: this.modeFunction(),
        });
      }
    } else {
      this.setState({
        variable: "Invalid input.",
      });
    }
  };

  inputChange = (e) => {
    const { value } = e.target;
    this.setState({
      text: value,
    });
  };

  selectChange = (e) => {
    const { value } = e.target;
    this.setState({
      option: value,
    });
  };

  render() {
    const { text, option, variable } = this.state;

    return (
      <div className="App">
        <div>
          <h1>Enter each number in the array, separated by a "," </h1>
        </div>

        <div>
          <form onSubmit={this.handleFormSubmit}>
            <input value={text} onChange={this.inputChange} type="text" id="" />
            <select onChange={this.selectChange} value={option} id="">
              <option value=""></option>
              <option value="sum">sum</option>
              <option value="average">average</option>
              <option value="mode">mode</option>
            </select>
            <button type="submit">Calculate</button>
            <p>{variable}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
