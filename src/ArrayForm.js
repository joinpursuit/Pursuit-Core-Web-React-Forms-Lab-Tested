import React, { Component } from 'react'

export class ArrayForm extends Component {
    constructor(){
        super()
        this.state = {
            array: "",
            value: "",
            answer:""
        }
        this.answer = ""
        this.newArray = []    
 
    }

    handleArrayChange = (e) => {
        this.setState({array: e.target.value})       
    }


    changeValue = (e) => {
        this.setState({value: e.target.value})
    }

    checker = () => {
        this.newArray = this.state.array.split(",").map((el) => Number(el))

        return this.newArray.every((char) => {
        return ! Number.isNaN(char)
        }) 
   }

    handleCalculate = (e) => {
        e.preventDefault()

        if (this.state.value === "sum" && this.checker() ){
            this.sum()
        } else if (this.state.value === "average" && this.checker() ){
            this.average()
        } else if (this.state.value === "mode" && this.checker() ){
            this.mode()
        } else {
            this.setState({answer:"Invalid input."})
        } 
    }

    sum = () => {
        let total = 0 
        this.newArray.forEach(el => total += el)
        this.setState({answer: total})
        return total
    }

    average = () => {
        let sum = this.sum()
        this.setState({answer: (sum / this.newArray.length) })  
    }

    mode = () => {
        const obj = {}
        let highest = 0 
        let highestKey = -Infinity

        this.newArray.forEach(num => {
            obj[num] = (obj[num] || 0) + 1
        })

        for (let key in obj) {
            const value = obj[key]
            if (value > highest){
                highest = value
                highestKey = key
            }
        }

        this.setState({answer:highestKey})
       
    }

    render() {
        const {array,value} = this.state
        return (
            <> 
            <form onSubmit={this.handleCalculate}>
                <input 
                    type="text"
                    name="array"
                    id="array"
                    onChange={this.handleArrayChange}
                    value = {array}
                /> 
                <br></br>
                <select onChange={this.changeValue} value={value}>
                    <option> </option>
                    <option value="sum">sum</option>
                    <option value="average">average</option>
                    <option value="mode">mode</option>
                </select>
                <br></br>
                <button>Calculate</button>
          
            </form>

            <p> {this.state.answer}</p>
            </>
            
        )
    }
}

export default ArrayForm

