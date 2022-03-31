package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.ArticleCommentRequestDto;
import com.ssafy.escapesvr.dto.ArticleCommentResponseDto;
import com.ssafy.escapesvr.dto.QnaCommentResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ArticleCommentService {

    List<ArticleCommentResponseDto> getArticleCommentList(Long articleId);
    Page<ArticleCommentResponseDto> getMyArticleCommentList(Integer userId, Pageable pageable);
    void insertArticleComment(ArticleCommentRequestDto articleCommentRequestDto);
    void updateArticleComment(ArticleCommentRequestDto articleCommentRequestDto, Long id);
    void deleteArticleComment(Long commentId);

    Page<ArticleCommentResponseDto> getArticleComment(Pageable pageable);
}
