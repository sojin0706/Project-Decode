package com.ssafy.authsvr.service;

import com.ssafy.authsvr.payload.request.UserPreferenceRequest;
import com.ssafy.authsvr.payload.request.UserPreferenceModifyReqeust;
import com.ssafy.authsvr.payload.request.UserProfileRequest;
import com.ssafy.authsvr.payload.response.UserDetailProfileResponse;
import com.ssafy.authsvr.payload.response.UserProfileResponse;
import com.ssafy.authsvr.entity.User;
import org.springframework.web.multipart.MultipartFile;

public interface UserService {

    void AddRecommendInfoUser(UserProfileRequest profileRequest, UserPreferenceRequest preferenceRequest,
                              MultipartFile file);

    void ModifyRecommendInfoUser(UserProfileRequest profileRequest, UserPreferenceModifyReqeust preferenceModifyReqeust,
                                 MultipartFile file);

    User findDetailsUser(String tokenId);

    String findNickNameUser(Integer userId);

    UserProfileResponse findProfileUser(Integer userId);

    UserDetailProfileResponse findAllProfileUser(Integer userId);

    Integer findCountUser();
}
