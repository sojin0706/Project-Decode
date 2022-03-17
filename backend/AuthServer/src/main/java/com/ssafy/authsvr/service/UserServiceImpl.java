package com.ssafy.authsvr.service;

import com.ssafy.authsvr.dto.UserReponseDto;
import com.ssafy.authsvr.dto.UserRequestDto;
import com.ssafy.authsvr.entity.User;
import com.ssafy.authsvr.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User findDetailsUser(String tokenId) {
        return userRepository.findByTokenId(tokenId);
    }

    @Override
    public String findNickNameUser(Integer userId) {
        return userRepository.findById(userId).getNickName();
    }

    @Override
    public String ModifiyRecommendInfoUser(UserRequestDto.profileRequest profileRequest) {

        return null;
    }

    @Override
    public UserReponseDto.ProfileResponse findProfileUser(Integer userId) {
        User user = userRepository.findById(userId);
//        return UserReponseDto.ProfileResponse.;
        return null;
    }


}
