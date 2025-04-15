package com.omer.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.omer.backend.entity.Product;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private List<Product> products;

    @Autowired
    private GoldPriceService goldPriceService;

    @PostConstruct
    public void init() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            InputStream is = new ClassPathResource("products.json").getInputStream();
            Product[] productArray = mapper.readValue(is, Product[].class);
            this.products = Arrays.asList(productArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<Product> getFilteredProducts(Double minPrice, Double maxPrice, Double minPopularity, Double maxPopularity) {
        // 1 ons = 31.1035 gram.Bu api ons fiyatını döndürüyor, bize gram fiyatı gerekli
        double goldPrice = goldPriceService.fetchGoldPrice() / 31.1035;

        return products.stream()
                .map(product -> {
                    double price = (product.getPopularityScore() + 1) * product.getWeight() * goldPrice;
                    product.setPrice(price);
                    
                    double normalizedScore = 1 + (product.getPopularityScore() * 4);
                    normalizedScore = Math.round(normalizedScore * 2) / 2.0;
                    product.setNormalizedPopularityScore(normalizedScore);
                    
                    return product;
                })
                .filter(p -> minPrice == null || p.getPrice() >= minPrice)
                .filter(p -> maxPrice == null || p.getPrice() <= maxPrice)
                .filter(p -> minPopularity == null || p.getNormalizedPopularityScore() >= minPopularity)
                .filter(p -> maxPopularity == null || p.getNormalizedPopularityScore() <= maxPopularity)
                .collect(Collectors.toList());
    }
}
