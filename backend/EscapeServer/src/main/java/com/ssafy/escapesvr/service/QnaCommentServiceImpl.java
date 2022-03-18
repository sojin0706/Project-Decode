package com.ssafy.escapesvr.service;


import com.ssafy.escapesvr.dto.QnaCommentRequestDto;
import com.ssafy.escapesvr.dto.QnaCommentResponseDto;
import com.ssafy.escapesvr.entity.QnaComment;
import com.ssafy.escapesvr.entity.QnaNotice;
import com.ssafy.escapesvr.repository.QnaCommentRepository;
import com.ssafy.escapesvr.repository.QnaNoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class QnaCommentServiceImpl implements QnaCommentService {

    private final QnaNoticeRepository qnaNoticeRepository;
    private final QnaCommentRepository qnaCommentRepository;

    //댓글 조회
    @Override
    public List<QnaCommentResponseDto> getQnaCommentList(Long qnaNoticeId) {
        QnaNotice qnaNotice = qnaNoticeRepository.getById(qnaNoticeId);
        List<QnaComment> comments = qnaCommentRepository.findByQnaNotice(qnaNotice);
        return comments.stream().map(QnaCommentResponseDto::new).collect(Collectors.toList());
    }

    //댓글 작성
    @Override
    public void insertQnaComment(QnaCommentRequestDto qnaCommentRequestDto) {
        QnaNotice qnaNotice = qnaNoticeRepository.getById(qnaCommentRequestDto.getQnaNoticeId());

        QnaComment qnaComment = new QnaComment();
        qnaComment.setContent(qnaCommentRequestDto.getContent());
        qnaComment.setCreatedAt(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime());
        qnaComment.setQnaNotice(qnaNotice);
        qnaComment.setUserId(qnaCommentRequestDto.getUserId());
        qnaCommentRepository.save(qnaComment);
    }

    //댓글 수정
    @Override
    public void updateQnaComment(QnaCommentRequestDto qnaCommentRequestDto) {
        QnaComment qnaComment = qnaCommentRepository.getById(qnaCommentRequestDto.getId());
        qnaComment.setContent(qnaCommentRequestDto.getContent());
        qnaComment.setModifiedAt(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime());
        qnaCommentRepository.save(qnaComment);
    }

    //댓글 삭제
    @Override
    public void deleteQnaComment(Long qnaCommentId) {
        qnaCommentRepository.deleteById(qnaCommentId);
    }
}
