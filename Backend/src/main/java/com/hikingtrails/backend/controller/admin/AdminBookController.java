package com.hikingtrails.backend.controller.admin;

import com.hikingtrails.backend.dto.BookDto;
import com.hikingtrails.backend.services.admin.adminBook.AdminBookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
