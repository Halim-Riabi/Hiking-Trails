package com.hikingtrails.backend.services.hiker.review;

import com.hikingtrails.backend.dto.BookedTrailsResponseDto;
import com.hikingtrails.backend.dto.ReviewDto;

import java.io.IOException;

public interface ReviewService {

    BookedTrailsResponseDto getBookedTrailsDetailsByBookId(Long bookId);
    ReviewDto giveReview(ReviewDto reviewDto) throws IOException;
}
