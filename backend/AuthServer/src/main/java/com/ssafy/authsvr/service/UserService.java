package com.ssafy.authsvr.service;

import com.ssafy.authsvr.dto.UserReponseDto;
import com.ssafy.authsvr.dto.UserRequestDto;
import com.ssafy.authsvr.entity.User;

public interface UserService {

    User findDetailsUser(String tokenId);

    String findNickNameUser(Integer userId);

    String ModifiyRecommendInfoUser(UserRequestDto.profileRequest profileRequest);

    UserReponseDto.ProfileResponse findProfileUser(Integer userId);

}
