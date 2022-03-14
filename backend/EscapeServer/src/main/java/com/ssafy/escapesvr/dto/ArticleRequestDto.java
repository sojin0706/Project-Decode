package com.ssafy.escapesvr.dto;

import com.ssafy.escapesvr.entity.Article;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
//@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleRequestDto {
    //게시글의 생성과 수정을 처리할 요청(Request) DTO 클래스

    private String title; //제목
    private String content; //내용
    private Integer userId; //작성자
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
