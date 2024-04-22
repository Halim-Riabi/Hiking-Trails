package com.hikingtrails.backend.services.hiker;

import com.hikingtrails.backend.dto.AddTrailInDemandDto;
import com.hikingtrails.backend.services.hiker.demand.DemandService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hiker")
@RequiredArgsConstructor
public class DemandController {
    private final DemandService demandService;

    @PostMapping("/demand")
    public ResponseEntity<?> addTrailToDemand(@RequestBody AddTrailInDemandDto addTrailInDemandDto){
        return demandService.addTrailToDemand(addTrailInDemandDto);
    }
}
