import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
// import Fab from '@mui/material/Fab';
// import Zoom from '@mui/material/Zoom';

function CreateNote(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [errorMessage, seterrorMessage] = useState("");
    const [completionMessage, setCompletionMessage] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    }

    function submitNote(event) {
        event.preventDefault();

        if (note.title.trim() === "" || note.content.trim() === "") {
            seterrorMessage("Error! Please provide input");
            setCompletionMessage("");
            return;
        }
        props.onAdd(note);
        seterrorMessage("");
        setCompletionMessage("Task Added!");


        setNote({
            title: "",
            content: ""
        });
        setTimeout(() => {
            seterrorMessage("");
            setCompletionMessage("");
        }, 2000);
    }

    function expand() {
        setExpanded(true);
    }
    return (
        <div>
            <form>
                <p className='text-center text-warning fa fa-pen fa-solid text-lg' style={{ letterSpacing: "0.1em", fontSize: "1.6em" }}>Create Note</p>

                {isExpanded && (<input name="title" className='' value={note.title} placeholder='Title' onChange={handleChange} rows="" />)}
                <textarea onClick={expand} name="content" className='text-primary' value={note.content} placeholder='Take a note' onChange={handleChange} rows={isExpanded ? 3 : 1} />
                {isExpanded && (<button onClick={submitNote} className='fas'><AddIcon /> </button>)}
            </form>
            <div className='text-center'>
                {errorMessage && <div className=" fa text-danger text-center  p-2" style={{ letterSpacing: "0.1em", fontSize: "1.6em", borderRadius: "20px" }}>  {errorMessage}</div>}
                {completionMessage && <div className="fa text-success text-center p-2" style={{ letterSpacing: "0.1em", fontSize: "1.6em" }}>{completionMessage}</div>}
            </div></div>
    )
}

export default CreateNote;
