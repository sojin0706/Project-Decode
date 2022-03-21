package com.ssafy.escapesvr.controller;


import com.ssafy.escapesvr.dto.ArticleCommentRequestDto;
import com.ssafy.escapesvr.dto.ArticleCommentResponseDto;
import com.ssafy.escapesvr.service.ArticleCommentService;
import com.ssafy.escapesvr.service.ArticleService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/comment")
@Api("유저게시판 댓글 컨트롤러")
public class ArticleCommentController {

    private final ArticleCommentService articleCommentService;

    private final ArticleService articleService;


    //댓글 작성
    @ApiOperation(value = "유저게시글 댓글 작성", notes = "게시글에 댓글을 작성한다", response = Map.class)
    @PostMapping
    public ResponseEntity<String> insertArticleComment(@RequestBody @ApiParam(value = "댓글 작성 모델")  @Valid ArticleCommentRequestDto articleCommentRequestDto) {
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

    //해당 게시글의 모든 댓글 조회
    @ApiOperation(value = "유저게시글 댓글 조회", notes = "해당 게시글(articleId)의 모든 댓글을 조회한다", response = Map.class)
    @GetMapping
    public ResponseEntity<Map<String, Object>> getArticleCommentList(@RequestParam("articleId") @ApiParam(value = "게시글 번호", required = true) Long articleId) {

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

    //자신이 쓴 유저게시판 댓글 조회
    @ApiOperation(value = "자신이 쓴 유저게시판 댓글 리스트", notes = "자신이 쓴 유저게시판 댓글 리스트을 반환한다.")
    @GetMapping("/profile/{userId}")
    public ResponseEntity<Map<String, Object>> getMyArticleCommentList(@PathVariable("userId") @ApiParam(value = "회원번호") Integer userId, @PageableDefault(sort="createdAt",direction = Sort.Direction.DESC,size=5) Pageable pageable) {

        Map<String, Object> result = new HashMap<>();
        List<ArticleCommentResponseDto> myArticleCommentList = null;
        HttpStatus status = null;
        try {
            myArticleCommentList = articleCommentService.getMyArticleCommentList(userId, pageable);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        result.put("myArticleCommentList",myArticleCommentList);

        return new ResponseEntity<>(result, status);
    }


    //댓글 수정
    @ApiOperation(value = "유저게시글 댓글 수정", notes = "댓글(commentId가 일치하는)을 수정한다", response = Map.class)
    @PutMapping
    public ResponseEntity<String> updateArticleComment(@RequestBody @ApiParam(value = "댓글 수정 모델") @Valid ArticleCommentRequestDto articleCommentRequestDto) {
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
    @ApiOperation(value = "유저게시글 댓글 삭제", notes = "댓글(commentId가 일치하는)을 삭제한다", response = Map.class)
    @DeleteMapping("{commentId}")
    public ResponseEntity<String> deleteArticleComment(@PathVariable("commentId") @ApiParam(value = "댓글 번호", required = true) Long commentId) {

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
