package com.hikingtrails.backend.services.auth;

import com.hikingtrails.backend.dto.SignupRequest;
import com.hikingtrails.backend.dto.UserDto;

public interface AuthService {
    UserDto createUser(SignupRequest signupRequest);

    Boolean hasUserWithEmail(String email);

    public UserDto updateUserEmail(Long userId, String newEmail);

    public void updateUserPassword(Long userId, String oldPassword, String newPassword);

    }
