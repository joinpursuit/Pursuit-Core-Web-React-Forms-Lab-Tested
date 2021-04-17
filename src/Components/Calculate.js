import React from "react";

class Calculate extends React.Component {
  state = { input: "", inputArr: [], mathDefault: "sum" , sum: 0, average: 0, mode: 0};
  
  handleInputCalculate = (e) => {
    e.preventDefault();

    console.log(this.state)
    // const {input,inputArr,mathDefault,sum} = this.state
    // console.log(input);

    /*
    we take in input convert to array,
    map out the array convert each element of the array to a number

    we can sum
    we can average
    we can mode 
    */

    // this.setState({
     
    // });
    // const numbers = inputArr.map((num) => {
    //   return parseInt(num);
    // })
    // console.log(inputArr);
    // console.log(numbers)

    // if(mathDefault === 'sum'){
    //   this.setState({sum: inputArr.reduce((a, b) => a + b, sum)});
    //   // console.log(this.state.sum);
    // } else if (mathDefault === 'average') {
    //   console.log('average');
    // } else if (mathDefault === 'mode') {
    //   console.log('mode');
    // }
  };

  /**  */

  handleInputChange = (e) => {
    this.setState({
      // input: e.target.value.split(',').map((num) => parseInt(num))
      // input: e.target.value.split(',').map((num) => Number(num))
      input: e.target.value.split(','),
      // inputArr: this.input.map((num) => {
      //     return parseInt(num);
      //   })
      
    });
    
    // console.log(e.target.value);
  };
  
  convertToNumber = (e) => {
    e.preventDefault();
    const { input,inputArr } = this.state;
    console.log(input)
    this.setState({
      inputArr: input.map((num) => Number(num))
    });
    console.log(inputArr)
  }

  handleSelectChange = (e) => {
    this.setState({ mathDefault: e.target.value})
  }

  render() {
      const { input, mathDefault } = this.state;
      return (
      <>
        <form onSubmit={this.handleInputCalculate} onSubmit={this.convertToNumber}>
          <label>
            Enter each number in the array, separated by a ','
            <input onChange={this.handleInputChange} value={input} />
          </label>
          <select onChange={this.handleSelectChange} value={mathDefault}>
            <option value="sum">Sum</option>
            <option value="average">Average</option>
            <option value="mode">Mode</option>
          </select>
          <button>Calculate</button>
        </form>
        <p></p>
      </>
    );
  }
}

export default Calculate;
