
import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    // console.log("updated Just now");
  }

  return (
    <div className="container mt-5 p-4">
      <h1>Time:{time}</h1>
      {/* <button onClick={updateTime}>Get Time</button> */}
      <button className='buttoneffect btn btn-success ' onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;