import { Component } from "react";

class Form extends Component {
  state = {
    input: "",
    operators: "sum",
    answer: 0,
    modeAnswer: [],
    invalid: "",
  };

  handleSubmit = (e) => {
    let sum = 0;
    e.preventDefault();
    //   let numArr = this.state.input.split(",")
    // console.log(numArr)
    // if (this.state.input === 0) {
    //   this.setState((prevState) => ({
    //   input: `Invalid input`,
    //   }));
    // }
    let numbers = "1234567890,"
    let output = ""
let stringInput = this.state.input.split(",").join('')

for (const element of stringInput){
  if(!numbers.includes(element)){
   output = output + "1"
  }

  // this.setState((prevState) => ({
  //   invalid: output,
  // }));

}
if(output){
  this.setState((prevState) => ({
    invalid: prevState.invalid + "Invalid input.",
  }));
}
//     let numbers = "1234567890,";
//     let stringInput = this.state.input.split(",").join('')
//     for (const element of numbers) {

// console.log(element)
// console.log(stringInput)
//       if (!stringInput.includes(element)) {
        
//         this.setState((prevState) => ({
//           invalid: prevState.invalid + "Invalid input.",
//         }));
//       }
//     }



    if (this.state.input.length < 1) {
      this.setState((prevState) => ({
        invalid: prevState.invalid + "Invalid input.",
      }));
    }

    if (this.state.input.length < 2 && this.state.length > 0) {
      window.alert(
        `you must type in two valid numbers or more that are comma separated `
      );
    }
    if (this.state.operators === "sum") {
      let numArray = this.state.input.split(",").map((el) => Number(el));
      //console.log(numArray);
      numArray.forEach((el) => (sum += el));
      this.setState((prevState) => ({
        answer: sum + prevState.answer,
      }));
    } else if (this.state.operators === "mode") {
      let numArray = this.state.input.split(",").map((el) => Number(el));
      let countObject = {};
      numArray.forEach((item) => {
        if (countObject[item]) {
          countObject[item] += 1;
        } else {
          countObject[item] = 1;
        }
      });
      let modeArray = Object.values(countObject);
      let maxMode = Math.max(...modeArray);
      let string = "";
      for (const property in countObject) {
        if (countObject[property] === maxMode) {
          string = string + String(property) + ",";
        }
        let stringToNum = string.split(",");
        stringToNum.pop();
        this.setState((prevState) => ({
          modeAnswer: stringToNum.join(" , "),
          ...prevState.modeAnswer,
        }));
      }
    } else if (this.state.operators === "average") {
      let numArray = this.state.input.split(",").map((el) => Number(el));
      numArray.forEach((el) => (sum += el));
      let avg = sum / numArray.length;
      this.setState((prevState) => ({
        answer: avg + (prevState.answer - prevState.answer),
      }));
    }
    this.setState({ input: "" });
    // this.setState({ invalid: "" })
  };
  handleInputChange = (event) => {
    this.setState({ invalid: "" })
    console.log(event.target.input);
    const { name, value } = event.target;
    this.setState({ [name]: value });
    let numInput = "0123456789";
    this.setState({ answer: 0 });
  };
  render() {
    console.log(this.state);
    const { input, operators } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} name={this.numbers}>
          <label htmlFor="itemInput">Numbers: </label>
          <input
            onChange={this.handleInputChange}
            id="Number"
            name="input"
            value={input}
          />
          <select
            name="operators"
            value={operators}
            onChange={this.handleInputChange}
          >
            <option value="sum" name={this.answer}>
              sum
            </option>
            <option value="mode">mode</option>
            <option value="average">average</option>
          </select>
          <button>calculate</button>
        </form>
        <p>
          {this.state.invalid || this.state.answer || this.state.modeAnswer}
        </p>
      </div>
    );
  }
}

export default Form;
