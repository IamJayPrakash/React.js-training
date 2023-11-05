import React from 'react';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../actions/index';

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className='container  card bg-dark text-light  p-5 mt-4'>
      <h1 className='fa fa-regular text-center  p-3' style={{ letterSpacing: '1.5px', fontFamily: 'lobster' }}>Counter Increment / decrement using redux</h1>

      <br />
      <div className='d-flex text-light   text-center mx-auto' >
        <button onClick={() => dispatch(decNumber(2))} className='btn btn-outline-danger fa fa-regular' style={{ letterSpacing: '1.5px', fontFamily: 'cursive' }}>Decrease</button>
        <input type='number' value={myState} className='fa form-control m-4 p-3' style={{ letterSpacing: '1.5px', fontFamily: 'lobster', border: 'none', fontSize: '3rem' }} />
        <button onClick={() => dispatch(incNumber(5))} className='btn btn-outline-info  fa fa-regular' style={{ letterSpacing: '1.5px', fontFamily: 'cursive' }}>Increase</button>
      </div>
    </div>
  );
}

export default App;
