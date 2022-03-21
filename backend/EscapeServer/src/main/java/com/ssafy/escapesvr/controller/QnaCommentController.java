package com.ssafy.escapesvr.controller;


import com.ssafy.escapesvr.dto.QnaCommentRequestDto;
import com.ssafy.escapesvr.dto.QnaCommentResponseDto;
import com.ssafy.escapesvr.service.QnaCommentService;
import com.ssafy.escapesvr.service.QnaNoticeService;
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

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/qnaComment")
@Api("Qna 게시판 댓글 컨트롤러")
public class QnaCommentController {

    private final QnaCommentService qnaCommentService;

    private final QnaNoticeService qnaNoticeService;


    //댓글 작성
    @ApiOperation(value = "Qna 게시글 댓글 작성", notes = "게시글에 댓글을 작성한다", response = Map.class)
    @PostMapping
    public ResponseEntity<String> insertQnaComment(@RequestBody @ApiParam(value = "댓글 작성 모델") QnaCommentRequestDto qnaCommentRequestDto) {
        HttpStatus status = null;
        try {
            qnaCommentService.insertQnaComment(qnaCommentRequestDto);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(status);
    }

    // 게시글 댓글 조회
    @ApiOperation(value = "Qna 게시글 댓글 조회", notes = "해당 게시글(qnaNoticeId)의 모든 댓글을 조회한다", response = Map.class)
    @GetMapping
    public ResponseEntity<Map<String, Object>> getQnaCommentList(@RequestParam("qnaNoticeId") @ApiParam(value = "게시글 번호", required = true) Long qnaNoticeId) {

        Map<String, Object> result = new HashMap<>();
        List<QnaCommentResponseDto> qnaCommentList = null;
        HttpStatus status = null;
        try {
            qnaCommentList = qnaCommentService.getQnaCommentList(qnaNoticeId);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        result.put("commentList", qnaCommentList);

        return new ResponseEntity<>(result, status);
    }

    //자신이 쓴 댓글 조회
    @ApiOperation(value = "자신이 쓴 qna/공지 댓글 리스트", notes = "자신이 쓴 qna/공지 댓글 리스트을 반환한다.")
    @GetMapping("/profile/{userId}")
    public ResponseEntity<Map<String, Object>> getMyQnaCommentList(@PathVariable("userId") @ApiParam(value = "회원번호") Integer userId, @PageableDefault(sort="createdAt",direction = Sort.Direction.DESC,size=5) Pageable pageable) {

        Map<String, Object> result = new HashMap<>();
        List<QnaCommentResponseDto> myQnaCommentList = null;
        HttpStatus status = null;
        try {
            myQnaCommentList = qnaCommentService.getMyQnaCommentList(userId, pageable);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        result.put("myQnaCommentList",myQnaCommentList);

        return new ResponseEntity<>(result, status);
    }

    //댓글 수정
    @ApiOperation(value = "Qna 게시글 댓글 수정", notes = "댓글(qnaCommentId가 일치하는)을 수정한다", response = Map.class)
    @PutMapping
    public ResponseEntity<String> updateQnaComment(@RequestBody @ApiParam(value = "댓글 수정 모델") QnaCommentRequestDto qnaCommentRequestDto) {
        HttpStatus status = null;
        try {
            qnaCommentService.updateQnaComment(qnaCommentRequestDto);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(status);
    }

    //댓글 삭제
    @ApiOperation(value = "Qna 게시글 댓글 삭제", notes = "댓글(qnaCommentId가 일치하는)을 삭제한다", response = Map.class)
    @DeleteMapping("/{qnaCommentId}")
    public ResponseEntity<String> deleteQnaComment(@PathVariable("qnaCommentId") @ApiParam(value = "댓글 번호", required = true) Long qnaCommentId) {
        HttpStatus status = null;
        try {
            qnaCommentService.deleteQnaComment(qnaCommentId);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(status);
    }


}
