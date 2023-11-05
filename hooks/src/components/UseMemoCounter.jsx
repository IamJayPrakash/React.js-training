import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

function UseMemoCounter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const increment = () => {
        setCounterOne(counterOne + 1);
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }
    const decrement = () => {
        if (counterTwo > 0)
            setCounterTwo(counterTwo - 1);
    }

    const isEven = () => {

        return counterOne % 2 === 0;
    }

    const isEvenTwo = useMemo(() => {

        // i am adding a delay so that it take some time to reflect over the UI
        let i = 0;
        while (i < 2000000000) i++

        return counterTwo % 2 === 0;
    }, [counterTwo])

    return (
        <div className=' container card p-4 text-center bg-dark d-grid gap-4 mx-auto d-flex'>
            <h1 className='fs-1 text-white '> useMemo Hook</h1>
            <h1 className='fa fs-1 text-white'>{counterOne}</h1>
            <h1 className='fa fs-1 text-white'>{isEven() ? 'Even' : 'odd'}</h1>
            <button onClick={increment} className='btn btn-primary'> counterOne </button>

            <h1 className='fa fs-1 text-white'>{counterTwo}</h1>
            <h1 className='fa fs-1 text-white'>{isEvenTwo ? 'Even' : 'odd'}</h1>
            <button onClick={decrement} className='btn btn-danger'>counterTwo -</button>
            <button onClick={incrementTwo} className='btn btn-primary'> counterTwo + </button>
        </div>
    )
}

export default UseMemoCounter