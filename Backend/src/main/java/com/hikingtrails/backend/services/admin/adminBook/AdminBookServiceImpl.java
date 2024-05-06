package com.hikingtrails.backend.services.admin.adminBook;

import com.hikingtrails.backend.dto.BookDto;
import com.hikingtrails.backend.entity.Book;
import com.hikingtrails.backend.enums.BookStatus;
import com.hikingtrails.backend.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminBookServiceImpl implements AdminBookService{

    private final BookRepository bookRepository;

    public List<BookDto> getAllPlacedBookings(){
        List<Book> bookList = bookRepository.
                findAllByBookStatusIn(List.of(BookStatus.Placed, BookStatus.Accepted, BookStatus.Refused));
        return bookList.stream().map(Book::getBookDto).collect(Collectors.toList());
    }
}
