package com.freelance.backend.repository;

import com.freelance.backend.model.Freelancer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FreelancerRepository extends JpaRepository<Freelancer,Long> {
    Optional<Freelancer> findByEmail(String email);
    boolean deleteByEmail(String email);
}
