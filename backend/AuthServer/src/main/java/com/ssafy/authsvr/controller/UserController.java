package com.ssafy.authsvr.controller;

import com.ssafy.authsvr.common.ApiResponse;
import com.ssafy.authsvr.entity.user.User;
import com.ssafy.authsvr.payload.response.user.UserDto;
import com.ssafy.authsvr.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RestControllerAdvice(annotations = RestController.class)
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @ApiOperation(value="user 반환")
    @GetMapping
    public ApiResponse getUser() {
        org.springframework.security.core.userdetails.User principal = (org.springframework.security.core.userdetails.User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.getUser(principal.getUsername());
        UserDto userDto = UserDto.userDto(user);

        return ApiResponse.success("user", userDto);
    }
}