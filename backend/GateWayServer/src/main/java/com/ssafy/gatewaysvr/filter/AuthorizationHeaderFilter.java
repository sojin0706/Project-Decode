package com.ssafy.gatewaysvr.filter;

import io.jsonwebtoken.Jwts;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;
import java.util.Objects;

// 커스텀 필터 같은 경우에는 원하는 라우트에 개별적으로 등록을 해줘야함
@Component
@Slf4j
public class AuthorizationHeaderFilter extends AbstractGatewayFilterFactory<AuthorizationHeaderFilter.Config> {

    @Autowired
    private Environment env;

    public AuthorizationHeaderFilter(){
        super(Config.class);
    }


    @Override
    public GatewayFilter apply(Config config) {

        return (exchange, chain) -> {
            // exchange 객체로 request, response를 받는다.
            ServerHttpRequest request = exchange.getRequest();
//            ServerHttpResponse response = exchange.getResponse();
            if(!request.getHeaders().containsKey(HttpHeaders.AUTHORIZATION)){
                return onError(exchange, "Not Found authorization Header", HttpStatus.UNAUTHORIZED);
            }

            String authorization = Objects.requireNonNull(request.getHeaders().
                                    get(HttpHeaders.AUTHORIZATION)).get(0);
            String token = authorization.replace("Bearer","").trim();
            if(!isJwtValid(token)){
                return onError(exchange, "Not Found token", HttpStatus.UNAUTHORIZED);
            }
            log.info("AuthorizationHeaderFilter filter: request id -> {}", request.getId());

            // chain에다가 postfilter: exchange 추가
            // 비동기방식으로 단일값 추가히기 위해서 Mono: 웹 플럭스 타입으로 추가
            return chain.filter(exchange);
//            return chain.filter(exchange)
//                    .then(Mono.fromRunnable(() -> {
//                            log.info("AuthorizationHeaderFilter filter: response code -> {}", response.getStatusCode());
//                     }));
        };
    }
    private Mono<Void> onError(ServerWebExchange exchange, String e, HttpStatus status){
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(status);

        return response.setComplete();
    }

    private boolean isJwtValid(String token){
        boolean isValid = true;

        String subject = null;
        try {
            subject = Jwts.parser()
                    .setSigningKey(env.getProperty("token.secret"))
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
        } catch(Exception e){
            isValid = false;
        }

        if (subject == null || subject.isEmpty()){
            isValid = false;
        }
        return isValid;
    }
    public static class Config {

    }
}
