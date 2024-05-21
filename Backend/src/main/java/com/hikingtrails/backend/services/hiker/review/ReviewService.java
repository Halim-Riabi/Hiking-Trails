package com.hikingtrails.backend.services.hiker.review;

import com.hikingtrails.backend.dto.BookedTrailsResponseDto;

public interface ReviewService {

    BookedTrailsResponseDto getBookedTrailsDetailsByBookId(Long bookId);
}
