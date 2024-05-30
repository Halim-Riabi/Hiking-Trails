package com.hikingtrails.backend.dto;

import com.hikingtrails.backend.entity.User;
import com.hikingtrails.backend.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String email;
    private String name;
    private UserRole userRole;

    public UserDto(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.name = user.getName();
        this.userRole = user.getRole();
    }
}
