package com.hikingtrails.backend.controller.admin;

import com.hikingtrails.backend.dto.TrailDto;
import com.hikingtrails.backend.services.admin.admintrail.AdminTrailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminTrailController {

    private final AdminTrailService adminTrailService;
/*Down here add Trail API*/
    @PostMapping("/trail")
    public ResponseEntity<TrailDto> addTrail(@ModelAttribute TrailDto trailDto) throws IOException{
        TrailDto trailDto1 = adminTrailService.addTrail(trailDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(trailDto1);
    }

    @GetMapping("/trails")
    public ResponseEntity<List<TrailDto>> getAllTrails(){
        List<TrailDto> trailDtos = adminTrailService.getAllTrails();
        return ResponseEntity.ok(trailDtos);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<List<TrailDto>> getAllTrailByName(@PathVariable String name){
        List<TrailDto> trailDtos = adminTrailService.getAllTrailByName(name);
        return ResponseEntity.ok(trailDtos);
    }
    @DeleteMapping("/trail/{trailId}")
    public ResponseEntity<Void> deleteTrail(@PathVariable Long trailId){
        boolean deleted = adminTrailService.deleteTrail(trailId);
        if(deleted){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
    /*FrequentlyAskedQuestion API*/

    @GetMapping("/trail/{trailId}")
    public ResponseEntity<TrailDto> getTrailById(@PathVariable Long trailId){
        TrailDto trailDto = adminTrailService.getTrailById(trailId);
        if(trailDto != null){
            return ResponseEntity.ok(trailDto);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/trail/{trailId}")
    public ResponseEntity<TrailDto> updateTrail(@PathVariable Long trailId, @ModelAttribute TrailDto trailDto) throws IOException {
        TrailDto updatedTrail = adminTrailService.updateTrail(trailId, trailDto);
        if(updatedTrail != null){
            return ResponseEntity.ok(updatedTrail);
        }else{
            return ResponseEntity.notFound().build();
        }
    }


}
