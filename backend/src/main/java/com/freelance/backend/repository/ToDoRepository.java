package com.freelance.backend.repository;

import com.freelance.backend.model.ToDo;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long> {
    @Transactional
    @Modifying
    @Query("update ToDo set status = :status where id = :id")
    void updateStatus(@Param("id") Long id, @Param("status") String status);
}
