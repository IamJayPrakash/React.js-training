// import React, { useState } from "react";

// function App() {
//   const [headingText, setHeadingText] = useState("Hello");
//   const [isMousedOver, setMouseOver] = useState(false);

//   function handleClick() {
//     setHeadingText("Submitted");
//   }

//   function handleMouseOver() {
//     setMouseOver(true);
//   }

//   function handleMouseOut() {
//     setMouseOver(false);
//   }

//   return (
//     <div className="container">
//       <h1>{headingText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         style={{ backgroundColor: isMousedOver ? "black" : "white" }}
//         onClick={handleClick}
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
function App() {

  // const [headingText, setHeading] = useState("hello");
  const [buttonText, setButton] = useState("Submit");
  const [isMousedOver, setMouseOver] = useState(false);
  const [name, setName] = useState("user");
  const [headingText, setHeading] = useState("Hello ");


  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }


  // function clicked() {
  //   console.log("you clicked");
  //   setHeading('submitted');
  //   setButton('Submitted');

  // }

  function changeHeading(event) {
    setHeading("Welcome " + event.target.value);
    setButton('Submitted');
    event.preventDefault();
  }
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }


  return (
    <div className='container '>
      <h1>
        {headingText}
        {name}
      </h1>
      <input onChange={handleChange} className='' placeholder='Enter Your name'></input>
      {/* <button onClick={clicked } onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ backgroundColor: isMousedOver ? "black" : "white" }}>{buttonText}</button> */}
      <button onClick={changeHeading} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ backgroundColor: isMousedOver ? "black" : "white" }}>{buttonText}</button>

    </div>
  );
}

export default App;