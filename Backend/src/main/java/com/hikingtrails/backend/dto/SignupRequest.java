package com.hikingtrails.backend.dto;

import com.hikingtrails.backend.enums.UserRole;
import lombok.Data;

@Data
public class SignupRequest {
    private String email;
    private String password;
    private String name;
    private UserRole userRole;
}
