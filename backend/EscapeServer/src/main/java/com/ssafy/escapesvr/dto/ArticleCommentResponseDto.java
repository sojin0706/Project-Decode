package com.ssafy.escapesvr.dto;


import com.ssafy.escapesvr.entity.ArticleComment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleCommentResponseDto {

    private Long id; //댓글 번호

    private String content; //댓글 내용

    private Integer userId; //댓글 작성자 id

    private LocalDateTime createdAt;//작성시간

    private LocalDateTime modifiedAt;//수정시간

    private Long articleId; //게시글 번호


    public ArticleCommentResponseDto(ArticleComment articleComment){
        this.id=articleComment.getId();
        this.content= articleComment.getContent();
        this.userId = articleComment.getUserId();
        this.createdAt = articleComment.getCreatedAt();
        this.modifiedAt = articleComment.getModifiedAt();
        this.articleId = articleComment.getArticle().getId();
    }


}
