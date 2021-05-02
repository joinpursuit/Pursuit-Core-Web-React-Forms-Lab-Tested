import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      increment: 1
    }
  }

  increaseScore = () => {
    const newScore = (this.state.score + this.state.increment)
    this.setState({
      score: newScore
    })
  };

  decreaseScore = () => {
    const reduceScore = this.state.score
    const addPoints = this.state.increment
    if (this.state.score < 10) {
      alert("You can't afford that!")
    } else {
      this.setState({
        score: reduceScore - 10,
        increment: addPoints + 1
      })
    }
  };

  playAgain = () =>{
    this.setState({
      score: 0,
      increment: 1
    })
  }


  render() {
    if (this.state.score < 100) {
      return (
        <div>
          <h1>Current Score: {this.state.score}</h1>
          <button onClick={this.increaseScore}>+{this.state.increment}</button>
          <button onClick={this.decreaseScore}>Pay 10 points to change from +{this.state.increment} to +{this.state.increment + 1}</button>
        </div>

      )
    } else {
      return (
        <div>
           <h1>Current Score: {this.state.score}</h1>
          <h2>You Win!</h2>
          <button onClick={this.playAgain}>Play again?</button>
        </div>
      )
    }
  };
};

export default App;

