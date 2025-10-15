package com.freelance.backend.service;

import com.freelance.backend.dto.FreelancerDto;
import com.freelance.backend.model.Freelancer;

import java.util.List;
import java.util.Optional;

public interface FreelancerService {
    List<FreelancerDto> findFreelancers();
    boolean createFreelancer(FreelancerDto freelancer);
    Optional<Freelancer> getFreelancer(String email);
    boolean deleteFreelancer(String email);
}
