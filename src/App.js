import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state ={
      number: ""
    }
  }

  handleValueChange =(e)=>{
    const{name} = e.target
    const{value} = e.target
    this.setState({
      [name]: value + ","
    })

  }

  handleSum =(e)=>{
    let sum = 0
    for(let i = 0; i < e.taget.value; i++){
      sum = sum + sum[i]
    }
    console.log(sum.value)
    this.setState({
      number: sum
    })

  }

  handleAvarege =(e)=>{
    const avera = this.setState({number: e.target.value})
      
    console.log(avera)
    let average = avera.length
    console.log(average.value)
     
    this.setState({
      number: average
    })


  }
  handleMode =(e) =>{

  }

  handleSubmit =(e) =>{
    

  }
  render() {
    return (
      <div>
       
          <h1>Enter each number in the array, separated by a ','</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='type'></label>
            <input type='text' name='number' placeholder="type" onChange={this.handleValueChange} value={this.state.number}></input>
            <select >
              <option></option>
              <option value='Sum' onChange={this.handleSum}>Sum</option>
              <option value='Mode'>Mode</option>
              <option value='Average'>Average</option>
            </select>
            <button onChange={this.handleSum}>Calculate</button>
            <ul onChange={this.handleSum}>

            </ul>
          </form>
       
        
        
      </div>
    )
  }
}

