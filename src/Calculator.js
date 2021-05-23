/* import React, { Component } from 'react'

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
            const selectedOperation = object[key]
            if (selectedOperation > highest){
                highest = selectedOperation
                highestKey = key
            }
        }

        this.setState({result:highestKey})

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
            this.setState({result: "Invalid input."})
        } 
    }

    render() {
        const {inputNumbers, selectedOperation} = this.state
        return (
        <div>
            <form onSubmit={this.handleCalculate}>
                <input type='text' name='inputNumbers' id='inputNumbers' selectedOperation={inputNumbers} onChange={this.handleChange} />
                <select value={selectedOperation} onChange={this.handleOperation}>
                    <option selectedOperation='none'></option>
                    <option selectedOperation='sum'>sum</option>
                    <option selectedOperation='average'>average</option>
                    <option selectedOperation='mode'>mode</option>
                </select>
                <button type='submit'>Calculate</button>
            </form>
            <h2>{this.state.result}</h2>
        </div>
        )
    }
}

export default Calculator */


import React, {useState} from 'react'

export default function Calculator() {
    const [inputNumbers, setInputNumbers] = useState("")
    const [selectedOperation, setSelectedOperation] = useState("")
    const [result, setResult] = useState("")
    const [numberSplit, setNumberSplit] = useState([])
    
    const handleOperation = (event) => {
        setSelectedOperation(event.target.value);
    }
    const handleChange = (event) => {
        setInputNumbers(event.target.value);
    }
    const sum = () => {
        let total = 0 
        console.log(numberSplit)
        numberSplit.forEach(element => total += element)
        console.log(total)
        setResult(total)
        
        return result
    }
    const average = () => {
        let sum = sum()
        setResult(sum / numberSplit.length)  
    }
    const mode = () => {
        const object = {}
        let highest = 0 
        let highestKey = -Infinity

        numberSplit.forEach(num => {
            object[num] = (object[num] || 0) + 1
        })

        for (let key in object) {
            const selectedOperation = object[key]
            if (selectedOperation > highest){
                highest = selectedOperation
                highestKey = key
            }
        }

        setResult(highestKey)

    }
    const checker = () => {
        setNumberSplit(inputNumbers.split(",").map((element) => Number(element)))
        //number split does not log out anything
        console.log(numberSplit)
        return numberSplit.every((character) => {
        return ! Number.isNaN(character)
        }) 
    }
    const handleCalculate = (event) => {
        event.preventDefault()

        if (selectedOperation === "sum" && checker()){
            sum()
        } else if (selectedOperation === "average" && checker()){
            average()
        } else if (selectedOperation === "mode" && checker() ){
            mode()
        } else {
            setResult("Invalid input.")
        } 
    }

    return (
        <div>
            <form onSubmit={handleCalculate}>
                <input type='text' name='inputNumbers' id='inputNumbers' selectedOperation={inputNumbers} onChange={handleChange} />
                <select value={selectedOperation} onChange={handleOperation}>
                    <option selectedOperation='none'></option>
                    <option selectedOperation='sum'>sum</option>
                    <option selectedOperation='average'>average</option>
                    <option selectedOperation='mode'>mode</option>
                </select>
                <button type='submit'>Calculate</button>
            </form>
            <h2>{result}</h2>
        </div>
    )
}
