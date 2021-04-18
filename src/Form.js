import React from "react";

class Form extends React.Component {
  state = { input: "", operation: "sum", result: "" };

  handleSubmit = (e) => {
    const { input, operation} = this.state;
    e.preventDefault();
    console.log(this.state);
    const arr = input.split(",");
    console.log(arr);
    let total = 0;

   if(input === ""){
       this.setState({result: "Invalid input."})
  } else if (operation === "sum") {
      arr.forEach((num) => {
        total += Number(num);
        this.setState({ result: total });
    });
    //   console.log(total);
    } else if (operation === "average") {
      arr.forEach((num) => {
        total += Number(num);
        this.setState({ result: total / arr.length });
      });
      console.log(total / arr.length);
    } else if (operation === "mode") {
      const obj = {};
      for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
          obj[arr[i]] += 1;
        } else {
          obj[arr[i]] = 1;
        }
      }
      console.log(obj);
      let num = 0;
      let mostCommonKey;
      for (let key in obj) {
        let value = obj[key];
        if (value > num) {
          num = value;
          mostCommonKey = key;
        }
      }
      this.setState({ result: mostCommonKey})
    }
//    this.setState({result:""})
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleOperation = (e) => {
    this.setState({ operation: e.target.value });
  };

  render() {
    const { input, operation, result } = this.state;
    console.log(this.state);
    return (
      <div>
        <h1>Enter each number in the array, separated by a ','</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="input"
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
          />
          <br />
          <br />
          <select
            name="operation"
            value={operation}
            onChange={this.handleOperation}
          >
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <br />
          <br />
          <button>Calculate</button>
        </form>
        <p>{Number.isNaN(result) ? "Invalid input." : result}</p>
      </div>
    );
  }
}


export default Form;
