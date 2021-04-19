import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = { input: '' }
    }
    enterNumber = (e) => {
        this.setState(
            { input: e.target.value }
        )
    }
    render() {
        return (
            <form>
                <div>Enter each number in the array separated by a ','</div>
                <input
                    type='text'
                    onChange={this.enterNumber}
                />
                {/*  */}
            </form>
        )
    }
}