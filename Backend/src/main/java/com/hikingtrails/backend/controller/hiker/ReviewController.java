package com.hikingtrails.backend.controller.hiker;

import com.hikingtrails.backend.dto.BookedTrailsResponseDto;
import com.hikingtrails.backend.dto.ReviewDto;
import com.hikingtrails.backend.services.hiker.review.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/hiker")
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping("/booked-trails/{bookId}")
    public ResponseEntity<BookedTrailsResponseDto> getBookedTrailsDetailsByBookId(@PathVariable Long bookId){
        return ResponseEntity.ok(reviewService.getBookedTrailsDetailsByBookId(bookId));
    }

    @PostMapping("/review")
    public ResponseEntity<?> giveReview(@ModelAttribute ReviewDto reviewDto) throws IOException {
        ReviewDto reviewDto1 = reviewService.giveReview(reviewDto);
        if(reviewDto1 == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong");
        return ResponseEntity.status(HttpStatus.CREATED).body(reviewDto1);
    }

}
