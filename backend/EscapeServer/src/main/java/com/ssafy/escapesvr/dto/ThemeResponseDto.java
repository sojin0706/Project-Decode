package com.ssafy.escapesvr.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ThemeResponseDto {
 //   @ApiModelProperty(value = "테마 아이디", example = "삼다수 팝니다", required = true)
    private Integer theme_id;
    //   @ApiModelProperty(value = "테마 이름", example = "프로젝트 노아", required = true)
    private String theme_name;
    //   @ApiModelProperty(value = "테마 최대 인원수", example = "5", required = true)
    private Integer maxNumber;
    //   @ApiModelProperty(value = "테마후기점수", example = "8.22", required = true)
    private Double score;
    //   @ApiModelProperty(value = "테마시간", example = "60", required = true)
    private Integer time;
    //   @ApiModelProperty(value = "대분류지역", example = "서울", required = true)
    private String largeRegion;
    //   @ApiModelProperty(value = "소분류지역", example = "홍대", required = true)
    private String smallRegion;

//    @Builder
//    public ThemeResponseDto(){
//
//
//
//    }


}
