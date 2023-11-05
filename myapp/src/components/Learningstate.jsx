import React, { Component } from 'react';

class Learningstate extends Component {

    constructor() {
        super();
        this.state = { message: "Click to subscribe..!" }
    }

    changeMessage() {
        this.setState({ message: "Thanks for subscribing." });
        document.getElementById("subscribe").innerHTML = 'Unsubscribe';
    }
    render() {
        return (
            <div>

                <h1 className='text-center  text-info'>
                    Hello state</h1>
                <hr />
                <p> {this.state.message}</p>

                <button onClick={() => this.changeMessage()} className='btn btn-danger' id='subscribe'>Suscribe</button>
            </div>);
    }
}

export default Learningstate;