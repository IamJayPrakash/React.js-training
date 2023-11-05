import React from 'react';
const Learningpropsfun = (props) => {
    const { name, heroName } = props
    return (
        <div>
            <h1 className='text-center  text-info'>Learning props in function
                <br /></h1>
            <hr />
            {props.children}
            {/* <p> {props.name}</p> */}
            <p> {name}</p>
            <p>{heroName}</p>
        </div>
    );
}

export default Learningpropsfun;