import React, { Component } from 'react'
import "./Calculator.css"

export default class Calculator extends Component {
    constructor(){
        super();

        this.state = {

        }
    }



    handleTextChange = (e) => {
        const {name, value} = e.target;
        this.setState({
          [name]:value
        })
      }


      sum = () => {
          
      }


    handleFormSubmit = (event) => {
        event.preventDefault();

        alert("Form Submitted.")
      };


    render() {
        return (
            <div className="calculator">
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Enter each number in the array, seperated by a ','</h1>
                    <input 
                        type="text" 
                        name="input"
                        onChange={this.handleTextChange}
                    />
                    <br/><br/>
                    <select name="" id="">
                        <option value=""></option>
                        <option value="sum">Sum</option>
                        <option value="average">Average</option>
                        <option value="mode">Mode</option>
                    </select>
                    <br/><br/>
                    <button type="submit">Calculate</button>
                </form>
            </div>
        )
    }
}
