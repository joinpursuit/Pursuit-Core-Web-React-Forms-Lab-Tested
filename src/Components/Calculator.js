import React from 'react'

class Calculator extends React.Component {
	state = {
		input: '',
		value: '',
		results: '',
	}
	numArr = []

	handleInput = (e) => {
		this.setState({ input: e.target.value })
	}

	handleValue = (e) => {
		this.setState({ value: e.target.value })
	}

	numCheck = () => {
		const { input } = this.state
		this.numArr = input.split(',').map((el) => Number(el))
		return this.numArr.map((num) => {
			return !isNaN(num)
		})
	}

	sum = () => {
		let sum = 0
		this.numArr.forEach((num) => {
			sum += num
		})
		this.setState({ results: sum })
		return sum
	}

	avg = () => {
		let total = this.sum()
		this.setState({ results: total / this.numArr.length })
	}

	mode = () => {
		const object = {}
		let num = 0
		let highestKey = 0

		this.numArr.forEach((num) => {
			object[num] = (object[num] || 0) + 1
		})

		for (let key in object) {
			const value = object[key]
			if (value > num) {
				num = value
				highestKey = key
			}
		}
		this.setState({ results: highestKey })
	}

	handleSubmit = (e) => {
		e.preventDefault()

		if (this.state.value === 'sum' && this.numCheck()) {
			this.sum()
		} else if (this.state.value === 'average' && this.numCheck()) {
			this.avg()
		} else if (this.state.value === 'mode' && this.numCheck()) {
			this.mode()
		} else {
			this.setState({ results: 'Invalid input.' })
		}
	}

	render() {
		const { input, value, results } = this.state
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input value={input} onChange={this.handleInput} />
					<br />
					<br />
					<select onChange={this.handleValue} value={value}>
						<option>sum</option>
						<option>average</option>
						<option>mode</option>
					</select>
					<br />
					<br />
					<button>Calculate</button>
				</form>
				<p>{results}</p>
			</div>
		)
	}
}

export default Calculator
