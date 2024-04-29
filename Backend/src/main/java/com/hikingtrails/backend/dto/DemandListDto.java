package com.hikingtrails.backend.dto;

import lombok.Data;

@Data
public class DemandListDto {

    private Long id;
    private Long price;
    private Long nbParticipants;
    private Long quantity;
    private Long trailId;
    private Long bookId;
    private String trailName;
    private byte[] returnedImg;
    private Long userId;
}
