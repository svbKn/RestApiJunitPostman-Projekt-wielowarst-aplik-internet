// src/services/AuthorService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/authors';

class AuthorService {
    createAuthor(author) {
        return axios.post(API_URL, author);
    }

    getAuthor(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    updateAuthor(id, author) {
        return axios.put(`${API_URL}/${id}`, author);
    }

    deleteAuthor(id) {
        return axios.delete(`${API_URL}/${id}`);
    }

    getAuthorWithBooks(id) {
        return axios.get(`${API_URL}/${id}/with-books`);
    }

    getAllAuthors() {
        return axios.get(API_URL);
    }
}

export default new AuthorService();
