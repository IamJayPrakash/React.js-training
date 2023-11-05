import React, { useState } from 'react';

import BookModal from './BookModal';

function Book(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const truncateDescription = (description, maxWords) => {
        if (!description) {
            return 'No description available';
        }
        const words = description.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return description;
    };

    const openPreviewLink = () => {
        if (props.previewLink) {
            window.open(props.previewLink, '_blank');
        }
    };

    return (
        <>
            <div className="books m-3 serviceBox">
                {/* <img src={props.imageUrl} alt="" className="book-img" /> */}
                {/* <img src={props.imageUrl || 'placeholder-image-url'} alt="" className="book-img" /> */}
                {props.imageUrl && (
                    <img src={props.imageUrl} alt="" className="book-img" />
                )}

                <div className="descp">
                    <h2 className="book-name">{props.name}</h2>
                    <h3 className="author">by {props.author}</h3>
                    {/* <h3 className="rating">Rating: {props.averageRating}</h3> */}
                    {/* <p className="info">{props.description}</p> */}
                    <p className="info"> Description: {truncateDescription(props.description, 10)}</p>
                    {/* <button type="submit" onClick={props.onSeeBook}>See the Book</button> */}
                    <div className=''>
                        <a href='#top'><button type="submit" onClick={openModal} className='btn btn-light btn-lg float-shadow '>See Book Info</button></a>
                        <button type="button" onClick={openPreviewLink} className='btn btn-light float-shadow'>Preview Book</button>
                    </div>
                </div>
            </div>
            <BookModal book={props} isOpen={isModalOpen} onRequestClose={closeModal} />
        </>
    );
}

export default Book;