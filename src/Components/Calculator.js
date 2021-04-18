import { Component } from "react";

const input = []

class Calculator extends Component {
    constructor() {
      super();
      this.state = {
        firstName: "",
        lastName: "",
        subscribe: false,
      };
    }
  
    // TODO: combine the onChange event handlers
  
    handleNameChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    };
  
    handleCheckChange = (e) => {
      const { name, checked } = e.target;
      this.setState({
        [name]: checked,
      });
    };
  
    handleSubmit = (e) => {};
  
    // isValidInput should return a truthy value if both form fields are valid
    // and a falsey value otherwise
    isValidInput = () => {
      const { firstName, lastName } = this.state;
      return firstName && lastName;
    };
  
    render() {
      const { firstName, lastName, subscribe } = this.state;
      const shouldDisable = !this.isValidInput();
  
      return (
        <form className="userInp" onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={this.handleNameChange}
            value={firstName}
          />
  
   
  
          <fieldset>
            <input
              type="checkbox"
              name="subscribe"
              id="subscribe"
              checked={subscribe}
              onChange={this.handleCheckChange}
            />
            <label htmlFor="subscribe">Subscribe to emails</label>
          </fieldset>
  
          <button type="submit" disabled={shouldDisable}>
            Submit
          </button>
        </form>
      );
    }
  }

export default Calculator;
