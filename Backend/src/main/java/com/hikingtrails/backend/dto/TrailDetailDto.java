package com.hikingtrails.backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class TrailDetailDto {

    private TrailDto trailDto;

    private List<ReviewDto> reviewDtoList;

    /*FAQ should be here*/
}
