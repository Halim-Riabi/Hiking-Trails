package com.hikingtrails.backend.controller.hiker;

import com.hikingtrails.backend.dto.AddTrailInDemandDto;
import com.hikingtrails.backend.dto.BookDto;
import com.hikingtrails.backend.dto.PlaceBookDto;
import com.hikingtrails.backend.services.hiker.demand.DemandService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hiker")
@RequiredArgsConstructor
public class DemandController {

    private final DemandService demandService;
    @PostMapping("/demand")
    public ResponseEntity<?> addTrailToDemand(@RequestBody AddTrailInDemandDto addTrailInDemandDto){
        return demandService.addTrailToDemand(addTrailInDemandDto);
    }

    @GetMapping("/demand/{userId}")
    public ResponseEntity<?> getDemandByUserId(@PathVariable Long userId){
        BookDto bookDto = demandService.getDemandByUserId(userId);
        return ResponseEntity.status(HttpStatus.OK).body(bookDto);
    }

    @PostMapping("/addition")
    public ResponseEntity<BookDto> increaseTrailNbparticipants(@RequestBody AddTrailInDemandDto addTrailInDemandDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(demandService.increaseTrailNbparticipants(addTrailInDemandDto));
    }

    @PostMapping("/deduction")
    public ResponseEntity<BookDto> decreaseTrailNbparticipants(@RequestBody AddTrailInDemandDto addTrailInDemandDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(demandService.decreaseTrailNbparticipants(addTrailInDemandDto));
    }
    @PostMapping("/placeBook")
    public ResponseEntity<BookDto> placeBook(@RequestBody PlaceBookDto placeBookDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(demandService.placeBook(placeBookDto));
    }

    @GetMapping("/myBookings/{userId}")
    public ResponseEntity<List<BookDto>> getMyPlacedBookings(@PathVariable Long userId){
        return ResponseEntity.ok(demandService.getMyPlacedBookings(userId));
    }
}
