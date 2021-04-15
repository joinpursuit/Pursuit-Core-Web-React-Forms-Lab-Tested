import React, { Component } from 'react'

const aligned = {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  justifyContent: 'space-between'
}

const self = {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: 'auto',
  margin: '20px'
}

export default class Calculator extends Component {
  constructor () {
    super()
    this.state = {
      str: '',
      result: '',
      selected: false
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      result: ''
    })

    let myStr = this.state.str
    let newStr = ''
    let myArray = []

    for (let char of myStr + ',') {
      if (char !== ',') {
        newStr += char
      } else {
        if (!isNaN(parseInt(newStr))) {
          myArray.push(parseInt(newStr))
        } else {
          this.setState({
            result: 'Invalid input.'
          })
          return
        }
        newStr = ''
      }
    }

    let calculus = 0
    let rmode = 1
    let mode = {}
    let nn = ''

    calculus = myArray.reduce((acc, num) => {
      acc += num
      return acc
    }, 0)

    myArray.forEach(num => {
      nn = num.toString()

      if (mode[nn]) {
        mode[nn] += 1
      } else {
        mode[nn] = 1
      }
    })

    for (let kee in mode) {
      if (mode[kee] > rmode) {
        rmode = kee
      }
    }

    switch (this.state.selected) {
      case 'sum':
                    this.setState({
                      result: calculus
                    })
                    break
      case 'average':
                    this.setState({
                    result: (calculus / myArray.length).toFixed(2)
                    })
                    break
      case 'mode':
                    this.setState({
                    result: rmode
                    })
                    break
      default:
                    this.setState({
                    result: 'Please select a method'
                    })
    }
  }

  selectedValue = e => {
    this.setState({
      selected : e.target.value
    })  
  }

  handleChange = e => {
    this.setState({
      str: e.target.value
    })
  }

  render () {
    return (
      <div>
        <form style={aligned} onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='numbers'
            id='numbers'
            onChange={this.handleChange}
            style={self}
          />
          <select
            name='select'
            id='select'
            style={self}
            onChange={this.selectedValue}
          >
            <option value='none'></option>
            <option value='sum'>sum</option>
            <option value='average'>average</option>
            <option value='mode'>mode</option>
          </select>
          <button type='submit' style={self}>
            Calculate
          </button>
        </form>
        <p id='result' style={self}>
          {this.state.result}
        </p>
      </div>
    )
  }
}
