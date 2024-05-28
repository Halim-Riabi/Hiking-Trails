package com.hikingtrails.backend.services.hiker;

import com.hikingtrails.backend.dto.TrailDetailDto;
import com.hikingtrails.backend.dto.TrailDto;

import java.util.List;

public interface HikerTrailService {

    //down here by Name or Title
    List<TrailDto> searchTrailByTitle(String title);
    List<TrailDto> getAllTrails();

    TrailDetailDto getTrailDetailById(Long trailId);
}
