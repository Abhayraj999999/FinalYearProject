package com.freelance.backend.repository;

import com.freelance.backend.model.ProjectAgreement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectAgreementRepository extends JpaRepository<ProjectAgreement, Long> {
}
