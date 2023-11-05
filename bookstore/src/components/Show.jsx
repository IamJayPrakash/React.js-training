import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Book from './Book';
import Footer from './Footer';
import axios from 'axios';


function Show() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('React');

    useEffect(() => {
        fetchBooks(searchTerm);
       document.title=`Search(${searchTerm})`;
    }, [searchTerm]);

    const fetchBooks = async (query, startIndex = 0) => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=20&key=AIzaSyAcO8_TC7lXMQHLDNWbjWu3X66_pjf5C-8`
            );
            setBooks(response.data.items);
            console.log(response.data.items);

            // const newBooks = response.data.items;
            // setBooks((prevBooks) => [...prevBooks, ...newBooks]);
        } catch (error) {
            console.log(error);
            setBooks([]);
        }
    };
    return (
        <>
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className='container mx-auto d-flex flex-wrap p-3 '>
                {books && books.map((book) => (
                    <Book
                        key={book.id}
                        name={book.volumeInfo.title}
                        author={book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}
                        // rating={book.volumeInfo.averageRating || 'N/A'}
                        description={book.volumeInfo.description || 'No description available'}
                        imageUrl={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'No Image available'}
                        previewLink={book.volumeInfo.previewLink}
                    />
                ))}
            </div>
            <Footer />

            
        </>
    );
}

export default Show;