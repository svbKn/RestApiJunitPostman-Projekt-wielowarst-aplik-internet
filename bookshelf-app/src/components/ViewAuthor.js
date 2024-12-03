// src/components/ViewAuthor.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthorService from '../services/AuthorService';
import { Link } from 'react-router-dom';

function ViewAuthor() {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        AuthorService.getAuthorWithBooks(id)
            .then((response) => {
                setAuthor(response.data);
            })
            .catch((error) => {
                console.error('Error fetching author:', error);
                setErrorMessage('Error fetching author details.');
            });
    }, [id]);

    if (errorMessage) {
        return (
            <div className="container">
                <h2 className="mt-4">Author Details</h2>
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
                <Link to="/authors" className="btn btn-primary">
                    Back to Authors
                </Link>
            </div>
        );
    }

    if (!author) {
        return (
            <div className="container">
                <h2 className="mt-4">Author Details</h2>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="mt-4">Author Details</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{author.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">ID: {author.id}</h6>
                    <h5 className="mt-4">Books:</h5>
                    {author.books && author.books.length > 0 ? (
                        <ul className="list-group">
                            {author.books.map((book) => (
                                <li key={book.id} className="list-group-item">
                                    {book.title}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No books found for this author.</p>
                    )}
                </div>
            </div>
            <Link to="/authors" className="btn btn-primary mt-3">
                Back to Authors
            </Link>
        </div>
    );
}

export default ViewAuthor;
