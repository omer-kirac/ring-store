package com.omer.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*") // Geliştirme aşamasında tüm originlere izin ver
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(false); // allowedOrigins="*" ile true kullanılamaz
                
                // Not: Production'da güvenlik için bu ayarları değiştirin:
                // .allowedOrigins("https://your-vercel-app.vercel.app")
                // .allowCredentials(true)
            }
        };
    }
} 