import React, { Component } from 'react';

class Count extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }


    increment() {
        // this.setState(
        //     { count: this.state.count + 1 }
        //     , () => {
        //         console.log(`count is ${this.state.count}`);
        //     });
        //increment count from previous state rather than current state ---for synchronous
        this.setState((prevState) => ({ count: prevState.count + 1 }));

    }
    render() {
        return (
            <div>
                <h1 className='text-center text-info'>Click -count-State</h1> <hr />
                <h2>Current count value: {this.state.count}</h2>
                {/* <button onClick={() => this.setState({ count: this.state.count + 1 })} className='btn btn-secondary p-2'>Increment the counter by one </button> */}

                <button onClick={() => this.increment()} className='btn btn-secondary p-2'>Click to increment count by 1</button>
            </div>);
    }
}

export default Count;