import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state ={
      sum: "",
      number: ""
    }
    this.number= ''
    this.mynum = []
  }

  handleValueChange =(e)=>{
    const{name} = e.target
    const{value} = e.target
    this.setState({
      [name]: value + ","
    })

  }
  nanNUM = () => {
    this.mynum = this.state.number.split(",").map((el) => Number(el))

    return this.mynum.every((el) => {
    return ! Number.isNaN(el)
    }) 
  }

  handleSum =(e)=>{ 
    let sum = 0
    let arr = this.mynum

    for(let i in arr){
      sum = sum + arr[i]
    } return this.setState({sum: sum})
   
  }

  handleAvarege =(e)=>{
    let avera = this.handleSum()
    console.log()
     return this.setState({
      sum: (avera / this.mynum.length)
    })
  }
  
  handleMode =(e) =>{
       const object = this.mynum
       let num1 = 0
       let num2 = -Infinity
       
       for(let key in object){
         let val = object[key]
         if(val > num1){
           num1 = val
           num2 = num1
           num2 = key
         } 
       }
       this.setState({sum: num2})
  }

  handleSubmit =(e) =>{
    e.preventDefault()
    if(this.state.value && this.nanNUM()) {
    this.handleSum()
    }else if(this.state.value && this.nanNUM()){
      this.handleMode()
    }else if(this.state.number && this.nanNUM()){
      this.handleAvarege()
    }else{
      this.setState({sum: "Invalid input."})
    }
  }
  render() {

    return (
      <div>
       
          <h1>Enter each number in the array, separated by a ','</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='number'></label>
            <input type='text' name='number' placeholder="type" onChange={this.handleValueChange} value={this.state.number}></input>
            <select onChange={this.handleValueChange} >
              <option></option>
              <option value='Sum'>Sum</option>
              <option value='Mode'>Mode</option>
              <option value='Average'>Average</option>
            </select>
            <button>Calculate</button>
            <li>
               {this.state.sum}
            </li>
          </form>
       
        
        
      </div>
    )
  }
}

