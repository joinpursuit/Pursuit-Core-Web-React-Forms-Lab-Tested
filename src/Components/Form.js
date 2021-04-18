import React, { Component } from 'react'

export default class Form extends Component {
    state = { math: "sum", string: "", result: "" }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if(!this.state.string.split(",").every(char => !isNaN(char))){
        
            this.setState({ result: "Invalid input." })
        }
        
        else if (this.state.string === "") {
            this.setState({ result: "Invalid input." })
        } else if (this.state.math === "sum") {
            let sumVar = 0
            this.state.string.split(",").forEach(el => {
                sumVar += Number(el)
            })
            this.setState({ result: sumVar })
        } else if (this.state.math === "average") {
            let averageVar = 0
            this.state.string.split(",").forEach(el => {
                this.setState({ result: Number(averageVar) / (this.state.string.split(",").length) })
                averageVar += Number(el)
            })

            this.setState({ result: averageVar / (this.state.string.split(",").length) })
        } else if (this.state.math === "mode") {
            let modeVar = this.mostCommonElement(this.state.string.split(","))
            this.setState({ result: modeVar })
        }
        console.log(this.state.string.split(",").length)
        // this.setState({ string: "" })
    }
    checker = () => {

    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    mostCommonElement = (array) => {

        let newObj = {}
        for (let i = 0; i < array.length; i++) {
            newObj[array[i]] = (newObj[array[i]] || 0) + 1
        }

        let maxKey = array[0]
        for (let key of array) {
            if (newObj[key] > newObj[maxKey]) {
                maxKey = key
            }
        }
        return maxKey
    };
    
    render() {
        console.log(this.state);
        const { math, string, result } = this.state
        return (
            <div>
                <h1>Enter each number in the string, seperated by a "," </h1>
                <form onSubmit={this.handleSubmit}>
                    <br />

                    <label>
                        <input name="string" value={string} onChange={this.handleChange}  >
                        </input>
                    </label>
                    <br />
                    <select name="math" value={math} onChange={this.handleChange}>
                        <option value="sum">sum</option>
                        <option value="average">average</option>
                        <option value="mode">mode</option>
                    </select>
                    <br />
                    <br />
                    <button>Calculate</button>
                </form>
                <p>{result}</p>
            </div>
        )
    }
}
