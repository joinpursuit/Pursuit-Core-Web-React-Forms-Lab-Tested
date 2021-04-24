import React from "react";
import "./App.css";

class App extends React.Component {
  state = { input: [], answer: "", answer2: "", answer3: "", sum: false,  average: false, mode: false, errorMessage: "" }

  handleSubmit = (e) => {
    e.preventDefault();
    //this.setState({answer: "", answer2: "", answer3:"" })
   
    const { input, sum, average, mode} = this.state;
    
    if (input.length === 0||input[0]==="") {
      this.setState({ errorMessage: "Invalid input.", answer: "", answer2: "", answer3:"" })
    } else if (!input.every(value => !isNaN(value))) {
      this.setState({ errorMessage: "Invalid input." , answer: "",answer2: "", answer3:"" })
    } else {
      this.setState({ errorMessage: "" })
      
      if (sum) {
        let total = "Sum: " + input.reduce((a, b) => a + Number(b), 0);
        this.setState({ answer: total })
      } if (average) {
        let avg = "Average: " + input.reduce((a, b) => a + Number(b), 0) / input.length;
        this.setState({ answer2: avg })
      } if (mode) {
        let modeArr = "Mode: " + this.mode(input).join(",")
        this.setState({ answer3: modeArr })
      }

    }
  };

  handleChange = (e) => {
    let inputArr = e.target.value.split(",");
    this.setState({ input: inputArr });
  };

  handleEquation = (e) => {
    this.setState({sum: false, average: false, mode: false})
    if(e.target.selectedOptions[0]){
      this.setState({[e.target.selectedOptions[0].value]: true })
    }
    if(e.target.selectedOptions[1]){
      this.setState({[e.target.selectedOptions[1].value]: true })
    }
    if(e.target.selectedOptions[2]){
      this.setState({[e.target.selectedOptions[2].value]: true })
    }
  }

  mode = (numbers) => {
    let count = {}
    let modeArr = [];
    let max = -1;
    for(const num of numbers){
      count[num] ? count[num]++ : count[num] = 1;
      if(count[num]>max) {
        max = count[num]
      }
    }

    for(const num in count){
      if(count[num]===max){
        modeArr.push(num)
      }
    }
    return modeArr;
  }


  render() {
    const { input, answer, answer2, answer3, errorMessage } = this.state;
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
          <h2 name="answer2" value={answer2}>{answer2}</h2>
          <h2 name="answer3" value={answer3}>{answer3}</h2>
          <h2>{errorMessage}</h2>
        </form>
      </>
    );
  }
}

export default App;
