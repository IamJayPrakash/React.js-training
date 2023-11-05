import React from 'react';
import Form from './Form';
import Input from './Input';

var LoggedIn = false;
var userRegistered = true;
function App() {
  return (
    <div className=" container p-4 mt-5">
      {/* {LoggedIn ? <h1 className='text-center text-light m-5 p-3 ' style={{ fontFamily: "lobster" }}>Hello, User</h1> : <div><h1 className='text-center text-white' style={{ fontFamily: "lobster" }}>Welcome To Login</h1> <Form /></div>} */}
      <Form isRegistered={userRegistered} />

    </div>
  );
}

export default App;
