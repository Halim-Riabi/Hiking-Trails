package com.hikingtrails.backend.dto;

import com.hikingtrails.backend.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String email;
    private String name;
    private UserRole userRole;
}
