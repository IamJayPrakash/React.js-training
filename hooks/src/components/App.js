import React from 'react';
import Usestate from './Usestate';
import Useeffect from './Useeffect';
import CounterCompo from './CounterCompo';
import DataFetching from './DataFetching';
import UseMemoCounter from './UseMemoCounter';
import FocusInput from './FocusInput';


function App() {
  return (
    <div className="container-fluid">

      <Usestate />
      <br />
      <Useeffect />

      <br />
      <CounterCompo />
      <br />
      <DataFetching />
      <br />
      <UseMemoCounter />
      <br />
      <FocusInput />
    </div>
  );
}

export default App;
