// src/components/AddAuthor.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthorService from '../services/AuthorService';

function AddAuthor() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const saveAuthor = (e) => {
        e.preventDefault();
        const author = { name };
        AuthorService.createAuthor(author)
            .then(() => {
                navigate('/authors');
            })
            .catch((error) => {
                console.error('Error creating author:', error);
            });
    };

    return (
        <div className="container">
            <h2 className="mt-4">Add Author</h2>
            <form onSubmit={saveAuthor}>
                <div className="mb-3">
                    <label className="form-label">Author Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter author name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button className="btn btn-success">Save</button>
            </form>
        </div>
    );
}

export default AddAuthor;
