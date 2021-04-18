import React from "react";

class Form extends React.Component {
	state = { input: "", total: 0, calculation: "sum" };

	handleSubmit = (e) => {
		e.preventDefault();
		const { input, calculation } = this.state;
		let numArr = input.split(",").map(Number);
		// now we have an array of numbers
		if (calculation === "sum") {
			let sum = 0;
			numArr.forEach((num) => {
				sum += num;
			});
			this.setState({ total: sum });
			// this.setState({ total: sum, input: ""})
		} else if (calculation === "average") {
			let sum = 0;
			numArr.forEach((num) => {
				sum += num;
				total = sum / numArr.length;
			});
		}
		if (claculation === "mode") {
			for (let i = 0; i < numArr.length; i++) {
				for (let j = 0; j < i; j++) {
					if (numArr[j] === numArr[i]) {
						total = numArr[j];
						count++;
					}
				}
			}
		}

		//     .map((num) => {
		// 	if (calculation === "sum") {
		// 		// add the nums
		// 		this.setState((prevState) => {
		// 			const { total } = prevState;
		// 			return { total:total+ Number(num), input: "" };
		// 		});
		// 	} else if (calculation === "average") {
		// 		// find average ==> sum / numArr.length
		//         this.setState((prevState) => {
		//             // const { total } = prevState;
		//             return {
		//                 total: (total + Number(num)) / numArr.length,
		//                 input: "",
		//             };

		// 		});
		// 	} else if (calculation === "mode") {
		// 		// find mode ==> number that occurs the most
		//     }

		// });

		console.log(input);
		console.log(numArr);
	};

	// handleSelect = (e) => {
	// 	this.setState({ calculation: e.target.value});
	// }

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });

		// this.setState({ input: value});
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
						{/* {calculation}: {sum} */}
					</p>
				</form>
			</div>
		);
	}
}

export default Form;
