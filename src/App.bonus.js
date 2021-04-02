import React from "react";
import "./App.css";

function getMode(numberValues) {
  const repeats = {};
  let mode = numberValues[0];

  for (const value of numberValues) {
    if (!repeats[value]) {
      repeats[value] = 1;
      continue;
    }

    repeats[value] += 1;

    if (repeats[value] > repeats[mode]) {
      mode = value;
    }
  }

  return mode;
}

function getSum(numberValues) {
  return numberValues.reduce((previous, next) => previous + next, 0);
}

function computeValues(numberValues, selected) {
  const results = [];

  for (const select of selected) {
    switch (select) {
      case "average":
        results.push(`Average: ${getSum(numberValues) / numberValues.length}`);
        break;
      case "mode":
        results.push(`Mode: ${getMode(numberValues)}`);
        break;
      case "sum":
        results.push(`Sum: ${getSum(numberValues)}`);
        break;
      default:
        break;
    }
  }

  return results;
}

class App extends React.Component {
  state = {
    selected: ["sum"],
  };

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.state.input) {
      this.setState({
        result: ["Invalid input."],
      });
      return;
    }

    const rawValues = this.state.input.split(",");
    const numberValues = rawValues.map((value) => parseFloat(value));
    if (!rawValues.length || rawValues.length !== numberValues.length) {
      this.setState({
        result: ["Invalid input."],
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
          <select
            multiple
            onChange={(event) =>
              this.setState({
                selected: Array.from(event.target.selectedOptions, (option) => option.value),
              })
            }
            size={3}
          >
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        {this.state.result && this.state.result.map((line) => <p key={line}>{line}</p>)}
      </div>
    );
  }
}

export default App;
