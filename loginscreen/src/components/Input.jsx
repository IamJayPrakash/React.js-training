import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input type={props.type} className='form-control border-light' placeholder={props.placeholder}></input>
        </div>
    )
}
