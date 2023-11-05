import React from 'react';
import calculate from './calculate';

function input() {

    function getInput2() {

    }

    function getInput1() {

    }


    return (
        <div className='d-flex d-grid gap-2 p-2 mx-auto'>
            <input type="number"
                id="input1"
                placeholder='Enter value of a'
                name='a' className='form-control'
                defaultValue={0}
                onChange={getInput1}
            />
            <br />
            <input type="number" id="input2" placeholder='Enter value of b' name='b' className='form-control' defaultValue={0} onChange={getInput2} /><br />
            <button onClick={calculate} className='btn btn-info fa fa-solid btn-sm'> calculate</button><br />
        </div>);
}

export default input;