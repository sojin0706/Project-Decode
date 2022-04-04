package com.ssafy.gatewaysvr.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.gatewaysvr.token.CustomAuthenticationToken;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;

public class CustomAuthenticationFilter extends AbstractAuthenticationProcessingFilter {
    /* 생략 */

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException, IOException, ServletException {

        try {

            RequestLogin credentials = new ObjectMapper().readValue(request.getInputStream(), RequestLogin.class);
            return getAuthenticationManager().authenticate(
                    new CustomAuthenticationToken(new ArrayList<>(), credentials.getEmail(), credentials.getUserId())
            );

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

//    @Override
//    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {

//        String email = (String) authResult.getPrincipal();
//        UserDto userDetails = userService.getUserByEmail(email);
//
//        String token = Jwts.builder()
//                .setSubject(userDetails.getUserId())
//                .setExpiration(new Date(System.currentTimeMillis() +
//                        Long.parseLong(env.getProperty("token.expiration_time"))))
//                .signWith(SignatureAlgorithm.HS512, env.getProperty("token.secret"))
//                .compact();
//
//        response.addHeader("token", token);
//        response.addHeader("userId", userDetails.getUserId());

//    }
}
