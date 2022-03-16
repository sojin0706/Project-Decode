package com.ssafy.escapesvr.dto;


import com.ssafy.escapesvr.entity.Article;
import com.ssafy.escapesvr.entity.ArticleComment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleCommentRequestDto {

    private Long id; //댓글 번호

    private String content; //댓글 내용

    private Long articleId; //게시글 번호

    private Integer userId; //사용자 id

    public ArticleCommentRequestDto(ArticleComment articleComment){
        this.id = articleComment.getId();
        this.content = articleComment.getContent();
        this.articleId = articleComment.getArticle().getId();
        this.userId = articleComment.getUserId();
    }

//    public ArticleComment toEntity() {
//        return Article.builder()
//                .content(content)
//                .userId(userId)
//                .build();
//    }


}
