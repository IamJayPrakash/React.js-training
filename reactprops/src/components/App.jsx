import React from 'react';
import Contact from './Contact';
import contacts from '../contacts';

function App() {
  return (
    <div>
      <h1>Contacts</h1>
      <hr />
      <div className='mx-auto justify-content-center d-flex flex-wrap gap-4' >
        {contacts.map(contactItem => (
          <Contact
            key={contactItem.key}
            name={contactItem.name}
            imgURL={contactItem.imgURL}
            email={contactItem.email}
            phone={contactItem.phone} />
        ))}
      </div>
    </div>
  );
}

export default App;