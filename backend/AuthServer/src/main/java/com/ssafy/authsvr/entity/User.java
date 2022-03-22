package com.ssafy.authsvr.entity;

import com.ssafy.authsvr.oauth.domain.ProviderType;
import com.ssafy.authsvr.oauth.domain.RoleType;
import com.ssafy.authsvr.payload.request.UserRequestDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "email", length = 45)
    @NotNull
    @Size(max = 45)
    private String email;

    @Column(name = "image", length = 128)
//    @NotNull
    @Size(max = 128)
    private String image;

    @Column(name = "provider_type", length = 20)
    @Enumerated(EnumType.STRING)
    @NotNull
    private ProviderType providerType;

    @Column(name = "role_type", length = 20)
    @Enumerated(EnumType.STRING)
    @NotNull
    private RoleType roleType;

    @Column(name = "token_id", length = 64, unique = true)
    @NotNull
    @Size(max = 64)
    private String tokenId;

    private String nickName;

    @Column(name = "name", length = 20)
//    @NotNull
    @Size(max = 20)
    private String name;

    private String introduction;

    private String phoneNumber;

    @NotNull
    private LocalDateTime createdAt;

    @NotNull
    private LocalDateTime modifiedAt;

    private String gender;

    private Integer age;

    private String largeRegion;

    private String smallRegion;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "genre_preference_id")
    private GenrePreference genrePreference;

    public User(String tokenId, String name, String email,String image, ProviderType providerType,
                RoleType roleType, LocalDateTime createdAt,LocalDateTime modifiedAt, String introduction, String phoneNumber) {
        this.tokenId = tokenId;
        this.name = name;
        this.email = email != null ? email : "NO_EMAIL";
        this.image = image;
        this.providerType = providerType;
        this.roleType = roleType;
        this.createdAt = createdAt;
        this.nickName = name;
        this.modifiedAt = modifiedAt;
        this.introduction = introduction;
        this.phoneNumber = phoneNumber;
    }

    public void setUserProfileImageModified(String image){
        this.image = image;
    }

    public void setUserNameModified(String name){
        this.name = name;
    }

    public void setUserProfileInfoModified(UserRequestDto.profileRequest profileRequest){
        this.nickName = profileRequest.getNickName();
        this.age = profileRequest.getAge();
        this.gender = profileRequest.getGender();
        this.largeRegion = profileRequest.getLargeRegion();
        this.smallRegion = profileRequest.getSmallRegion();
    }

    public void setUserGenreInfoModified(GenrePreference genrePreference){
        this.genrePreference = genrePreference;
    }

    public void setUserAddProfileInfoModified(UserRequestDto.profileRequest profileRequest, GenrePreference genrePreference){
        this.nickName = profileRequest.getNickName();
        this.age = profileRequest.getAge();
        this.gender = profileRequest.getGender();
        this.genrePreference = genrePreference;
        this.largeRegion = profileRequest.getLargeRegion();
        this.smallRegion = profileRequest.getSmallRegion();
    }

}