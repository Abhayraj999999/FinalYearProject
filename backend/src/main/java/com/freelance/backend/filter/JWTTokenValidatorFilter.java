package com.freelance.backend.filter;

import com.freelance.backend.constants.ApplicationConstants;
import com.freelance.backend.model.Freelancer;
import com.freelance.backend.repository.FreelancerRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
public class JWTTokenValidatorFilter extends OncePerRequestFilter {

    private final AntPathMatcher pathMatcher = new AntPathMatcher();
    private final List<String> publicPaths;
    private final FreelancerRepository freelancerRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse responce,
                                    FilterChain filterChain) throws ServletException, IOException {
        log.error("JWT filter hit: {}", request.getRequestURI());
        log.error("number -1");
        String authHeader = request.getHeader(ApplicationConstants.JWT_HEADER);
        if(authHeader != null){
            try{
                // extract jwt token
                String jwt = authHeader.substring(7);
                Environment env = getEnvironment();
                if(env != null){
                    String secret = env.getProperty(ApplicationConstants.JWT_SECRET_KEY,
                            ApplicationConstants.JWT_SECRET_DEFAULT_VALUE);
                    SecretKey secretKey = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
                    if(secretKey != null){
                        Claims claims = Jwts.parser().verifyWith(secretKey).
                                build().parseSignedClaims(jwt).getPayload();
                        String username = String.valueOf(claims.get("email"));
                        String roles = String.valueOf(claims.get("roles"));

                        Freelancer freelancer = freelancerRepository.findByEmail(username)
                                .orElseThrow(() -> new BadCredentialsException("Invalid token user"));

                        Authentication authentication = new UsernamePasswordAuthenticationToken(
                                freelancer, null, AuthorityUtils.commaSeparatedStringToAuthorityList(roles)
                        );
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    }
                }

            }
            catch(ExpiredJwtException exception){
                responce.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                responce.getWriter().write("Token expired");
                return;
            }
            catch(Exception exception){
                throw new BadCredentialsException("Invalid Token received");
            }
        }
        filterChain.doFilter(request, responce);
    }
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException{
        log.error("Number -2");
        String path = request.getRequestURI();
        boolean found = publicPaths.stream().anyMatch(publicPath -> pathMatcher.match(publicPath, path));
        System.out.println("Successfully ignored"+found);
        return found;
    }
}
