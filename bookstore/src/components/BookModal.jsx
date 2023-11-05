import React, { useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function BookModal({ book, isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book Modal"
      className='m-4'  style={{height:100}}>
      <div className=' container p-5 bg-dark  text-white'>
        <div className='d-flex mx-auto'>

          <img src={book.imageUrl} alt="not available" className="book-img mt-5" style={{ width: '400px', height: '400px' }} />
          <div><h2 className='m-2 mt-5' style={{ fontFamily: 'lobster' }}>{book.name} </h2>
            <p className='m-2'>Author: {book.author}</p>
            {/* <p className='m-2'>Rating: {book.averageRating}</p> */}
            {/* <p className='m-2'>Price: {book.price}</p> */}


            <h6 className='m-2'>Description: </h6><p className='m-2'>{book.description}</p></div>  </div>
        <div className='d-grid gap-2 mx-auto d-flex text-center justify-content-center' >
          <button onClick={onRequestClose} className='btn float-shadow btn-info '>Close</button>
          <button onClick={() => window.open(book.previewLink)} class="btn btn-primary float-shadow">Read Now</button>
        </div>
      </div>
    </Modal>
  );
}

export default BookModal;