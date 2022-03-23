package com.ssafy.authsvr.service;

import com.ssafy.authsvr.payload.request.UserProfileRequest;
import com.ssafy.authsvr.payload.response.UserDetailProfileResponse;
import com.ssafy.authsvr.payload.response.UserProfileResponse;
import com.ssafy.authsvr.entity.User;

public interface UserService {

    User findDetailsUser(String tokenId);

    String findNickNameUser(Integer userId);

    void ModifyRecommendInfoUser(UserProfileRequest profileRequest);

    UserProfileResponse findProfileUser(Integer userId);

    UserDetailProfileResponse findAllProfileUser(Integer userId);
}
