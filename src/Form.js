import React from "react";

class Form extends React.Component {
    state = {
        input : "",
        select : ""
    }
    handleChange = (e) => {
        const {name, value } = e.target
        this.setState({[name]: value })
    }
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
      const {input, select} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="input" value={input} onChange={this.handleChange}/>
        <select name="select" value={select} onChange={this.handleChange}>
            <option></option>
            <option>sum</option>
            <option>average</option>
            <option>mode</option>
        </select>
        <button>Calculate</button>
        <h2></h2>
      </form>
    );
  }
}

export default Form;
