import React from 'react'
import { useState } from 'react'

function Usestate() {

    const [count, setCount] = useState(0);

    const increment = () => {
        console.log('you clicked');
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0)
            setCount(count - 1);
        else
            setCount(count)
    }

    return (
        <div className=' container card p-4 text-center bg-dark d-grid gap-4 mx-auto d-flex'>
            <h1 className='fs-1 text-white '> useState Hook</h1>
            <h1 className='fa fs-1 text-white'>{count}</h1>
            <button onClick={increment} className='btn btn-primary'> + </button>
            <button onClick={decrement} className='btn btn-danger'> -</button>
        </div>
    )
}

export default Usestate