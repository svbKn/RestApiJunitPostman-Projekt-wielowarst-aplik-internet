// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookService from '../services/BookService';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        BookService.getAllBooks()
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
            });
    }, []);

    const deleteBook = (id) => {
        BookService.deleteBook(id)
            .then(() => {
                setBooks(books.filter((book) => book.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting book:', error);
            });
    };

    return (
        <div className="container">
            <h2 className="mt-4">Books</h2>
            <Link to="/authors" className="btn btn-primary mb-2">
                authors
            </Link>
            <Link to="/books/new" className="btn btn-primary mb-2">
                Add Book
            </Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Title</th>

                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>

                        <td>
                            <Link to={`/books/${book.id}`} className="btn btn-info btn-sm me-2">
                                View
                            </Link>
                            <Link to={`/books/edit/${book.id}`} className="btn btn-warning btn-sm me-2">
                                Edit
                            </Link>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteBook(book.id)}
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

export default BookList;
