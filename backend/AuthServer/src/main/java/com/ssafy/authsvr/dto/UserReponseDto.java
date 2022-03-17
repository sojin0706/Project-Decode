package com.ssafy.authsvr.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class UserReponseDto {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ProfileResponse {
        private Integer id;
        private String image;
        private String nickName;
    }
}
