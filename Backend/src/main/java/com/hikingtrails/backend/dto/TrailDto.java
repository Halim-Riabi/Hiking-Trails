package com.hikingtrails.backend.dto;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class TrailDto {

    private Long id;
    private String name;
    private Long price;
    private String startLat;
    private String startLng;
    private String endLat;
    private String endLng;
    private String description;
    private byte[] byteImg;
    private Long categoryId;
    private String categoryName;
    /*we want to cut the image in multipart from the frontend and we will return the image in the byte array*/
    private MultipartFile img;
    private Long NbParticipants;
}
