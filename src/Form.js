import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super()
        this.state = {
            input: "",
            value: "",
            result:""
        }
    }

    changedInputs = (e) => {
        this.setState({input: e.target.value})       
    }
    changedValues = (e) => {
        this.setState({value: e.target.value})
    }

    valid = () => {
        const { input, value } = this.state;
             let array = input.split("");
             let doesIt = array.every((el) => {
                 return !isNaN(el) || el === ",";
        });
                    return doesIt && input && value;
   }

   








   

    handleCalculate = (e) => {
        e.preventDefault()
        if (this.state.value === "sum" && this.valid() ){ this.sum()} 
        else if (this.state.value === "average" && this.valid()){this.average()} 
        else if (this.state.value === "mode" && this.valid()){this.mode()} 
        else {this.setState({result:"Invalid"})}}

    sum = () => {
        const { input } = this.state;
        let arr = input.split(",");
        let sum = 0;
        arr.forEach((elem) => {
          sum += Number(elem);
        });
        return sum;
    }












    average = () => {
    }

    mode = () => {
       
    }














    render() {
        const {input,value,result} = this.state
        return (
            <> 
            <form onSubmit={this.handleCalculate}>
                <input 
                    type="text"
                    name="input"
                    id="input"
                    onChange={this.changedInputs}
                    value = {input}
                /> 
                <select onChange={this.changedValues} value={value}>
                    <option > </option>
                    <option value="sum">sum</option>
                    <option value="average">average</option>
                    <option value="mode">mode</option>
                </select>
                <button>Calculate</button>
            </form>
            <p> {result}</p>
            </>
            
        )
    }
}

export default Form