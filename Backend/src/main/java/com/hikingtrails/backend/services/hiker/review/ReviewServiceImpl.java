package com.hikingtrails.backend.services.hiker.review;

import com.hikingtrails.backend.dto.BookedTrailsResponseDto;
import com.hikingtrails.backend.dto.ReviewDto;
import com.hikingtrails.backend.dto.TrailDto;
import com.hikingtrails.backend.entity.*;
import com.hikingtrails.backend.repository.BookRepository;
import com.hikingtrails.backend.repository.ReviewRepository;
import com.hikingtrails.backend.repository.TrailRepository;
import com.hikingtrails.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{

    private final BookRepository bookRepository;
    private final TrailRepository trailRepository;
    private final UserRepository userRepository;
    private final ReviewRepository reviewRepository;

    public BookedTrailsResponseDto getBookedTrailsDetailsByBookId(Long bookId){
        Optional<Book> optionalBook = bookRepository.findById(bookId);
        BookedTrailsResponseDto bookedTrailsResponseDto = new BookedTrailsResponseDto();
        if(optionalBook.isPresent()){
            bookedTrailsResponseDto.setBookAmount(optionalBook.get().getAmount());

            List<TrailDto> trailDtoList = new ArrayList<>();
            for (DemandList demandList: optionalBook.get().getDemandList()){
                TrailDto trailDto = new TrailDto();

                trailDto.setId(demandList.getTrail().getId());
                trailDto.setName(demandList.getTrail().getName());
                trailDto.setPrice(demandList.getPrice());
                trailDto.setNbParticipants(demandList.getNbParticipants());

                trailDto.setByteImg(demandList.getTrail().getImg());

                trailDtoList.add(trailDto);
            }
            bookedTrailsResponseDto.setTrailDtoList(trailDtoList);
        }
        return bookedTrailsResponseDto;
    }

    public ReviewDto giveReview(ReviewDto reviewDto) throws IOException {
        Optional<Trail> optionalTrail = trailRepository.findById(reviewDto.getTrailId());
        Optional<User> optionalUser = userRepository.findById(reviewDto.getUserId());

        if(optionalTrail.isPresent() && optionalUser.isPresent()){
            Review review = new Review();

            review.setRating(reviewDto.getRating());
            review.setDescription(reviewDto.getDescription());
            review.setUser(optionalUser.get());
            review.setTrail(optionalTrail.get());
            review.setImg(reviewDto.getImg().getBytes());

            return reviewRepository.save(review).getDto();

        }
        return null;
    }
}
