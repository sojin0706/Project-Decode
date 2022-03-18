package com.ssafy.escapesvr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EscapeServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EscapeServerApplication.class, args);
	}

}
