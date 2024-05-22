package com.hikingtrails.backend.entity;

import com.hikingtrails.backend.dto.ReviewDto;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Data
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long rating;

    @Lob
    private String description;
    @Lob
    @Column(columnDefinition = "longblob")
    private byte[] img;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "trail_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Trail trail;

    public ReviewDto getDto(){
        ReviewDto reviewDto = new ReviewDto();

        reviewDto.setId(id);
        reviewDto.setRating(rating);
        reviewDto.setDescription(description);
        reviewDto.setReturnedImg(img);
        reviewDto.setTrailId(trail.getId());
        reviewDto.setUserId(user.getId());
        reviewDto.setUsername(user.getName());

        return reviewDto;
    }
}
