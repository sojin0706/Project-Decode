package com.ssafy.escapesvr.dto;

import com.ssafy.escapesvr.entity.Article;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class ArticleResponseDto {

    private Long id; // PK
    private String title; // 제목
    private String content; // 내용
    private String smallRegion; //지역
    private Integer userId; // 작성자

    private int recommend; // 추천개수
    private int report; // 신고수
    private LocalDateTime createdAt; //작성시간
    private LocalDateTime modifiedAt; //수정시간

    public ArticleResponseDto(Article entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.smallRegion = entity.getSmallRegion();
        this.recommend = entity.getRecommend();
        this.report = entity.getReport();
        this.userId = entity.getUserId();
        this.createdAt = entity.getCreatedAt();
        this.modifiedAt = entity.getModifiedAt();
    }

}
