package com.omer.backend.service;

import com.fasterxml.jackson.databind.JsonNode;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GoldPriceService {

    @Value("${goldapi.key}")
    private String apiKey;
    
    private final String API_URL = "https://www.goldapi.io/api/XAU/USD";

    public double fetchGoldPrice() {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("x-access-token", apiKey);
        headers.set("Content-Type", "application/json");

        HttpEntity<String> entity = new HttpEntity<String>(headers);

        try {
            ResponseEntity<JsonNode> response = restTemplate.exchange(API_URL, HttpMethod.GET, entity, JsonNode.class);

            JsonNode body = response.getBody();

            if (body != null && body.has("price")) {
                return body.get("price").asDouble();
            }
        }catch(Exception e){
            e.printStackTrace();
            }
        return -1;

    }
}
