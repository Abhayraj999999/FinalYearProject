package com.freelance.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "company_name", length = 100)
    private String companyName;

    @Column(name = "contact_number", length = 20)
    private String contactNumber;

    @Column(name = "profile_desc")
    private String profileDesc;

    @ColumnDefault("0.0")
    @Column(name = "rating", precision = 2, scale = 1)
    private BigDecimal rating;

    @ColumnDefault("'PENDING'")
    @Column(name = "payment_status", length = 50)
    private String paymentStatus;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "created_at")
    private Instant createdAt;

}