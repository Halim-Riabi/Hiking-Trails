package com.hikingtrails.backend.services.agency.agencyBook;

import com.hikingtrails.backend.dto.BookDto;

import java.util.List;

public interface AgencyBookService {

    List<BookDto> getAllPlacedBookings();
    BookDto changeBookStatus(Long bookId, String status);
}
