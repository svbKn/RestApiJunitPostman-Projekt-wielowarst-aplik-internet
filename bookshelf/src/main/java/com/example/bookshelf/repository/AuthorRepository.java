package com.example.bookshelf.repository;

import com.example.bookshelf.entity.Author;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
//    @Query("SELECT a FROM Author a JOIN FETCH a.books WHERE a.id = :id")
//    Optional<Author> findAuthorWithBooksById(@Param("id") Long id);

    @EntityGraph(attributePaths = {"books"})
    Optional<Author> findAuthorWithBooksById(Long id);

}
