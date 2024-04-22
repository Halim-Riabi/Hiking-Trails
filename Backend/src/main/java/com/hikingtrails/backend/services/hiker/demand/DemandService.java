package com.hikingtrails.backend.services.hiker.demand;

import com.hikingtrails.backend.dto.AddTrailInDemandDto;
import org.springframework.http.ResponseEntity;

public interface DemandService {

    ResponseEntity<?> addTrailToDemand(AddTrailInDemandDto addTrailInDemandDto);
}
