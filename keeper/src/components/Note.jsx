import React from 'react';
function Note(props) {


    function handleClick() {
        props.onDelete(props.id);
    }



    return (
        <div className='note p-4 m-4'>
            {/* <p>{props.key}</p> */}
            <h1 className='text-primary fs-2'>{props.title}</h1>
            <p className='text-info'>{props.content}</p>
            <button onClick={handleClick} className='fa fa-trash text-danger img-thumbnail'></button>

        </div>
    );
}

export default Note;