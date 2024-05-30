package com.hikingtrails.backend.controller.agency;

import com.hikingtrails.backend.dto.BookDto;
import com.hikingtrails.backend.services.admin.adminBook.AdminBookService;
import com.hikingtrails.backend.services.agency.agencyBook.AgencyBookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/agency")
@RequiredArgsConstructor
public class AgencyBookController {



    private final AgencyBookService agencyBookService;
    @GetMapping("/placedBookings")
    public ResponseEntity<List<BookDto>> getAllPlacedBookings(){
        return ResponseEntity.ok(agencyBookService.getAllPlacedBookings());
    }

    @GetMapping("/book/{bookId}/{status}")
    public ResponseEntity<?> changeBookStatus(@PathVariable Long bookId, @PathVariable String status){
        BookDto bookDto = agencyBookService.changeBookStatus(bookId, status);
        if(bookDto == null)
            return new ResponseEntity<>("Something went wrong!", HttpStatus.BAD_REQUEST);
        return ResponseEntity.status(HttpStatus.OK).body(bookDto);
    }
}
