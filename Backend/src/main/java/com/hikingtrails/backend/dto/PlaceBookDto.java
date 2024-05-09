package com.hikingtrails.backend.dto;

import lombok.Data;

@Data
public class PlaceBookDto {

    private Long userId;
    private String address;
    private String bookDescripton;
}
