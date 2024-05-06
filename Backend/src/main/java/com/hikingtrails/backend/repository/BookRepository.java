package com.hikingtrails.backend.repository;

import com.hikingtrails.backend.entity.Book;
import com.hikingtrails.backend.enums.BookStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Book findByUserIdAndBookStatus(Long userId, BookStatus bookStatus);
    List<Book> findAllByBookStatusIn(List<BookStatus> bookStatusList);
}
