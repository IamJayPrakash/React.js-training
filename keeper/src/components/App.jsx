import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Note from './Note';
// import notes from '../notes';
import CreateNote from './CreateNote';

// function createNotes(notes) {
//   return <Note title={notes.title} content={notes.content} />;

// }


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (

    <div>
      <Navbar />
      {/* {notes.map(createNotes())} */}
      <CreateNote onAdd={addNote} />
      {/* {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))} */}

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );

}
export default App;