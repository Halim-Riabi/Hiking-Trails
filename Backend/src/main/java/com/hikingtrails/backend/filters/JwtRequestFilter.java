package com.hikingtrails.backend.filters;

import com.hikingtrails.backend.services.jwt.UserDetailsServiceImpl;
import com.hikingtrails.backend.utils.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
@RequiredArgsConstructor
public class JwtRequestFilter extends OncePerRequestFilter {

    private static final Logger logger = LoggerFactory.getLogger(JwtRequestFilter.class);

    private final UserDetailsServiceImpl userDetailsService;
    private final JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        String token = null;
        String username = null;

        if(authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);
            logger.debug("JWT token extracted: {}", token); // Log the extracted token
            username = jwtUtil.extractUsername(token);
            logger.debug("Username extracted from JWT token: {}", username); // Log the extracted username
        }

        if(username != null && SecurityContextHolder.getContext().getAuthentication()== null) {
            logger.debug("Authentication context is null for user '{}', proceeding with authentication.", username);
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            if(jwtUtil.validateToken(token, userDetails)){
                logger.debug("JWT token is valid for user '{}'", username);
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            } else {
                logger.debug("JWT token is not valid for user '{}'", username);
            }
        } else {
            logger.debug("No valid JWT token found in request.");
        }
        filterChain.doFilter(request, response);
    }
}
