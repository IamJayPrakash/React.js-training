import React from 'react'
import Calculate from './calculate';
import Result from './result';


function App() {
  return (
    <div className='heading card '>
      <h1 className='text-info text-center p-1 m-2'>
        <i className='fa fa-calculator'></i>  Calculator</h1>
      <hr />
      <Calculate />
      <Result />

    </div>);
}
export default App;
