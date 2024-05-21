package com.hikingtrails.backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class BookedTrailsResponseDto {

    private List<TrailDto> trailDtoList;
    private Long bookAmount;
}
