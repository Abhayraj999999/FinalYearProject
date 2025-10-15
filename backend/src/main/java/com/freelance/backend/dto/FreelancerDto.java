package com.freelance.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FreelancerDto {
    Long id;
    String name;
    String email;
    String password;
    String profileTitle;
    String profileDesc;
}
