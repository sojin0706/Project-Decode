package com.ssafy.authsvr.controller;

import com.ssafy.authsvr.dto.UserReponseDto;
import com.ssafy.authsvr.dto.UserRequestDto;
import com.ssafy.authsvr.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RestController
@RestControllerAdvice(annotations = RestController.class)
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PutMapping("/recommend")
    public ResponseEntity<String> userRecommendInfoModify(@RequestBody @Valid UserRequestDto.profileRequest profileRequest){
        log.info("userRecommendInfoModify");

        if(ObjectUtils.isEmpty(profileRequest)){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(userService.ModifiyRecommendInfoUser(profileRequest));

    }

    @GetMapping("/name/{id}")
    public ResponseEntity<String> userFindNickName(@PathVariable(value = "id") Integer id){

        userService.findNickNameUser(id);
        return null;
    }

    @GetMapping("/profile/{id}")
    public ResponseEntity<UserReponseDto.ProfileResponse> userFindProfile(@PathVariable("id") Integer id){


        return ResponseEntity.status(HttpStatus.OK).body(userService.findProfileUser(id));
    }


}