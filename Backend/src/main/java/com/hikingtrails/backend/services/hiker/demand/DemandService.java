package com.hikingtrails.backend.services.hiker.demand;

import com.hikingtrails.backend.dto.AddTrailInDemandDto;
import com.hikingtrails.backend.dto.BookDto;
import com.hikingtrails.backend.dto.PlaceBookDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface DemandService {

    ResponseEntity<?> addTrailToDemand(AddTrailInDemandDto addTrailInDemandDto);
    BookDto getDemandByUserId(Long userId);
    BookDto increaseTrailNbparticipants(AddTrailInDemandDto addTrailInDemandDto);

    BookDto decreaseTrailNbparticipants(AddTrailInDemandDto addTrailInDemandDto);
    BookDto placeBook(PlaceBookDto placeBookDto);
    List<BookDto> getMyPlacedBookings(Long userId);
}
