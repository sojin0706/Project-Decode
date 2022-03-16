package com.ssafy.escapesvr.controller;


import com.ssafy.escapesvr.dto.ArticleCommentRequestDto;
import com.ssafy.escapesvr.dto.ArticleCommentResponseDto;
import com.ssafy.escapesvr.service.ArticleCommentService;
import com.ssafy.escapesvr.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ArticleCommentController {

    private final ArticleCommentService articleCommentService;

    private final ArticleService articleService;


    //댓글 작성
    @PostMapping("/comment")
    public ResponseEntity<String> insertArticleComment(@RequestBody ArticleCommentRequestDto articleCommentRequestDto) {
        HttpStatus status = null;
        try {
            articleCommentService.insertArticleComment(articleCommentRequestDto);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(status);
    }

    // 게시글 댓글 조회
    @GetMapping("/comment")
    public ResponseEntity<Map<String, Object>> getArticleCommentList(@RequestParam("articleId") Long articleId) {

        Map<String, Object> result = new HashMap<>();
        List<ArticleCommentResponseDto> articleCommentList = null;
        HttpStatus status = null;
        try {
            articleCommentList = articleCommentService.getArticleCommentList(articleId);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        result.put("commentList", articleCommentList);

        return new ResponseEntity<>(result, status);
    }

    //댓글 수정
    @PutMapping("/comment")
    public ResponseEntity<String> updateArticleComment(@RequestBody ArticleCommentRequestDto articleCommentRequestDto) {
        HttpStatus status = null;
        try {
            articleCommentService.updateArticleComment(articleCommentRequestDto);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(status);
    }

    //댓글 삭제
    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity<String> deleteArticleComment(@PathVariable("commentId") Long commentId) {
        HttpStatus status = null;
        try {
            articleCommentService.deleteArticleComment(commentId);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(status);
    }




}
