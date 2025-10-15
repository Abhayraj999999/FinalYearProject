package com.freelance.backend.dto;

import com.freelance.backend.model.Freelancer;

public record LoginResponseDto(String message, Freelancer freelancer,String jwt) {
}
