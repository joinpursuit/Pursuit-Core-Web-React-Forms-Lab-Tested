import React, { Component } from 'react'

export class Calculator extends Component {
    constructor(){
        super()
        this.state = {
            inputNumbers: '',
            selectedOperation: '',
            result: ''

        }
        this.numberSplit = []
    }

    handleOperation = (event) => {
        this.setState({
            selectedOperation: event.target.value
        })
    }
    
    handleChange = (event) => {
        this.setState({
            inputNumbers: event.target.value
        })
    }
    sum = () => {
        let total = 0 
        this.numberSplit.forEach(element => total += element)
        this.setState({result: total})
        return total
    }
    average = () => {
        let sum = this.sum()
        this.setState({result: (sum / this.numberSplit.length) })  
    }
    mode = () => {
        const object = {}
        let highest = 0 
        let highestKey = -Infinity

        this.numberSplit.forEach(num => {
            object[num] = (object[num] || 0) + 1
        })

        for (let key in object) {
            const value = object[key]
            if (value > highest){
                highest = value
                highestKey = key
            }
        }

        this.setState({answer:highestKey})

    }

    checker = () => {
        this.numberSplit = this.state.inputNumbers.split(",").map((element) => Number(element))
        return this.numberSplit.every((character) => {
        return ! Number.isNaN(character)
        }) 
    }

    handleCalculate = (event) => {
        event.preventDefault()

        if (this.state.selectedOperation === "sum" && this.checker()){
            this.sum()
        } else if (this.state.selectedOperation === "average" && this.checker()){
            this.average()
        } else if (this.state.selectedOperation === "mode" && this.checker() ){
            this.mode()
        } else {
            this.setState({answer:"Invalid input"})
        } 
    }

    render() {
        const {inputNumbers, selectedOperation} = this.state
        return (
        <div>
            <form onSubmit={this.handleCalculate}>
                <input type='text' name='inputNumbers' id='inputNumbers' value={inputNumbers} onChange={this.handleChange} />
                <select value={selectedOperation} onChange={this.handleOperation}>
                    <option value='none'></option>
                    <option value='sum'>sum</option>
                    <option value='average'>average</option>
                    <option value='mode'>mode</option>
                </select>
                <button type='submit'>Calculate</button>
            </form>
            <h2>{this.state.result}</h2>
        </div>
        )
    }
}

export default Calculator
