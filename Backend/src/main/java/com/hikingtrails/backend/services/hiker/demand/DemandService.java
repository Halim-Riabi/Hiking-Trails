package com.hikingtrails.backend.services.hiker.demand;

import com.hikingtrails.backend.dto.AddTrailInDemandDto;
import com.hikingtrails.backend.dto.BookDto;
import org.springframework.http.ResponseEntity;

public interface DemandService {

    ResponseEntity<?> addTrailToDemand(AddTrailInDemandDto addTrailInDemandDto);
    BookDto getDemandByUserId(Long userId);
}
