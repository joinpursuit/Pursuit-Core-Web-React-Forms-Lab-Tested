import React from "react"

class Form extends React.Component{
    state={input:[], operation:""}

    handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(this.state)
    }

        
    handleOperation = (e) =>{
        
            this.setState({input: [(e.target.value)] })
    
    }

    // addInput = (e) =>{
    //     this.setState({input: this.state.input + Number(this.state.input)})
    // }

    render() {
        const {input, operation} = this.state
        console.log(this.state)
        return (
            <div>
                <h1>Enter each number in the array, separated by a ','</h1>

            <form onSubmit={this.handleSubmit}>
                <input name="input" type="text" onChange={this.handleOperation} value={this.state.input}/>
                
                <br></br>
                <br></br>
                <select name="operation" value={operation} onChange={this.handleOperation}>
                    <option value="sum">sum</option>
                    <option value="average">average</option>
                    <option value="mode">mode</option>
                </select>

                <br></br>
                <br></br>

                <button>Calculate</button>
            </form>

            {/* <p>{total}</p> */}

            </div>
        )
    }
}

export default Form 