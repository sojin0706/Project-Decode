package com.ssafy.authsvr.service;

import com.ssafy.authsvr.payload.response.UserReponseDto;
import com.ssafy.authsvr.payload.request.UserRequestDto;
import com.ssafy.authsvr.entity.User;
import com.ssafy.authsvr.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
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
    public void ModifiyRecommendInfoUser(UserRequestDto.profileRequest profileRequest) {
        User user = userRepository.findById(profileRequest.getId());
        user.setUserProfileInfoModified(profileRequest);
        userRepository.save(user);
    }

    @Override
    public UserReponseDto.ProfileResponse findProfileUser(Integer userId) {
        return UserReponseDto.ProfileResponse.profileResponse(userRepository.findById(userId));
    }

}