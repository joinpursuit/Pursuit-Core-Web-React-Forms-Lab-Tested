import React from "react";
import "./App.css";

function computeValues(numberValues, selected) {
  switch (selected) {
    case "sum":
      return numberValues.reduce((previous, next) => previous + next, 0);

    case "average":
      return computeValues(numberValues, "sum") / numberValues.length;

    case "mode":
      const repeats = {};
      let highest = numberValues[0];

      for (const value of numberValues) {
        if (!repeats[value]) {
          repeats[value] = 1;
          continue;
        }

        repeats[value] += 1;

        if (repeats[value] > repeats[highest]) {
          highest = value;
        }
      }

      return highest;

    default:
      break;
  }
}

class App extends React.Component {
  state = {
    selected: "sum",
  };

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.state.input || !this.state.selected) {
      this.setState({
        result: "Invalid input.",
      });
      return;
    }

    const rawValues = this.state.input.split(",");
    const numberValues = rawValues.map((value) => parseFloat(value));
    if (!numberValues.length || numberValues.some((value) => isNaN(value))) {
      this.setState({
        result: "Invalid input.",
      });
    } else {
      this.setState({
        result: computeValues(numberValues, this.state.selected),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Enter each number in the array, separated by a ','</h1>
        <form onSubmit={this.onSubmit}>
          <input onChange={(event) => this.setState({ input: event.target.value })} type="text" />
          <select onChange={(event) => this.setState({ selected: event.target.value })}>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        {this.state.result && <p>{this.state.result}</p>}
      </div>
    );
  }
}

export default App;
