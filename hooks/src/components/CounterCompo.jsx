import React, { Component } from 'react'

export default class CounterCompo extends Component {



    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState(
            { count: this.state.count + 5 }
        )

    }
    render() {


        return (
            <div className=' container card p-4 text-center bg-dark d-grid gap-4 mx-auto d-flex'>
                <h1 className='fs-1 text-white '> Component lifecycle (mounting,unmounting)</h1>
                <br />
                <h1 className='text-light p-3'> count (increasing after every 5sec): {this.state.count}</h1>
            </div>
        )
    }
}
