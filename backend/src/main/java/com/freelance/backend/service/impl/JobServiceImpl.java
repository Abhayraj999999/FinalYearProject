package com.freelance.backend.service.impl;

import com.freelance.backend.dto.JobDto;
import com.freelance.backend.model.Job;
import com.freelance.backend.repository.JobRepository;
import com.freelance.backend.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class JobServiceImpl implements JobService {
    private final JobRepository jobRepository;
    @Override
    public List<JobDto> findAllPendingJobs(){
        return jobRepository.findByStatus("open")
                .stream()
                .map(this::convertToDto)
                .toList();
    }

    @Override
    public List<JobDto> findAllJobs(){
        return jobRepository.findAll()
                .stream()
                .map(this::convertToDto)
                .toList();
    }

    private JobDto convertToDto(Job job) {
        JobDto jobDto = new JobDto();
        jobDto.setTitle(job.getTitle());
        jobDto.setDescription(job.getDescription());
        jobDto.setBudget(job.getBudget());
        jobDto.setDuration(job.getDuration());
        jobDto.setPostedAt(job.getCreatedAt());
        jobDto.setEndDate(job.getEnddate());
        return jobDto;
    }

    @Override
    public boolean saveJob(JobDto jobDto){
        try {
            Job job = new Job();
            BeanUtils.copyProperties(jobDto, job);
            job.setLocation("remote");
            job.setStatus("open");
            jobRepository.save(job);
            System.out.println("Hit Save");
            return true;
        }catch(Exception e){
            return false;
        }
    }
}
