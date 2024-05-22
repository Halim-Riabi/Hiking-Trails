package com.hikingtrails.backend.dto;

import com.hikingtrails.backend.entity.Trail;
import com.hikingtrails.backend.entity.User;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ReviewDto {
    private Long id;

    private Long rating;

    private String description;
    private MultipartFile img;
    private byte[] returnedImg;

    private Long userId;

    private Long trailId;
    private String username;
}
