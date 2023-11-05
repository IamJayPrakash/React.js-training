import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Useeffect() {
    const [count, setCount] = useState(0);

    const increment = () => {
        console.log('you clicked see useeffect on NavBar');
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0)
            setCount(count - 1);
        else
            setCount(count)
    }

    useEffect(() => {
        document.title = `count(${count})`}, [count]
    )

    return (
        <div className=' container card p-4 text-center bg-dark d-grid gap-4 mx-auto d-flex'>
            <h1 className='fs-1 text-white '> useEffect Hook</h1>
            <h1 className='fa fs-1 text-white'>{count}</h1>
            <button onClick={increment} className='btn btn-primary'> + </button>
            <button onClick={decrement} className='btn btn-danger'> -</button>
        </div>
    )
}

export default Useeffect