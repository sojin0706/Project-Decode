package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.ArticleCommentRequestDto;
import com.ssafy.escapesvr.dto.ArticleCommentResponseDto;
import com.ssafy.escapesvr.dto.QnaCommentResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ArticleCommentService {

    /* 조회 */
    List<ArticleCommentResponseDto> getArticleCommentList(Long articleId); //게시물 별 댓글 전체 조회
    Page<ArticleCommentResponseDto> getMyArticleCommentList(Integer userId, Pageable pageable); //회원 별 댓글 전체 조회
    Page<ArticleCommentResponseDto> getArticleComment(Pageable pageable); //댓글 전체 조회

    /* 저장, 수정, 삭제 */
    void insertArticleComment(ArticleCommentRequestDto articleCommentRequestDto);
    void updateArticleComment(ArticleCommentRequestDto articleCommentRequestDto, Long id);
    void deleteArticleComment(Long commentId);

}
