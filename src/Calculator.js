import React from 'react'

 class Calculator extends React.Component {
        state = {
          input: "",
          value: "",
          answer: "",
        };
         numArray = [];
    
      handleInput = (e) => {
        this.setState({ input: e.target.value });
      };
    
      handleValue = (e) => {
        this.setState({ value: e.target.value });
      };
    
      checkNum = () => {
        const {input} = this.state;
        this.numArray = input.split(",").map((el) => Number(el));
        return this.numArray.map((num) => {
          return !isNaN(num);
        });
      };
    
      sumFunction = () => {
        let sum = 0;
        this.numArray.forEach((num) => {sum += num});
        this.setState({ answer: sum });
        return sum;
      };
    
      aveFunction = () => {
        let total = this.sumFunction();
        this.setState({ answer: total / this.numArray.length });
      };
    
      modeFunction = () => {
        const object = {};
        let num = 0;
        let highestKey = 0;
    
        this.numArray.forEach((number) => {
          object[number] = (object[number] || 0) + 1;
        });
    
        for (let key in object) {
          const value = object[key];
          if (value > num) {
            num = value;
            highestKey = key;
          }
        }
        this.setState({ answer: highestKey });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
    
        if (this.state.value === "sum" && this.checkNum()) {
          this.sumFunction();
        } else if (this.state.value === "average" && this.checkNum()) {
          this.aveFunction();
        } else if (this.state.value === "mode" && this.checkNum()) {
          this.modeFunction();
        } else {
          this.setState({ answer: "Invalid input." });
        }
      };
    
      render() {
        const { input, value, answer } = this.state;
        return (
          <div>
            <h1>Enter each number in the array, separated by a ","</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                value={input}
                onChange={this.handleInput}
              />
              <br/>
              <select onChange={this.handleValue} value={value}>
                <option></option>
                <option>sum</option>
                <option>average</option>
                <option>mode</option>
              </select>
              <br />
              <button type="submit">Calculate</button>
            </form>
            <p>{answer}</p>
          </div>
        );
      }
  }
export default Calculator;