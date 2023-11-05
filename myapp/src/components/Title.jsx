import React from 'react'


function Title() {
    const name = "Jay Prakash";
    const spacing = {
        letterSpacing: '0.3rem'
    };
    const date = new Date();
    const current_time = date;
    let greeting = "jay";
    let inlinestyle = {
        color: "white"
    };
    if (current_time.getHours() < 12) {
        greeting = "Good Morning";
        inlinestyle.color = "green";

    } else if (current_time.getHours() < 18) {
        greeting = "Good AfterNoon";
        inlinestyle.color = "pink";
    }
    else {
        greeting = "Good Night";
        inlinestyle.color = "blue";
    }
    return (
        <div>
            <p className='text-dark'>Hii , jay this line i got from (title.jsx)</p>
            <h1 className='fa fa-solid ' style={spacing}>Hello! {name}</h1>
            <h3 className="" style={inlinestyle}>{greeting}</h3>
        </div>);
}

export default Title;