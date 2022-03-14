package com.ssafy.authsvr.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RestControllerAdvice(annotations = RestController.class)
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {


}