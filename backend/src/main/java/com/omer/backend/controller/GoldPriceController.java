package com.omer.backend.controller;

import com.omer.backend.service.GoldPriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/gold-price")
public class GoldPriceController {

    @Autowired
    private GoldPriceService goldPriceService;

    @GetMapping
    public Map<String, Object> getGoldPrice() {
        Map<String, Object> response = new HashMap<>();
        double price = goldPriceService.fetchGoldPrice();
        
        if (price > 0) {
            response.put("price", price);
            response.put("currency", "USD");
            response.put("unit", "per ounce");
            response.put("success", true);
        } else {
            response.put("success", false);
            response.put("message", "Could not fetch gold price");
        }
        
        return response;
    }
} 