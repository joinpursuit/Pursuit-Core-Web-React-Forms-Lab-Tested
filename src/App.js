import React from "react";
import "./App.css";

class App extends React.Component {
  state = { input: [], answer:"", operation: "sum", errorMessage:"" }

  handleSubmit = (e) => {
    e.preventDefault();
    const { input, answer, operation, errorMessage } = this.state;
    if (input.length === 0) {
      this.setState({errorMessage: "Invalid input."})
    } else if (!input.every(value => !isNaN(value))) {
      this.setState({errorMessage: "Invalid input."})
    } else {
      debugger
      if (operation === "sum") {
        let sum = input.reduce((a, b) => a + Number(b), 0);
        console.log(sum)
        this.setState({answer: sum})
      } else if (operation === "average") {
        let average = input.reduce((a, b) => a + Number(b), 0) / input.length;
        console.log(average)
        this.setState({answer: average})
      } else if (operation === "mode") {
        let modeInteger = this.mode(input)
        console.log(modeInteger)
        this.setState({answer: modeInteger})
      } 
      
    }
    // debugger;

  };

  handleChange = (e) => {
    // debugger  
    let inputArr = e.target.value.split(",");
    this.setState({ input: inputArr });
    console.log(inputArr)
  };

  handleEquation = (e) => {
    this.setState({operation: e.target.value})
  }

  mode = (numbers) => {
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return modes;
      }


  render() {
    const { input, answer, operation, errorMessage } = this.state;
    console.log(this.state);

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Enter each number in the array, separated by a ','</h1>
          <input
            name="input"
            type="text"
            onChange={this.handleChange}
            value={input}
          />
          <br></br>
          <select onChange={this.handleEquation}>
            <option  defaultValue disabled={true}></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <br></br>
          <button>Calculate</button>
          <br></br>
          <h2 name="answer" value={answer}>{answer}</h2>
          {/* {input === "a,b,c" ? <h2>Invalid Input.</h2> : null } */}
        <h2>{errorMessage}</h2>
        </form>
      </>
    );
  }
}

export default App;
