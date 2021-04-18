// import React from 'react'
 import React, { Component } from 'react'

export default class Math extends Component {
    //allows objects to render
    constructor () {
        super()
        this.state = {
            array: "",
            value: "",
            answer: ""
        }
        this.newArr = []
    }

    handleArrChange = (e) => {
        this.setState({array: e.target.value})
    }

    changeValue = (e) => {
        this.setState({value: e.target.value})
    }

    comma = () => {
        this.newArr = this.state.array.split(",").map((el)=> Number(el))
        return this.newArr.every((char) => {
            return ! Number.isNaN(char)
        })
    }

    calculate = (e) => {
        e.preventDefault()

        if (this.state.value === "sum" && this.comma()) {
            this.sum()
        } else if (this.state.value ===  "average" && this.comma()) {
            this.average()
        }else if (this.state.value === "mode" && this.comma()) {
            this.mode()
        } else {
            this.setState({answer:"Invalid input."})
        }
    }

//math

sum = () => {
let total = 0
this.newArr.forEach(el => total += el)
this.setState({answer:total})
return total 
}

//most frequest number
mode = () => {
const obj = {}
let highest = 0 
let highestKey = -Infinity

this.newArr.forEach(num => {
    obj[num] = (obj[num] || 0) + 1
})
for (let key in obj) {
    const value = obj[key]
    if (value > highest) {
        highest = value
        highestKey = key
    }
}
this.setState({answer:highestKey})
}


//sum of numbers divided by total numbers in array
average = () => {
let sum = this.sum()
this.setState({answer:(sum/this.newArr.length)})
}




    render() {
        const {array,value} = this.state
        return (
            <div>
                <form onSubmit = { this.calculate}>
                    <input type="text"
                    name="array"
                    id="array"
                    onChange={this.handleArrChange}
                    value= {array}
                    />

                    <select onChange={this.changeValue} value={value}>
                        <option value="sum">sum</option>
                        <option value="average">average</option>
                        <option value="mode">mode</option>
                    </select>
                    <button>Calculate</button>

                </form>
                <p>{this.state.answer}</p>
            </div>
        )
    }
}

 
//  export default Math

