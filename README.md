# Project Projektowanie wielowarstwowych aplikacji internetowych
----
   ## Spring Boot & React 
                            Author Endpoints
                            Create Author
                            
                            
                            POST /api/authors
                            Content-Type: application/json
                            
                            {
                                "name": "J.K. Rowling"
                            }
                            Get Author Without Books
                            
                            
                            GET /api/authors/{id}
                            Get Author With Books
                            
                            
                            GET /api/authors/{id}/with-books
                            Update Author
                            
                            
                            PUT /api/authors/{id}
                            Content-Type: application/json
                            
                            {
                                "name": "Joanne Rowling"
                            }
                            Delete Author
                            
                            
                            DELETE /api/authors/{id}
                            Book Endpoints
                            Create Book
                            
                            
                            POST /api/books
                            Content-Type: application/json
                            
                            {
                                "title": "Harry Potter and the Sorcerer's Stone",
                                "author": {
                                    "id": 1
                                }
                            }
                            Get Book Without Author
                            
                            
                            GET /api/books/{id}
                            Get Book With Author
                            
                            
                            GET /api/books/{id}/with-author
                            Update Book
                            
                            
                            PUT /api/books/{id}
                            Content-Type: application/json
                            
                            {
                                "title": "Harry Potter and the Philosopher's Stone",
                                "author": {
                                    "id": 1
                                }
                            }
                            Delete Book
                            
                            
                            DELETE /api/books/{id}
