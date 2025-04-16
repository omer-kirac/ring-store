package com.omer.backend.controller;

import com.omer.backend.entity.Product;
import com.omer.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getProducts(
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) Double minPopularity,
            @RequestParam(required = false) Double maxPopularity,
            @RequestParam(required = false) String priceRange,
            @RequestParam(required = false) Integer popularityValue
    ) {
        if (priceRange != null) {
            switch (priceRange) {
                case "300-500":
                    minPrice = 300.0;
                    maxPrice = 500.0;
                    break;
                case "500-700":
                    minPrice = 500.0;
                    maxPrice = 700.0;
                    break;
                case "700+":
                    minPrice = 700.0;
                    maxPrice = null;
                    break;
            }
        }

        if (popularityValue != null) {
            minPopularity = popularityValue - 0.5;
            maxPopularity = popularityValue + 0.5;
        }

        return productService.getFilteredProducts(minPrice, maxPrice, minPopularity, maxPopularity);
    }
}
