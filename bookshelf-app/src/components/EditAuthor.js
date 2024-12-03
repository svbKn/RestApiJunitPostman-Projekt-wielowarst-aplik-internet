// src/components/EditAuthor.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorService from '../services/AuthorService';

function EditAuthor() {
    const [name, setName] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        AuthorService.getAuthor(id)
            .then((response) => {
                setName(response.data.name);
            })
            .catch((error) => {
                console.error('Error fetching author:', error);
            });
    }, [id]);

    const updateAuthor = (e) => {
        e.preventDefault();
        const author = { name };
        AuthorService.updateAuthor(id, author)
            .then(() => {
                navigate('/authors');
            })
            .catch((error) => {
                console.error('Error updating author:', error);
            });
    };

    return (
        <div className="container">
            <h2 className="mt-4">Edit Author</h2>
            <form onSubmit={updateAuthor}>
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
                <button className="btn btn-success">Update</button>
            </form>
        </div>
    );
}

export default EditAuthor;
