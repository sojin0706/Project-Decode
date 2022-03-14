package com.ssafy.authsvr.service;

import com.ssafy.authsvr.entity.User;
import com.ssafy.authsvr.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;

    public User getUser(String userId) {
        return userRepository.findByTokenId(userId);
    }

}