package com.hikingtrails.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hikingtrails.backend.dto.TrailDto;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Data
@Table(name = "trail")
public class Trail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Long price;
    private double startLat;
    private double startLng;
    private double endLat;
    private double endLng;
    @Lob
    private String description;
    @Lob
    @Column(columnDefinition = "longblob")
    private byte[] img;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "category_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Category category;

    public TrailDto getDto(){
        TrailDto trailDto = new TrailDto();
        trailDto.setId(id);
        trailDto.setName(name);
        trailDto.setPrice(price);
        trailDto.setStartLat(startLat);
        trailDto.setStartLng(startLng);
        trailDto.setEndLat(endLat);
        trailDto.setEndLng(endLng);
        trailDto.setDescription(description);
        trailDto.setByteImg(img);
        trailDto.setCategoryId(category.getId());
        trailDto.setCategoryName(category.getName());
        return trailDto;
    }
}
