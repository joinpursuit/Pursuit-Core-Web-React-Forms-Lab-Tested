import React from "react";

class Form extends React.Component {
  state = {
    number: "",
    math: "sum",
    // result: this.sum()
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { number, math } = this.state;

    // if (number !== Number) {
    //     alert("Invalid input.");
    // }

    if (math === "sum") {
      return this.sum()
    } else if (math === "average") {
      console.log("average");
    } else if (math === "mode") {
      console.log("mode");
    }
  };
  sum = () => {
    const { number } = this.state;
    //  debugger
    let total = 0;
    let arr = number.split(",").map(Number);
    arr.forEach((num) => {
      total += num;
    });
    console.log(total);
    console.log(number);
    console.log(number.length);
    console.log(arr)
    return total;
  };

  //   if (i !== ",") {
  //     arr.push(i)
  //   }
  //   console.log(total);
  //   console.log(number);
  //   console.log(number.length);
  //   return total;
  // }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { number, math } = this.state;
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input onChange={this.handleChange} name="number" value={number} />
          </label>
          <select onChange={this.handleChange} name="math" value={math}>
            <option value="sum">Sum</option>
            <option value="average">Average</option>
            <option value="mode">Mode</option>
          </select>
          <button>Calculate</button>
        </form>
      </div>
    );
  }
}

export default Form;
