import React from "react";

class Calculate extends React.Component {
  state = {
    input: "",
    mathDefault: "sum",
    result: null,
  };

  calculateSum = () => {
    const { input } = this.state;
    const userInput = input.split(",").map(Number);
    return userInput.reduce((acc, el) => acc + el, 0);
  };

  calculateAverage = (sum) => {
    const { input } = this.state;
    const userInput = input.split(",");
    return this.setState({ result: sum / userInput.length });
  };

  calculateMode = () => {
    const { input } = this.state;
    const userInput = input.split(",").map(Number);
    const getOccurances = {};
    userInput.forEach((el) => {
      getOccurances[el] ? (getOccurances[el] += 1) : (getOccurances[el] = 1);
    });

    let mostCommon = -Infinity;
    let commonElement;
    for (let key in getOccurances) {
      if (getOccurances[key] > mostCommon) {
        mostCommon = getOccurances[key];
        commonElement = key;
      }
    }
    return parseInt(commonElement)
      ? this.setState({ result: parseInt(commonElement) })
      : this.setState({ result: commonElement });
  };

  handleCalculation = () => {
    const { mathDefault } = this.state;
    let sum = this.calculateSum();
    if (mathDefault === "sum") {
      this.setState({ result: sum });
    } else if (mathDefault === "average") {
      this.calculateAverage(sum);
    } else if (mathDefault === "mode") {
      this.calculateMode();
    }
  };
 
  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    const letters = /[A-Za-z]/
    // const validInput = [1,2,3,4,5,6,7,8,9,0,","];
    // const invalidInput = /[A-z]/g
    if (input.match(letters) || input === "") {
      this.setState({
          result: "Invalid input.",
          mathDefault: ""
          
        })
      } else {
        this.handleCalculation();
      }
  };
 
  handleInputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSelectChange = (e) => {
    this.setState({ mathDefault: e.target.value });
  };

  render() {
    const { input, result, mathDefault } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
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

 // handleClick = () => {
  //   const { input } = this.state;
  //   if (input.includes("a")) {
  //     this.setState({
  //       result: "Invalid input.",
  //     });
  //   }
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { input } = this.state;
  //   if (input === "") {
  //     this.setState({
  //       result: "Invalid input.",
  //     });
  //   } else if (input.search(/([A-z])\w+/g)) {
  //     this.setState({
  //       result: "Invalid input.",
  //     });
  // } else {
  //     this.handleCalculation();
  //   }
  // };

 // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { input } = this.state;
  //   input === ""
  //     ? this.setState({
  //         result: "Invalid input.",
  //       })
  //     : this.handleCalculation();
  // };

  // add check for consecutive commas (,)
  // *** /^[^,]+,[^,]+$/gm *** ==> no start or end comma
  // [A-z] ==> match A-Z and a-z
  // /^[0-9,]+$/
  // ^[0-9]*$
  // ^[0-9,;]+$
  // !\d|,, ==> not a number or 2commas
  // \d|\,
  // (\d{0,3},)?(\d{3},)?\d{0,3}
  // ^[aeiou]$ ==> not a letter
  // \d{6}, ==> 6 digits before comma
  // handleInputChange = (e) => {
  //   const { input } = this.state;
  //   if (input.includes("a")) {
  //     this.setState({
  //       result: "Invalid input.",
  //     });
  //   } else {
  //     this.setState({
  //       input: e.target.value,
  //     });
  //   }
  // };