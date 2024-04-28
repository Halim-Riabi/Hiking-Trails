package com.hikingtrails.backend.services.visitor;

import com.hikingtrails.backend.dto.TrailDto;

import java.util.List;

public interface VisitorTrailService {

    List<TrailDto> searchTrailByTitle(String title);
    List<TrailDto> getAllTrails();
}
