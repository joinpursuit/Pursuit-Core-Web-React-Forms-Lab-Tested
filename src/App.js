import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
  constructor(){
    super()
    this.state ={
      count: "",
      number: "",
      value: ""
     
    }
    this.number= ''
    this.mynum = []
  }

  // handleValueChange =(e)=>{
  //   const{name} = e.target
  //   const{value} = e.target 
  //   this.setState({
  //     [name]: value + ","
  //   })

  // }
  handleValChange = (e)=>{
    this.setState({number: e.target.value + "," })
  }
  handleValue = (e)=>{
    this.setState({value: e.target.value + ","})
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
    // this.state.value = "Sum"; 

    for(let i in arr){
      sum = sum + arr[i]
    } return this.setState({count: sum}); 
    // this.state.operator = "Sum"; 
    
  }

  handleAvarege =(e)=>{
    let sum = 0
    let avera = this.mynum
    let total = ''

    for(let i in avera){
      sum = sum + avera[i]
      total = sum / (this.mynum.length -1)
    } return this.setState({count: total})

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
       this.setState({count: num2})
  }

  handleSubmit =(e) =>{
    e.preventDefault()
    
    this.setState({
      number: '',
      value: this.state.number
    })
    if(this.nanNUM()){
      if(this.state.number) {
    this.handleSum()
    }else if(this.state.number){
      this.handleMode()
    }else if(this.state.number){
      this.handleAvarege()
    }else{
      this.setState({count: "Invalid input."})
    }
    }
    
  }
  render() {
    console.log(this.mynum)
    console.log(this.state.count )
    console.log(this.state.value)

    return (
      <div className='App'>
       <h1>Enter each number in the array, separated by a ','</h1>
          <form onSubmit={this.handleSubmit} className= 'form'>
            <label htmlFor='number'></label>
            <input type='text' name='number' placeholder="type" onChange={this.handleValChange} value={this.state.number}></input>
            <select >
              <option onChange={this.handleValue} value={this.state.value}></option>
              <option value='Sum'>Sum</option>
              <option value='Mode'>Mode</option>
              <option value='Average'>Average</option>
            </select>
            <button type="submit">Calculate</button>
            <p>
               {this.state.count}
            </p>
          </form>
       
        
        
      </div>
    )
  }
}

