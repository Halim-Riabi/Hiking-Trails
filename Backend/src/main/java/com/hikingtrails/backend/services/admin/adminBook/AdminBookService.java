package com.hikingtrails.backend.services.admin.adminBook;

import com.hikingtrails.backend.dto.BookDto;

import java.util.List;

public interface AdminBookService {

    List<BookDto> getAllPlacedBookings();
    BookDto changeBookStatus(Long bookId, String status);
}
