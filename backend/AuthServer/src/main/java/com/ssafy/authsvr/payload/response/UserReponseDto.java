package com.ssafy.authsvr.payload.response;

import com.ssafy.authsvr.entity.User;
import com.ssafy.authsvr.oauth.domain.ProviderType;
import com.ssafy.authsvr.oauth.domain.RoleType;
import lombok.*;

import java.time.LocalDateTime;

public class UserReponseDto {

    @Getter
    @NoArgsConstructor
    public static class ProfileResponse {
        private Integer id;
        private String image;
        private String nickName;

        public static ProfileResponse profileResponse(User user){
            return ProfileResponse.builder()
                    .id(user.getId())
                    .image(user.getImage())
                    .nickName(user.getNickName())
                    .build();
        }

        @Builder
        public ProfileResponse(Integer id, String image, String nickName) {
            this.id = id;
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