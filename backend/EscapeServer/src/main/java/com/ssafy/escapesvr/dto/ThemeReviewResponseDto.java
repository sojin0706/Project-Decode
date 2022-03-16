package com.ssafy.escapesvr.dto;

import com.ssafy.escapesvr.entity.ThemeReview;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ThemeReviewResponseDto {
    @ApiModelProperty(value = "테마 아이디", example = "1", required = true)
    private Integer theme_review_id;

    private String userNickName;

    private double reviewScore;

    private String reviewContent;

    private LocalDate createdAt;

    private Integer clearTime;

    public  ThemeReviewResponseDto(ThemeReview themeReview){
        theme_review_id=themeReview.getId();
        userNickName=themeReview.getUserNickName();
        reviewScore=themeReview.getReviewScore();
        reviewContent=themeReview.getReviewContent();
        createdAt=themeReview.getCreatedAt();
        clearTime=themeReview.getClearTime();
    }

}
