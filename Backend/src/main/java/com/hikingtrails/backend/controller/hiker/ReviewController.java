package com.hikingtrails.backend.controller.hiker;

import com.hikingtrails.backend.dto.BookedTrailsResponseDto;
import com.hikingtrails.backend.services.hiker.review.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/hiker")
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping("/booked-trails/{bookId}")
    public ResponseEntity<BookedTrailsResponseDto> getBookedTrailsDetailsByBookId(@PathVariable Long bookId){
        return ResponseEntity.ok(reviewService.getBookedTrailsDetailsByBookId(bookId));
    }

}
