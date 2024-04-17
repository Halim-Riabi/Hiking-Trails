package com.hikingtrails.backend.controller.hiker;

import com.hikingtrails.backend.dto.TrailDto;
import com.hikingtrails.backend.services.hiker.HikerTrailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/hiker")
@RequiredArgsConstructor
public class HikerTrailController {

    private final HikerTrailService hikerTrailService;

    @GetMapping("/trails")
    public ResponseEntity<List<TrailDto>> getAllTrails(){
        List<TrailDto> trailDtos = hikerTrailService.getAllTrails();
        return ResponseEntity.ok(trailDtos);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<List<TrailDto>> getAllTrailByName(@PathVariable String name){
        List<TrailDto> trailDtos = hikerTrailService.searchTrailByTitle(name);
        return ResponseEntity.ok(trailDtos);
    }
}
