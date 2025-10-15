package com.freelance.backend.controller;

import com.freelance.backend.dto.JobDto;
import com.freelance.backend.service.JobService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("api/v1/jobs")
@RequiredArgsConstructor
@Getter @Setter
//@CrossOrigin("http://localhost:5173/")
@Slf4j
public class JobController {

    private final JobService jobService;
    @GetMapping("/findJobs")
    public ResponseEntity<?> findAllJobs(){
        try {
            log.error("Hit Jobs");
            return ResponseEntity.ok(jobService.findAllJobs());
        } catch (Exception e) {
            e.printStackTrace(); // logs in console
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error: " + e.getMessage());
        }
    }
    @PostMapping("/saveJob")
    public ResponseEntity<?> saveJob(@RequestBody JobDto jobDto){
        log.error("Request came till here");
        return ResponseEntity.ok(jobService.saveJob(jobDto));
    }
}
