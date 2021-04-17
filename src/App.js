import React from "react";
import "./App.css";

class App extends React.Component {
  state = { input: [], answer: "", sum: false,  average: false, mode: false, errorMessage: "" }

  handleSubmit = (e) => {
    e.preventDefault();
    let str = ""
    const { input, operation, sum, average, mode} = this.state;
    if (input.length === 0) {
      this.setState({ errorMessage: "Invalid input.", answer: "" })
    } else if (!input.every(value => !isNaN(value))) {
      this.setState({ errorMessage: "Invalid input." , answer: ""})
    } else {
      this.setState({ errorMessage: "" })
      
      if (sum) {
        let total = input.reduce((a, b) => a + Number(b), 0);
        str += total + "\n"
        //this.setState({ answer: total })
      } if (average) {
        let avg = input.reduce((a, b) => a + Number(b), 0) / input.length;
        str += avg + "\n"
        //this.setState({ answer: avg })
      } if (mode) {
        let modeArr = this.mode(input).join(",")
        str += modeArr + "\n"
        //this.setState({ answer: modeArr })
      }
      this.setState({ answer: str })

    }
  };

  handleChange = (e) => {
    let inputArr = e.target.value.split(",");
    this.setState({ input: inputArr });
    console.log(inputArr)
  };

  handleEquation = (e) => {
    if(e.target.selectedOptions[0]){
      this.setState({[e.target.selectedOptions[0].value]: true })
    }
    if(e.target.selectedOptions[1]){
      this.setState({[e.target.selectedOptions[1].value]: true })
    }
    if(e.target.selectedOptions[2]){
      this.setState({[e.target.selectedOptions[2].value]: true })
    }
    //this.setState({ operation: e.target.value })
  }

  mode = (numbers) => {
    let modes = [], count = [], i, number, maxIndex = 0;

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
    const { input, answer, errorMessage } = this.state;
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
          <select onChange={this.handleEquation} multiple>
            <option defaultValue disabled={true}></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <br></br>
          <button>Calculate</button>
          <br></br>
          <h2 name="answer" value={answer}>{answer}</h2>
          <h2>{errorMessage}</h2>
        </form>
      </>
    );
  }
}

export default App;
