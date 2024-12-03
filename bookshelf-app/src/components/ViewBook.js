// src/components/ViewBook.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BookService from '../services/BookService';

function ViewBook() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        BookService.getBookWithAuthor(id)
            .then((response) => {
                setBook(response.data);
            })
            .catch((error) => {
                console.error('Error fetching book:', error);
                setErrorMessage('Error fetching book details.');
            });
    }, [id]);

    if (errorMessage) {
        return (
            <div className="container">
                <h2 className="mt-4">Book Details</h2>
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
                <Link to="/books" className="btn btn-primary">
                    Back to Books
                </Link>
            </div>
        );
    }

    if (!book) {
        return (
            <div className="container">
                <h2 className="mt-4">Book Details</h2>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="mt-4">Book Details</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">ID: {book.id}</h6>
                    <h5 className="mt-4">Author:</h5>
                    {book.author ? (
                        <div>
                            <p>Name: {book.author.name}</p>
                            <Link to={`/authors/${book.author.id}`} className="btn btn-info btn-sm">
                                View Author
                            </Link>
                        </div>
                    ) : (
                        <p>No author information available.</p>
                    )}
                </div>
            </div>
            <Link to="/books" className="btn btn-primary mt-3">
                Back to Books
            </Link>
        </div>
    );
}

export default ViewBook;
