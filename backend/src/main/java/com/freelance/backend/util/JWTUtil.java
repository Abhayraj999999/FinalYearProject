package com.freelance.backend.util;

import com.freelance.backend.constants.ApplicationConstants;
import com.freelance.backend.model.Client;
import com.freelance.backend.model.Freelancer;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
@Slf4j
public class JWTUtil {
    private final Environment env;

    public String generateJWTToken(Authentication authentication){
        log.error("Number 20");
        String jwt = "";
        String secret = env.getProperty(ApplicationConstants.JWT_SECRET_KEY,
                ApplicationConstants.JWT_SECRET_DEFAULT_VALUE);
        SecretKey secretKey = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
        Freelancer fetchedFreelancer = (Freelancer) authentication.getPrincipal();
//        if(fetchedFreelancer instanceof Freelancer){
//            fetchedFreelancer = (Freelancer) fetchedFreelancer;
//        }else{
//            fetchedFreelancer = (Client) fetchedFreelancer;
//        }

        jwt = Jwts.builder().issuer("Freelancer").subject("JWT Token")
                .claim("username", fetchedFreelancer.getName())
                .claim("email", fetchedFreelancer.getEmail())
                .claim("roles", authentication.getAuthorities().stream().map(
                        GrantedAuthority::getAuthority
                ).collect(Collectors.joining(",")))
                .issuedAt(new java.util.Date())
                .expiration(new java.util.Date((new java.util.Date()).getTime() + 24*60*60*1000))
                .signWith(secretKey).compact();
        return jwt;
    }
}
