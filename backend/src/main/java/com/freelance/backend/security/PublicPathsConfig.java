package com.freelance.backend.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
@Slf4j
public class PublicPathsConfig {
    @Bean("publicPaths")
    public List<String> publicPaths(){
        log.error("Number 8");
        return List.of(
                "/api/v1/jobs/findJobs",
                "/api/v1/freelancers/findFreelancers",
                "/api/v1/jobs/saveJob",
                "/api/v1/auth/registerUser",
                "/api/v1/auth/login",
                "/giveTasks",
                "/saveTask",
                "/updateStatus",
                "/deleteTask/**"
                );
    }
}
