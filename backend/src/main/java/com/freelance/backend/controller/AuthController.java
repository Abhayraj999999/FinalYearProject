package com.freelance.backend.controller;

import com.freelance.backend.dto.FreelancerDto;
import com.freelance.backend.dto.LoginRequestDto;
import com.freelance.backend.dto.LoginResponseDto;
import com.freelance.backend.dto.RegisterRequestDto;
import com.freelance.backend.model.Freelancer;
import com.freelance.backend.repository.ClientRepository;
import com.freelance.backend.repository.FreelancerRepository;
import com.freelance.backend.util.JWTUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.password.CompromisedPasswordChecker;
import org.springframework.security.authentication.password.CompromisedPasswordDecision;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final CompromisedPasswordChecker compromisedPasswordChecker;
    private final ClientRepository clientRepository;
    private final FreelancerRepository freelancerRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTUtil jwtUtil;
    @PostMapping("/registerUser")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequestDto registerRequestDto){
        log.error("Number 9");
        CompromisedPasswordDecision decision = compromisedPasswordChecker.check(registerRequestDto.getPassword());
        if(decision.isCompromised()){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("password","Choose a strong password"));
        }
        Optional<Freelancer> freelancer = freelancerRepository.findByEmail(registerRequestDto.getEmail());
        if(freelancer.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("email","Email already exist"));
        }
        Freelancer freelancerObj = new Freelancer();
        BeanUtils.copyProperties(registerRequestDto, freelancerObj);
        freelancerObj.setPassword(passwordEncoder.encode(registerRequestDto.getPassword()));
        freelancerObj.setRating(BigDecimal.valueOf(4.5));
        freelancerRepository.save(freelancerObj);
        return ResponseEntity.status(HttpStatus.CREATED).body("Registration successful");
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> loginUser(@RequestBody LoginRequestDto loginRequestDto){
        log.error("Number 10");
        try{
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequestDto.username(),
                            loginRequestDto.password())
            );
            var loggedInUser = (Freelancer)authentication.getPrincipal();
            FreelancerDto freelancerDto = new FreelancerDto();
            BeanUtils.copyProperties(loggedInUser, freelancerDto);
            String jwtToken = jwtUtil.generateJWTToken(authentication);
            return ResponseEntity.status(HttpStatus.OK).body(new LoginResponseDto(HttpStatus.OK.getReasonPhrase(), null, jwtToken));
        }
        catch(BadCredentialsException e){
            return buildErrorResponse(HttpStatus.UNAUTHORIZED, "Invalid username or password");
        }
        catch(AuthenticationException e){
            return buildErrorResponse(HttpStatus.UNAUTHORIZED, "Authentication Failed");
        }
        catch(Exception e){
            return buildErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR,
                    "An unexpected error occurred");
        }
    }
    private ResponseEntity<LoginResponseDto> buildErrorResponse(HttpStatus status, String message){
        log.error("Number 11");
        return ResponseEntity.status(status).body(new LoginResponseDto(message, null, null));
    }
}
