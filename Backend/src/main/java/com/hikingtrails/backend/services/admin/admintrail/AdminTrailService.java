package com.hikingtrails.backend.services.admin.admintrail;

import com.hikingtrails.backend.dto.TrailDto;

import java.io.IOException;
import java.util.List;

public interface AdminTrailService  {

    TrailDto addTrail(TrailDto trailDto) throws IOException;
    List<TrailDto> getAllTrails();

    List<TrailDto> getAllTrailByName(String name);

    boolean deleteTrail(Long id);
    TrailDto getTrailById(Long trailId);
    TrailDto updateTrail(Long trailId, TrailDto trailDto) throws IOException;
}
