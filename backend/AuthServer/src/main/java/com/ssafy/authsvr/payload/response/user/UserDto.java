package com.ssafy.authsvr.payload.response.user;

import com.ssafy.authsvr.entity.user.User;
import com.ssafy.authsvr.oauth.entity.ProviderType;
import com.ssafy.authsvr.oauth.entity.RoleType;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class UserDto {

    private Long userSeq;

    private String userId;

    private String username;

    private String password;

    private String userNickname;

    private String email;

    private String emailVerifiedYn;

    private String profileImageUrl;

    private ProviderType providerType;

    private RoleType roleType;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private String introduction;

    private String address;

    private String phoneNumber;

    private int suninDays = 0;

    public static UserDto userDto(User user){
        return UserDto.builder()
                .userSeq(user.getUserSeq())
                .userId(user.getUserId())
                .username(user.getUsername())
                .password(user.getPassword())
                .userNickname(user.getUserNickname())
                .email(user.getEmail())
                .emailVerifiedYn(user.getEmailVerifiedYn())
                .profileImageUrl(user.getProfileImageUrl())
                .providerType(user.getProviderType())
                .roleType(user.getRoleType())
                .createdAt(user.getCreatedAt().plusHours(9))
                .modifiedAt(user.getModifiedAt().plusHours(9))
                .introduction(user.getIntroduction())
                .address(user.getAddress())
                .phoneNumber(user.getPhoneNumber())
                .build();
    }

    @Builder
    public UserDto(Long userSeq, String userId, String username, String password, String userNickname, String email, String emailVerifiedYn, String profileImageUrl, ProviderType providerType, RoleType roleType, LocalDateTime createdAt, LocalDateTime modifiedAt, String introduction, String address, String phoneNumber) {
        this.userSeq = userSeq;
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.userNickname = userNickname;
        this.email = email;
        this.emailVerifiedYn = emailVerifiedYn;
        this.profileImageUrl = profileImageUrl;
        this.providerType = providerType;
        this.roleType = roleType;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.introduction = introduction;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}
