package com.omer.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class HomeController {

    @GetMapping("/")
    public Map<String, String> home() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "online");
        response.put("message", "Ring Store API is running");
        response.put("endpoints", "/products, /gold-price");
        return response;
    }
} 