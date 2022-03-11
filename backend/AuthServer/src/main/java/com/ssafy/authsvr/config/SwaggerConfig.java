package com.ssafy.authsvr.config;

import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

public class SwaggerConfig {

      /*
     Swagger 주소
     http://localhost:8080/swagger-ui/index.html
     */

    /*
     * Swagger API 문서
     * */
    @Bean
    public Docket swaggerAPI() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(this.swaggerInfo())    // 스웨거 정보 등록
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .useDefaultResponseMessages(true);  // 기본 세팅되는 200, 401, 403, 404 표시
    }

    /*
     * Swagger 정보
     * */
    private ApiInfo swaggerInfo() {
        return new ApiInfoBuilder()
                .title("써닌(SUN-IN) - 선한 영향력 프로젝트")
                .description("일생생활 속 선한 영향력을 끼칠 수 있는 일들을 한 후 서로 공유하고 함께 참여할 수 있도록 이끄는 서비스")
                .version("1.0.0")
                .build();
    }

}