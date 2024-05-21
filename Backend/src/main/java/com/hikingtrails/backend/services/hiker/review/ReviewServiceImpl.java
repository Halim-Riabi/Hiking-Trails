package com.hikingtrails.backend.services.hiker.review;

import com.hikingtrails.backend.dto.BookedTrailsResponseDto;
import com.hikingtrails.backend.dto.TrailDto;
import com.hikingtrails.backend.entity.Book;
import com.hikingtrails.backend.entity.DemandList;
import com.hikingtrails.backend.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{

    private final BookRepository bookRepository;

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
}
