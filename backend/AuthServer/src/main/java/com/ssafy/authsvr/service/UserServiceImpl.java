package com.ssafy.authsvr.service;

import com.ssafy.authsvr.entity.GenrePreference;
import com.ssafy.authsvr.entity.PreferenceDocument;
import com.ssafy.authsvr.payload.request.UserProfileRequest;
import com.ssafy.authsvr.payload.response.UserDetailProfileResponse;
import com.ssafy.authsvr.payload.response.UserProfileResponse;
import com.ssafy.authsvr.entity.User;
import com.ssafy.authsvr.repository.GenrePreferenceRepository;
import com.ssafy.authsvr.repository.PreferenceDocumentRepository;
import com.ssafy.authsvr.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final GenrePreferenceRepository genrePreferenceRepository;
    private final PreferenceDocumentRepository preferenceDocumentRepository;

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
    public void ModifyRecommendInfoUser(UserProfileRequest profileRequest) {
        User user = userRepository.findUserById(profileRequest.getId());
//        List<String> location = new ArrayList<>();
//        location.add(profileRequest.getLargeRegion());
//        location.add(profileRequest.getSmallRegion());
        // TODO: 1. 몽고에 추가만 해서 유저 PK값으로 조회한것 중에서 최신 순이 가장 최근에 수정한 거임

        // TODO: 2. 몽고, mysql 둘다 넣음
//        PreferenceDocument preferenceDocument = PreferenceDocument.genreDocument(profileRequest,location);
//        preferenceDocumentRepository.save(preferenceDocument);
        GenrePreference genrePreference = GenrePreference.genrePreferenceBuild(profileRequest.getPreferenceGenre(),user);
        genrePreferenceRepository.save(genrePreference);

        user.setUserGenreInfoModified(genrePreference);
        userRepository.save(user);

    }

    @Override
    public UserProfileResponse findProfileUser(Integer userId) {
        return UserProfileResponse.profileResponse(userRepository.findUserById(userId));
    }

    @Override
    public UserDetailProfileResponse findAllProfileUser(Integer userId) {
        User user = userRepository.findUserById(userId);
        
        return UserDetailProfileResponse.allProfileResponse(user,
                                                    genrePreferenceRepository.findGenreById(user.getGenrePreference().getId()));
    }

}