package com.hikingtrails.backend.services.admin.admintrail;

import com.hikingtrails.backend.dto.TrailDto;

import java.io.IOException;
import java.util.List;

public interface AdminTrailService  {

    TrailDto addTrail(TrailDto trailDto) throws IOException;
    List<TrailDto> getAllTrails();
}
