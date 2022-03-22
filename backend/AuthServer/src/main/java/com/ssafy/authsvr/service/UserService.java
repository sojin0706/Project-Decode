package com.ssafy.authsvr.service;

import com.ssafy.authsvr.payload.response.UserReponseDto;
import com.ssafy.authsvr.payload.request.UserRequestDto;
import com.ssafy.authsvr.entity.User;

public interface UserService {

    User findDetailsUser(String tokenId);

    String findNickNameUser(Integer userId);

    void ModifiyRecommendInfoUser(UserRequestDto.profileRequest profileRequest);

    UserReponseDto.ProfileResponse findProfileUser(Integer userId);

    UserReponseDto.AllProfileResponse findAllProfileUser(Integer userId);
}
