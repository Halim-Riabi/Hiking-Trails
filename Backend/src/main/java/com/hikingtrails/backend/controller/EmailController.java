package com.hikingtrails.backend.controller;

import com.hikingtrails.backend.entity.EmailRequest;
import com.hikingtrails.backend.services.email.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {
    @Autowired
    private EmailService emailService;

    @PostMapping("/send-email")
    public void sendEmail(@RequestBody EmailRequest request) {
        emailService.sendSimpleMessage(request.getTo(), request.getSubject(), request.getText());
    }
}
