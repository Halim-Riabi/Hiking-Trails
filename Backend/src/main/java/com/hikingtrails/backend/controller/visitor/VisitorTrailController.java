package com.hikingtrails.backend.controller.visitor;

import com.hikingtrails.backend.dto.TrailDto;
import com.hikingtrails.backend.services.hiker.HikerTrailService;
import com.hikingtrails.backend.services.visitor.VisitorTrailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/visitor")
@RequiredArgsConstructor
public class VisitorTrailController {


    private final VisitorTrailService visitorTrailService;

    @GetMapping("/trails")
    public ResponseEntity<List<TrailDto>> getAllTrails(){
        List<TrailDto> trailDtos = visitorTrailService.getAllTrails();
        return ResponseEntity.ok(trailDtos);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<List<TrailDto>> getAllTrailByName(@PathVariable String name){
        List<TrailDto> trailDtos = visitorTrailService.searchTrailByTitle(name);
        return ResponseEntity.ok(trailDtos);
    }
}
