import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function FocusInput() {
    const Inputref = useRef(null)
    useEffect(() => {
        Inputref.current.focus();//focus on input element
    }, [])
    return (
        <div className=' container card p-4 text-center bg-light d-grid gap-4 mx-auto d-flex'>
            <h1 className='fs-1 text-info '> Focus Input box on page load</h1>
            <br />
            <input ref={Inputref} type='text' />
        </div>
    )
}

export default FocusInput