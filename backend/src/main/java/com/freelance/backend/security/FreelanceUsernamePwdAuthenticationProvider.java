package com.freelance.backend.security;

import com.freelance.backend.model.Freelancer;
import com.freelance.backend.model.Role;
import com.freelance.backend.repository.ClientRepository;
import com.freelance.backend.repository.FreelancerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

//@Profile("prod")
@Component
@RequiredArgsConstructor
@Slf4j
public class FreelanceUsernamePwdAuthenticationProvider implements AuthenticationProvider {

    private final ClientRepository clientRepository;
    private final FreelancerRepository freelancerRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        log.error("Number 6");
        String username = authentication.getName();
        log.error("Found username {}", username);
        String pwd = authentication.getCredentials().toString();
        log.error("Found password {}", pwd);
        Freelancer freelancer = freelancerRepository.findByEmail(username).orElseThrow(()
                -> new UsernameNotFoundException("User details not found for the user "+username));
        log.error("Found freelancer {}", freelancer);
        Set<Role> roles = freelancer.getRoles();
        List<SimpleGrantedAuthority> authorities = roles.stream().map(role
                -> new SimpleGrantedAuthority(role.getName())).toList();
        if(passwordEncoder.matches(pwd, freelancer.getPassword())){
            return new UsernamePasswordAuthenticationToken(freelancer, null, authorities);
        }else{
            throw new BadCredentialsException("Invalid Password!");
        }
    }

    @Override
    public boolean supports(Class<?> authentication){
        log.error("Number 7");
        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }
}
