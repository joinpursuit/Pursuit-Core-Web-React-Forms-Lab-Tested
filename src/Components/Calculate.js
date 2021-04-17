import React from "react";

class Calculate extends React.Component {
  state = { inputArr: 0 };

  handleCalculate = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleCalculate}>
        <label>
          <input />
        </label>
      </form>
    );
  }
}

export default Calculate;
