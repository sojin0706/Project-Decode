package com.ssafy.authsvr.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

public class UserRequestDto {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class profileRequest {
        @NotNull
        private Integer id;
        @NotBlank
        private String nickName;
        @NotNull
        private Integer age;
        @NotBlank
        private String gender;
        private List<String> genre;
        @NotBlank
        private String largeRegion;
        @NotBlank
        private String smallRegion;
    }
}
