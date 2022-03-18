package com.ssafy.escapesvr.dto;

import com.ssafy.escapesvr.entity.ThemeReview;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.models.auth.In;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ThemeReviewResponseDto {

    @ApiModelProperty(value = "테마 아이디", example = "1", required = true)
    private Integer theme_review_id;

    private String userNickName;

    private Integer myScore;

    private String reviewContent;

    private LocalDate createdAt;

    private Integer clearTime;

    public  ThemeReviewResponseDto(ThemeReview themeReview){
        theme_review_id=themeReview.getId();
        userNickName=themeReview.getUserNickName();
        myScore=themeReview.getMyScore();
        reviewContent=themeReview.getReviewContent();
        createdAt=themeReview.getCreatedAt();
        clearTime=themeReview.getClearTime();
    }

}
