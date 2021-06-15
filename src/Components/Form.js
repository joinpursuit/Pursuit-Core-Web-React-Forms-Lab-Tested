import React from "react";

class Form extends React.Component {
	state = { input: "", total: 0, calculation: "sum" };

	handleSubmit = (e) => {
		e.preventDefault();
		let { input, calculation, total } = this.state;
		let numArr = input.split(",").map(Number);
		if (calculation === "sum") {
			let sum = 0;
			numArr.forEach((num) => {
				sum += num;
			});
			this.setState({ total: sum });
		} else if (calculation === "average") {
			let sum = 0;
			numArr.forEach((num) => {
				sum += num;
				this.setState({total: sum / numArr.length})
			});
		}
		if (calculation === "mode") {
			for (let i = 0; i < numArr.length; i++) {
				for (let j = 0; j < i; j++) {
					if (numArr[j] === numArr[i]) {
						this.setState({total: numArr[j]})
					
					}
				}
			}
		}

		console.log(input);
		console.log(numArr);
	};


	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });

	};

	render() {
		const { input, calculation, sum, total } = this.state;
		console.log(this.state);

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Enter each munber in the array, separated by a ','
						<br />
						<input onChange={this.handleChange} value={input} name={"input"} />
						<br />
						<select
							name="calculation"
							value={calculation}
							onChange={this.handleChange}
						>
							<option value="sum">Sum</option>
							<option value="average">Average</option>
							<option value="mode">Mode</option>
						</select>
						<br />
					</label>
					<button>Calculate</button>
					<p>
						{calculation}: {total}
					</p>
				</form>
			</div>
		);
	}
}

export default Form;
