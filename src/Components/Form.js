import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super() 

        this.state = {
            input : "",
            answer: "",
            select: ""
        }
        
    }
    
    change = (event) => {
        
    }

    evaluate = (event) => {
        event.preventDefault()
        let sum = 0
        let avg = 0
        let mostCommon = 1
        let count = 0
        let mode = ""

        for(let i = 0; i < this.state.input.length; i++) {

            //sum
            if(this.state.select === "sum"){
                sum += this.state.input[i]
                this.setState({answer: sum})

                //avg
            } else if(this.state.select === "average"){
                sum += this.state.input[i]
                avg = sum / this.state.input.length
                this.setState({answer: avg})

                //mode
            } else if(this.state.select === "mode"){
                for(let j = 0; j < this.state.input.length; j++){
                    if(this.state.input[i] === this.state.input[j]){
                        count++
                    } else if(mostCommon < count){
                        mostCommon = count
                        mode = this.state.input[i]
                    }
                }
                count = 0
                this.setState({answer: mode})
            } else {
                this.setState({answer: "Invalid input."})
            }
        }
    }
    

    render() {
        return (
            <div>
            <form onSubmit={this.evalute}>
                <input type="text"></input>
                <select onChange={this.change}>
                    <option selected value="--">--</option>
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

export default Form
