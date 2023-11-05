import React from 'react';
import Input from './Input';

export default function Form(props) {
    return (
        <div className=' form container card mx-auto bg-dark p-3 m-5 d-grid flex-wrap d-flex justify-content-center border-light' style={{ maxWidth: "18em" }}>
            <Input type='text' placeholder='Email ID or Username' /><br />
            <Input type='password' placeholder='Password' /><br />
            {props.isRegistered === false && (
                <div><Input type='password' placeholder='Confirm Password' /><br /></div>)
            }
            <button type='submit ' className='btn btn-secondary border-light'>
                {props.isRegistered ? "Login" : " Register "}
            </button>
        </div>
    )
}
