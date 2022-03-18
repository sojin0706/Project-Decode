package com.ssafy.escapesvr.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="auth-server",url="http://j6c203.p.ssafy.io:8081")
public interface UserServiceClient {

    @GetMapping("/user/name/{id}")
    String userFindNickName(@PathVariable(value="id")Integer id);


}
