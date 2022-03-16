package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.ArticleCommentRequestDto;
import com.ssafy.escapesvr.dto.ArticleCommentResponseDto;

import java.util.List;

public interface ArticleCommentService {

    List<ArticleCommentResponseDto> getArticleCommentList(Long articleId);
    void insertArticleComment(ArticleCommentRequestDto articleCommentRequestDto);
    void updateArticleComment(ArticleCommentRequestDto articlecommentRequestDto);
    void deleteArticleComment(Long commentId);

}
