package com.hikingtrails.backend.controller.admin;

import com.hikingtrails.backend.dto.BookDto;
import com.hikingtrails.backend.services.admin.adminBook.AdminBookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminBookController {

    private final AdminBookService adminBookService;
    @GetMapping("/placedBookings")
    public ResponseEntity<List<BookDto>> getAllPlacedBookings(){
        return ResponseEntity.ok(adminBookService.getAllPlacedBookings());
    }

    @GetMapping("/book/{bookId}/{status}")
    public ResponseEntity<?> changeBookStatus(@PathVariable Long bookId, @PathVariable String status){
        BookDto bookDto = adminBookService.changeBookStatus(bookId, status);
        if(bookDto == null)
            return new ResponseEntity<>("Something went wrong!", HttpStatus.BAD_REQUEST);
        return ResponseEntity.status(HttpStatus.OK).body(bookDto);
    }
}
