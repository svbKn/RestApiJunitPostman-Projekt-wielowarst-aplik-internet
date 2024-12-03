// src/services/BookService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/books';

class BookService {
    createBook(book) {
        return axios.post(API_URL, book);
    }

    getBook(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    updateBook(id, book) {
        return axios.put(`${API_URL}/${id}`, book);
    }

    deleteBook(id) {
        return axios.delete(`${API_URL}/${id}`);
    }

    getBookWithAuthor(id) {
        return axios.get(`${API_URL}/${id}/with-author`);
    }

    getAllBooks() {
        return axios.get(API_URL);
    }
}

export default new BookService();
