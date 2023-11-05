import React from 'react'

function Event() {
    return (
        <div>
            <h1 className='text-center text-info'>Event Handling</h1>
            <hr />
            <div className='d-grid gap-3 mx-auto d-flex '>
                <button className='btn btn-success' onClick={() => { alert('You clicked the button!'); }}>Click</button>
                <button className='btn btn-primary' onClick={() => { alert('You clicked the button!'); }}>Click</button>
                <button className='btn btn-warning' onClick={() => { alert('You clicked the button!'); }}>Click</button>
            </div>
        </div>
    );
}
export default Event;