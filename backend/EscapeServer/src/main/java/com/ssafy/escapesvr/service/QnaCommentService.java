package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.QnaCommentRequestDto;
import com.ssafy.escapesvr.dto.QnaCommentResponseDto;

import java.util.List;

public interface QnaCommentService {

    List<QnaCommentResponseDto> getQnaCommentList(Long qnaNoticeId);
    void insertQnaComment(QnaCommentRequestDto qnaCommentRequestDto);
    void updateQnaComment(QnaCommentRequestDto qnaCommentRequestDto);
    void deleteQnaComment(Long qnaCommentId);

}
