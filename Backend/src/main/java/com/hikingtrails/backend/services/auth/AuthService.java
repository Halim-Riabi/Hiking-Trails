package com.hikingtrails.backend.services.auth;

import com.hikingtrails.backend.dto.SignupRequest;
import com.hikingtrails.backend.dto.UserDto;

public interface AuthService {
    UserDto createUser(SignupRequest signupRequest);

    Boolean hasUserWithEmail(String email);
}
