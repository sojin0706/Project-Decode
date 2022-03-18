package com.ssafy.escapesvr.dto;

import com.ssafy.escapesvr.entity.Article;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(description = "유저게시판의 글 생성과 수정을 처리할 요청 DTO 클래스")
public class ArticleRequestDto {

    @ApiModelProperty(value = "유저게시판 글 제목", required = true)
    private String title; //제목

    @ApiModelProperty(value = "유저게시판 글 내용", required = true)
    private String content; //내용

    @ApiModelProperty(value = "유저게시판 작성자 id(번호)", required = true)
    private Integer userId; //작성자

    @ApiModelProperty(value = "유저게시판 지역 말머리", required = true)
    private String smallRegion; //지역

//    @Builder
//    public ArticleCreateRequestDto(String title, String content, Integer userId, String smallRegion){
//        this.title= title;
//        this.content = content;
//        this.userId = userId;
//        this.smallRegion = smallRegion;
//    }

    public Article toEntity() {
        return Article.builder()
                .title(title)
                .content(content)
                .userId(userId)
                .smallRegion(smallRegion)
                .build();
    }



}
