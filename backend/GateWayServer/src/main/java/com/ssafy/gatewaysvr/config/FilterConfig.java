package com.ssafy.gatewaysvr.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

// yml 파일에서 했던 api routing을 처리할 수 있음
//@Configuration
public class FilterConfig {
    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder){
        return builder.routes()
                // router 등록
                .route(r -> r.path("/auth-server/**")
                        .filters(f -> f.addRequestHeader("auth-request","auth-request-header")
                                        .addResponseHeader("auth-response","auth-response-header"))
                        // router가 여기로 이동
                        .uri("http://j6c203.p.ssafy.io:8081"))
                .route(r -> r.path("/escape-server/**")
                        .filters(f -> f.addRequestHeader("api-request","escape-request-header")
                                .addResponseHeader("api-response","escape-response-header"))
                        // router가 여기로 이동
                        .uri("http://j6c203.p.ssafy.io:8082"))
                .build();
    }
}
