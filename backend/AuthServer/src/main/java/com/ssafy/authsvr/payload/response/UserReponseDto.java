package com.ssafy.authsvr.payload.response;

import com.ssafy.authsvr.entity.GenrePreference;
import com.ssafy.authsvr.entity.User;
import com.ssafy.authsvr.oauth.domain.ProviderType;
import com.ssafy.authsvr.oauth.domain.RoleType;
import lombok.*;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

public class UserReponseDto {

    @Getter
    @NoArgsConstructor
    public static class AllProfileResponse {
        private Integer id;

        private String nickName;

        private Integer age;

        private String gender;

        private String largeRegion;

        private String smallRegion;

        private Integer thrill;

        private Integer romance;

        private Integer reasoning;

        private Integer sfFantasy;

        private Integer adventure;

        private Integer comedy;

        private Integer crime;

        private Integer horror;

        private Integer adult;

        private Integer drama;

//        public static AllProfileResponse allProfileResponse(User user, List<String> genrePreference){
//            return AllProfileResponse.builder()
//                    .id(user.getId())
//                    .nickName(user.getNickName())
//                    .age(user.getAge())
//                    .gender(user.getGender())
//                    .largeRegion(user.getLargeRegion())
//                    .smallRegion(user.getSmallRegion())
//                    .thrill(genrePreference.)
//                    .reasoning(genrePreference.getReasoning())
//                    .romance(genrePreference.getRomance())
//                    .sfFantasy(genrePreference.getSfFantasy())
//                    .adventure(genrePreference.getAdventure())
//                    .comedy(genrePreference.getComedy())
//                    .horror(genrePreference.getHorror())
//                    .adult(genrePreference.getAdult())
//                    .drama(genrePreference.getDrama())
//                    .build();
//        }

        @Builder
        public AllProfileResponse(Integer id, String nickName, Integer age, String gender, String largeRegion, String smallRegion, Integer thrill, Integer romance, Integer reasoning, Integer sfFantasy, Integer adventure, Integer comedy, Integer crime, Integer horror, Integer adult, Integer drama) {
            this.id = id;
            this.nickName = nickName;
            this.age = age;
            this.gender = gender;
            this.largeRegion = largeRegion;
            this.smallRegion = smallRegion;
            this.thrill = thrill;
            this.romance = romance;
            this.reasoning = reasoning;
            this.sfFantasy = sfFantasy;
            this.adventure = adventure;
            this.comedy = comedy;
            this.crime = crime;
            this.horror = horror;
            this.adult = adult;
            this.drama = drama;
        }
    }

    @Getter
    @NoArgsConstructor
    public static class ProfileResponse {
        private Integer userId;
        private String image;
        private String nickName;

        public static ProfileResponse profileResponse(User user){
            return ProfileResponse.builder()
                    .userId(user.getId())
                    .image(user.getImage())
                    .nickName(user.getNickName())
                    .build();
        }

        @Builder
        public ProfileResponse(Integer userId, String image, String nickName) {
            this.userId = userId;
            this.image = image;
            this.nickName = nickName;
        }
    }

    @Getter
    @NoArgsConstructor
    public static class DetailResponse {
        private Integer id;

        private String email;

        private String image;

        private ProviderType providerType;

        private RoleType roleType;

        private String tokenId;

        private String nickName;

        private String name;

        private String introduction;

        private String phoneNumber;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;

        private String gender;

        private Integer age;

        private String largeRegion;

        private String smallRegion;

        private String preference;

        public static DetailResponse detailResponse(User user){
            return DetailResponse.builder()
                    .id(user.getId())
                    .tokenId(user.getTokenId())
                    .name(user.getName())
                    .nickName(user.getNickName())
                    .email(user.getEmail())
                    .image(user.getImage())
                    .providerType(user.getProviderType())
                    .roleType(user.getRoleType())
                    .createdAt(user.getCreatedAt().plusHours(9))
                    .modifiedAt(user.getModifiedAt().plusHours(9))
                    .introduction(user.getIntroduction())
                    .phoneNumber(user.getPhoneNumber())
                    .gender(user.getGender())
                    .age(user.getAge())
                    .largeRegion(user.getLargeRegion())
                    .smallRegion(user.getSmallRegion())
//                    .preference(user.getPreference())
                    .build();
        }

        @Builder
        public DetailResponse(Integer id, String email,  String image, ProviderType providerType, RoleType roleType,
                       String tokenId, String nickName, String name, String introduction, String phoneNumber,
                       LocalDateTime createdAt, LocalDateTime modifiedAt, String gender, Integer age, String largeRegion,
                       String smallRegion, String preference) {
            this.id = id;
            this.email = email;
            this.image = image;
            this.providerType = providerType;
            this.roleType = roleType;
            this.tokenId = tokenId;
            this.nickName = nickName;
            this.name = name;
            this.introduction = introduction;
            this.phoneNumber = phoneNumber;
            this.createdAt = createdAt;
            this.modifiedAt = modifiedAt;
            this.gender = gender;
            this.age = age;
            this.largeRegion = largeRegion;
            this.smallRegion = smallRegion;
            this.preference = preference;
        }
    }

}
