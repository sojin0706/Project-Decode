package com.ssafy.authsvr.service;

import com.ssafy.authsvr.entity.GenrePreference;
import com.ssafy.authsvr.payload.response.UserReponseDto;
import com.ssafy.authsvr.payload.request.UserRequestDto;
import com.ssafy.authsvr.entity.User;
import com.ssafy.authsvr.repository.GenrePreferenceRepository;
import com.ssafy.authsvr.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final GenrePreferenceRepository genrePreferenceRepository;

    @Override
    public User findDetailsUser(String tokenId) {
        return userRepository.findByTokenId(tokenId);
    }

    @Override
    public String findNickNameUser(Integer userId) {
        return userRepository.findUserById(userId).getNickName();
    }

    @Override
    @Transactional
    public void ModifyRecommendInfoUser(UserRequestDto.profileRequest profileRequest) {
        User user = userRepository.findUserById(profileRequest.getId());
//        List<String> location = new ArrayList<>();
//        location.add(profileRequest.getLargeRegion());
//        location.add(profileRequest.getSmallRegion());
        // TODO: 1. 몽고에 추가만 해서 유저 PK값으로 조회한것 중에서 최신 순이 가장 최근에 수정한 거임

        // TODO: 2. 몽고, mysql 둘다 넣음
        GenrePreference genrePreference = GenrePreference.genrePreferenceBuild(profileRequest.getPreferenceGenre(),user);
        genrePreferenceRepository.save(genrePreference);

        user.setUserGenreInfoModified(genrePreference);
        userRepository.save(user);
    }

    @Override
    public UserReponseDto.ProfileResponse findProfileUser(Integer userId) {
        return UserReponseDto.ProfileResponse.profileResponse(userRepository.findUserById(userId));
    }

    @Override
    public UserReponseDto.AllProfileResponse findAllProfileUser(Integer userId) {
        return UserReponseDto.AllProfileResponse.allProfileResponse(userRepository.findUserById(userId),
                                                    genrePreferenceRepository.findGenreById(userId));
    }

}