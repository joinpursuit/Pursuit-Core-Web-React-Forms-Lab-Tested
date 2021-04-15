import React, { Component } from "react"
import "./App.css"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: "",
      selected: [],
      result: ""
    }
  }
  handleInput = (e) => {
    this.setState({ userInput: e.target.value })
  }
  handleChange = (e) => {
    const operation = []
    for (const op of e.target.selectedOptions) {
      operation.push(op.index)
    }
    this.setState({ selected: operation })
  }
  opEmpty = () => "Please select an operation."
  opSum = (arr) => {
    const sum = arr.reduce((s, a) => s + a, 0)
    return `Sum: ${sum}`
  }
  opAvg = (arr) => {
    const sum = arr.reduce((s, a) => s + a, 0)
    return `Average: ${sum / arr.length}`
  }
  opMode = (arr) => {
    const objMode = arr.reduce((obj, e) => {
      obj[e] = obj[e] ? obj[e] + 1 : 1
      if(obj[e] > obj.count) {
        obj.count = obj[e]
        obj.mode = e
      }
      return obj
    }, { count: 0, mode: "" })
    return `Mode: ${objMode.mode}`
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const arrInput = this.state.userInput.split(",").map(n => Number(n.trim()))
    if (arrInput.includes(NaN) || !this.state.userInput.length) {
      this.setState({ result: "Invalid input." })
    } else {
      const { selected } = this.state
      const arrOp = [this.opEmpty, this.opSum, this.opAvg, this.opMode]
      const result = selected.length === 0 ? arrOp[0]() : selected.map(i => arrOp[i](arrInput)).join(" - ")
      this.setState({ result: result })
    }
  }
  render() {
    const { userInput, result } = this.state;
    return (
      <div className="App">
        <h1>Enter each number in the array, separated by a ','</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleInput}
            value={userInput}
          />
          <select name="operation" multiple size="2" onChange={this.handleChange}>
            <option defaultValue value="" hidden></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        <h1>{result}</h1>
      </div>
    )
  }
}