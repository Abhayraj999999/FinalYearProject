package com.freelance.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "jobs")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "client_id", nullable = true)
    private Integer clientId;

    @Column(name = "title", nullable = false)
    private String title;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "category", length = 100, nullable = true)
    private String category;

    @Column(name = "budget", precision = 10, scale = 2)
    private BigDecimal budget;

    @Column(name = "duration", length = 50)
    private String duration;

    @Column(name = "location", length = 100, nullable = true)
    private String location;

    @ColumnDefault("'fixed'")
    @Column(name = "job_type")
    private String jobType;

    @ColumnDefault("'open'")
    @Column(name = "status")
    private String status;

    @Column(name = "image_url", nullable = true)
    private String imageUrl;

    @CreationTimestamp
    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "enddate")
    private LocalDate enddate;

}