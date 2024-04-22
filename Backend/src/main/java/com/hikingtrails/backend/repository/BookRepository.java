package com.hikingtrails.backend.repository;

import com.hikingtrails.backend.entity.Book;
import com.hikingtrails.backend.enums.BookStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Book findByUserIdAndBookStatus(Long userId, BookStatus bookStatus);

}
