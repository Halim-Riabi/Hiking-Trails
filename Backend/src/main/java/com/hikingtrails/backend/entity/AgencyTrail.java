package com.hikingtrails.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hikingtrails.backend.dto.AgencyTrailDto;
import com.hikingtrails.backend.dto.TrailDto;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Data
@Table(name = "agencytrail")
public class AgencyTrail {

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

    public AgencyTrailDto getDto(){
        AgencyTrailDto agencyTrailDto = new  AgencyTrailDto();
        agencyTrailDto.setId(id);
        agencyTrailDto.setName(name);
        agencyTrailDto.setPrice(price);
        agencyTrailDto.setStartLat(startLat);
        agencyTrailDto.setStartLng(startLng);
        agencyTrailDto.setEndLat(endLat);
        agencyTrailDto.setEndLng(endLng);
        agencyTrailDto.setDescription(description);
        agencyTrailDto.setByteImg(img);
        agencyTrailDto.setCategoryId(category.getId());
        agencyTrailDto.setCategoryName(category.getName());
        return agencyTrailDto;
    }
}
