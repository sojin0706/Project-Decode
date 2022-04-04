//package com.ssafy.gatewaysvr.config;
//
//import org.springframework.cloud.gateway.route.RouteLocator;
//import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
//
//// yml 파일에서 했던 api routing을 처리할 수 있음
////@Configuration
//public class FilterConfig {
////    @Bean
//    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder){
//        return builder.routes()
//                // router 등록
//                .route(r -> r.path("/auth-service/**")
//                        .filters(f -> f.addRequestHeader("auth-request","auth-request-header")
//                                        .addResponseHeader("auth-response","auth-response-header"))
//                        // router가 여기로 이동
//                        .uri("http://localhost:8081"))
//                .route(r -> r.path("/api-service/**")
//                        .filters(f -> f.addRequestHeader("api-request","api-request-header")
//                                .addResponseHeader("api-response","api-response-header"))
//                        // router가 여기로 이동
//                        .uri("http://localhost:8082"))
//                .build();
//    }
//}
