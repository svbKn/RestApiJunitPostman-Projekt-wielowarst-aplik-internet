// src/components/AuthorList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthorService from '../services/AuthorService';

function AuthorList() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        AuthorService.getAllAuthors()
            .then((response) => {
                setAuthors(response.data);
            })
            .catch((error) => {
                console.error('Error fetching authors:', error);
            });
    }, []);

    const deleteAuthor = (id) => {
        AuthorService.deleteAuthor(id)
            .then(() => {
                setAuthors(authors.filter((author) => author.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting author:', error);
            });
    };

    return (
        <div className="container">
            <h2 className="mt-4">Authors</h2>
            <Link to="/books" className="btn btn-primary mb-2">
                books
            </Link>
            <Link to="/authors/new" className="btn btn-primary mb-2">
                Add Author
            </Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {authors.map((author) => (
                    <tr key={author.id}>
                        <td>{author.name}</td>
                        <td>
                            <Link to={`/authors/${author.id}`} className="btn btn-info btn-sm me-2">
                                View
                            </Link>
                            <Link to={`/authors/edit/${author.id}`} className="btn btn-warning btn-sm me-2">
                                Edit
                            </Link>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteAuthor(author.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AuthorList;
