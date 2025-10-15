package com.freelance.backend.service;

import com.freelance.backend.dto.JobDto;

import java.util.List;

public interface JobService {
    List<JobDto>  findAllPendingJobs();
    List<JobDto> findAllJobs();
    boolean saveJob(JobDto job);
}
