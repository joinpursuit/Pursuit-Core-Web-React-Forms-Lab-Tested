import {Component} from 'react';


class Calculator extends Component{
    constructor(){
        super()
        this.state = {
            input: '',
            select: '',
            answer:''
        }
    }

    handleChange = (e) =>{
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    handleSubmit = (e) =>{
        e.preventDefault();
        alert('form submitted')
    };
    render(){
        const { input, select, answer } = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text' 
                value={input} 
                name="input"
                onChange={this.handleChange}
                />
                <select value={select} name="select" onChange={this.handleChange}>
                    <option></option>
                    <option value='sum'>sum</option>
                    <option value='avearge'>average</option>
                    <option value='mode'>mode</option>
                </select>
                <button type='submit'>Calculate</button>
                <p>{answer}</p>
            </form>
        )
    }
}

export default Calculator;