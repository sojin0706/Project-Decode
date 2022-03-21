package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.QnaCommentRequestDto;
import com.ssafy.escapesvr.dto.QnaCommentResponseDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface QnaCommentService {

    List<QnaCommentResponseDto> getQnaCommentList(Long qnaNoticeId);
    List<QnaCommentResponseDto> getMyQnaCommentList(Integer userId, Pageable pageable);
    void insertQnaComment(QnaCommentRequestDto qnaCommentRequestDto);
    void updateQnaComment(QnaCommentRequestDto qnaCommentRequestDto);
    void deleteQnaComment(Long qnaCommentId);

}
