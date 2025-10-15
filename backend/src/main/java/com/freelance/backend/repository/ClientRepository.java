package com.freelance.backend.repository;

import com.freelance.backend.model.Category;
import com.freelance.backend.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
}
