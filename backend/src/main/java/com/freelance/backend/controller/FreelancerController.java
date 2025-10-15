package com.freelance.backend.controller;

import com.freelance.backend.dto.FreelancerDto;
import com.freelance.backend.model.Freelancer;
import com.freelance.backend.service.impl.FreelancerServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("api/v1/freelancers")
@RequiredArgsConstructor
@RestController
public class FreelancerController {
private final FreelancerServiceImpl freelancerService;
    @GetMapping("/findFreelancers")
    public ResponseEntity<List<FreelancerDto>> findFreelancers(){
        return ResponseEntity.ok(freelancerService.findFreelancers());
    }
}
