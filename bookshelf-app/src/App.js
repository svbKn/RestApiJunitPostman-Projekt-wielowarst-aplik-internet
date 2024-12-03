// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import BookList from './components/BookList';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';
import AddBook from './components/AddBook';
import ViewAuthor from './components/ViewAuthor';
import ViewBook from './components/ViewBook';
// Import other components as needed

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthorList />} />
                <Route path="/authors" element={<AuthorList />} />
                <Route path="/authors/new" element={<AddAuthor />} />
                <Route path="/authors/edit/:id" element={<EditAuthor />} />
                <Route path="/books" element={<BookList />} />
                <Route path="/books/new" element={<AddBook />} />
                <Route path="/authors/:id" element={<ViewAuthor />} />
                <Route path="/books/:id" element={<ViewBook />} />
                {/* Add routes for books */}
            </Routes>
        </Router>
    );
}

export default App;
