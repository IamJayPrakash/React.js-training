import React, { Component } from 'react';


class Learingpropsclass extends Component {
    render() {
        return (
            <div>

                <h1 className='text-center text-info'>
                    Hi this is a class components...
                </h1>
                <hr />
                <p> {this.props.name}</p>
                <p>{this.props.children}</p>

            </div>
        );
    }
}

export default Learingpropsclass;