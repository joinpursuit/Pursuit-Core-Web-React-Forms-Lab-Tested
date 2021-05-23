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
            selectedOperation: event.target.selectedOperation
        })
    }
    
    handleChange = (event) => {
        this.setState({
            inputNumbers: event.target.selectedOperation
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
            this.setState({result:"Invalid input"})
        } 
    }

    render() {
        const {inputNumbers, selectedOperation} = this.state
        return (
        <div>
            <form onSubmit={this.handleCalculate}>
                <input type='text' name='inputNumbers' id='inputNumbers' selectedOperation={inputNumbers} onChange={this.handleChange} />
                <select selectedOperation={selectedOperation} onChange={this.handleOperation}>
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

export default Calculator
*/
import React, { Component } from 'react'

export class Calculator extends Component {
    constructor(){
        super()
        this.state = {
            inputNumber: "",
            selectedOperation: "",
            result:""
        }
        this.result = ""
        this.newinputNumber = []    

    }

    handleinputNumberChange = (e) => {
        this.setState({inputNumber: e.target.selectedOperation})       
    }


    changeselectedOperation = (e) => {
        this.setState({selectedOperation: e.target.selectedOperation})
    }

    checker = () => {
        this.setState {
            newinputNumber = this.state.inputNumber.split(",").map((el) => Number(el))

        return this.newinputNumber.every((char) => {
        return ! Number.isNaN(char)
        }) 
   }

    handleCalculate = (e) => {
        e.preventDefault()

        if (this.state.selectedOperation === "sum" && this.checker() ){
            this.sum()
        } else if (this.state.selectedOperation === "average" && this.checker() ){
            this.average()
        } else if (this.state.selectedOperation === "mode" && this.checker() ){
            this.mode()
        } else {
            this.setState({result:"Invalid input."})
        } 
    }

    sum = () => {
        let total = 0 
        this.newinputNumber.forEach(el => total += el)
        this.setState({result: total})
        return total
    }

    average = () => {
        let sum = this.sum()
        this.setState({result: (sum / this.newinputNumber.length) })  
    }

    mode = () => {
        const obj = {}
        let highest = 0 
        let highestKey = -Infinity

        this.newinputNumber.forEach(num => {
            obj[num] = (obj[num] || 0) + 1
        })

        for (let key in obj) {
            const selectedOperation = obj[key]
            if (selectedOperation > highest){
                highest = selectedOperation
                highestKey = key
            }
        }

        this.setState({result:highestKey})

    }

    render() {
        const {inputNumber,selectedOperation} = this.state
        return (
            <> 
            <form onSubmit={this.handleCalculate}>
                <input 
                    type="text"
                    name="inputNumber"
                    id="inputNumber"
                    onChange={this.handleinputNumberChange}
                    selectedOperation = {inputNumber}
                /> 
                <br></br>
                <select onChange={this.changeselectedOperation} selectedOperation={selectedOperation}>
                    <option> </option>
                    <option selectedOperation="sum">sum</option>
                    <option selectedOperation="average">average</option>
                    <option selectedOperation="mode">mode</option>
                </select>
                <br></br>
                <button>Calculate</button>

            </form>

            <p> {this.state.result}</p>
            </>

        )
    }
}

export default Calculator