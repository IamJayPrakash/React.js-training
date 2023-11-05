import React from 'react'
import Input from './input'
let a = 5;
let b = 5;
function calculate() {
    document.addEventListener('DOMContentLoaded', function () {
        a = document.getElementById('input1').value;
        b = document.getElementById('input2').value;
    });
    return (
        <div className='p-3'>
            <Input />

            <p>a={a} , b={b}</p>
        </div>
    );
}

function add() {
    return (
        <p>the sum of a+b is :  {a + b}</p>
    );
}
function subtract() {
    return (
        <p>the subtraction of a-b is : {a - b}</p>
    );
}
function multiply() {
    return (
        <p>the multiplication of a+b is : {a * b}</p>
    );
}
function divide() {
    return (
        <p>the division of a+b is : {a / b}</p>
    );
}
export default calculate;
export { add, subtract, multiply, divide };