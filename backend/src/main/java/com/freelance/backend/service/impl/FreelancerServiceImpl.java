package com.freelance.backend.service.impl;

import com.freelance.backend.dto.FreelancerDto;
import com.freelance.backend.model.Freelancer;
import com.freelance.backend.repository.FreelancerRepository;
import com.freelance.backend.service.FreelancerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FreelancerServiceImpl implements FreelancerService {
    private final FreelancerRepository freelancerRepository;

    @Override
    public boolean createFreelancer(FreelancerDto freelancerDto){
        Freelancer freelancer = convertToFreelancer(freelancerDto);
        try{
            freelancerRepository.save(freelancer);
            return true;
        }catch(Exception e){
            return false;
        }

    }

    private Freelancer convertToFreelancer(FreelancerDto freelancerDto){
        Freelancer freelancer = new Freelancer();
        BeanUtils.copyProperties(freelancerDto, freelancer);
        return freelancer;
    }

    @Override
    public Optional<Freelancer> getFreelancer(String email){
        return freelancerRepository.findByEmail(email);
    }

    @Override
    public boolean deleteFreelancer(String email){
        try{
            freelancerRepository.deleteByEmail(email);
            return true;
        }catch(Exception e){
            return false;
        }
    }

    @Override
    public List<FreelancerDto> findFreelancers(){
        List<FreelancerDto> freelancerDtos = freelancerRepository.findAll().stream()
                .map(freelancer -> {
                    FreelancerDto freelancerDto = new FreelancerDto();
                    BeanUtils.copyProperties(freelancer, freelancerDto);
                    return freelancerDto;
                }).toList();
        return freelancerDtos;
    }
}
