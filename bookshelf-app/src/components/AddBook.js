// src/components/AddBook.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';
import AuthorService from '../services/AuthorService';

function AddBook() {
    // State variables
    const [title, setTitle] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    // Fetch authors when the component mounts
    useEffect(() => {
        AuthorService.getAllAuthors()
            .then((response) => {
                setAuthors(response.data);
            })
            .catch((error) => {
                console.error('Error fetching authors:', error);
            });
    }, []);

    const saveBook = (e) => {
        e.preventDefault();
        const book = {
            title,
            author: { id: authorId },
        };

        BookService.createBook(book)
            .then(() => {
                navigate('/books');
            })
            .catch((error) => {
                console.error('Error creating book:', error);
            });
    };

    return (
        <div className="container">
            <h2 className="mt-4">Add Book</h2>
            <form onSubmit={saveBook}>
                <div className="mb-3">
                    <label className="form-label">Book Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter book title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Author:</label>
                    <select
                        className="form-select"
                        value={authorId}
                        onChange={(e) => setAuthorId(e.target.value)}
                        required
                    >
                        <option value="">Select an author</option>
                        {authors.map((author) => (
                            <option key={author.id} value={author.id}>
                                {author.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="btn btn-success">Save</button>
            </form>
        </div>
    );
}

export default AddBook;
