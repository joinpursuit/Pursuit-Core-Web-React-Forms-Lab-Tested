import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      value: '',
      operator: 0
      // average:0,
      // mode:0

    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // alert(parseFloat('100,000.00'.replace(/,/g, '')))
    alert('These numbers were submitted'+ " " + this.state.value)
    
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value})
   
  }
 handleSelectChange = (e) =>{
   console.log('SelectEvent')
    let sum = 0
    let mode = {}
    let num = this.state.value
    let stringArray =num.split(',').map((el)=>{return Number(el)})
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if(e.target.value === "Sum"){
     sum = stringArray.reduce(reducer)
    } else if (e.target.value === "Average"){
     sum = (stringArray.reduce(reducer))/stringArray.length
    } else {
     stringArray.reduce((el)=>{
      for(let i =0; i>stringArray.length; i++){
        if()
      }
     })
    }
    console.log(mode)
    this.setState({ operator: sum})
  }

  render(){
    console.log(this.state.operator)
    return(
      <div className="Main">
      <form onSubmit={this.handleSubmit}>
        <label>
      <h2>Enter each number in the array, separated by a '','</h2>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      <select onChange={this.handleSelectChange}>
        <option value="">Select</option>
        <option value="Sum">Sum</option>
        <option value="Average">Average</option>
        <option value="Mode">Mode</option>
      </select>
      <button>Calculate</button>
      </form>
      <h2>{this.state.operator}</h2>
      </div>
    )
  }
  

}

export default App;
