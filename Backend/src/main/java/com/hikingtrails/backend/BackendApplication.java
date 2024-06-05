package com.hikingtrails.backend;

import com.hikingtrails.backend.enums.UserRole;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);

        /*for (UserRole role : UserRole.values()) {
            System.out.println(UserRole.values().toString());
        }*/
    }

}
