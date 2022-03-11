package com.ssafy.gatewaysvr.filter;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.OrderedGatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.core.Ordered;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

// 공통 필 - 모든 경우에 이 필터를 거친다.
@Component
@Slf4j
public class LoggingFilter extends AbstractGatewayFilterFactory<LoggingFilter.Config> {
    public LoggingFilter(){
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {

//        return (exchange, chain) -> {
//            // exchange 객체로 request, response를 받는다.
//            ServerHttpRequest request = exchange.getRequest();
//            ServerHttpResponse response = exchange.getResponse();
//
//            log.info("Global filter: request id -> {}", config.getBaseMessage());
//
//            if (config.isPreLogger()){
//                log.info("Global start filter: request id -> {}", request.getId());
//            }
//
//            // Custom post filter
//            // chain에다가 postfilter: exchange 추가
//            // 비동기방식으로 단일값 추가히기 위해서 Mono: 웹 플럭스 타입으로 추가
//            return chain.filter(exchange).then(Mono.fromRunnable(() -> {
//                if (config.isPostLogger()){
//                    log.info("Global End filter: response code -> {}", response.getStatusCode());
//                }
//            }));
//        };
        GatewayFilter filter = new OrderedGatewayFilter((exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            ServerHttpResponse response = exchange.getResponse();

            log.info("Logging filter: request id -> {}", config.getBaseMessage());

            if (config.isPreLogger()){
                log.info("Logging PRE filter: request id -> {}", request.getId());
            }

            // Custom post filter
            // chain에다가 postfilter: exchange 추가
            // 비동기방식으로 단일값 추가히기 위해서 Mono: 웹 플럭스 타입으로 추가
            return chain.filter(exchange).then(Mono.fromRunnable(() -> {
                if (config.isPostLogger()) {
                    log.info("Logging POST filter: response code -> {}", response.getStatusCode());
                }
            }));
            // 우선순위 젤 높게 잡음
        }, Ordered.HIGHEST_PRECEDENCE);
        return filter;
    }

    // inner class로 설정
    @Data
    public static class Config {
        private String baseMessage;
        private boolean preLogger;
        private boolean postLogger;
    }
}
