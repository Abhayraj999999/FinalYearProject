package com.freelance.backend.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;

@Getter
@Setter
@RequiredArgsConstructor
public class JobDto {
    String title;
    String description;
    BigDecimal budget;
    String duration;
    Instant postedAt;
    LocalDate endDate;
}
