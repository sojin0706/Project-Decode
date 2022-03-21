package com.ssafy.escapesvr.service;


import com.ssafy.escapesvr.client.UserServiceClient;
import com.ssafy.escapesvr.dto.ProfileRequestDto;
import com.ssafy.escapesvr.dto.QnaCommentRequestDto;
import com.ssafy.escapesvr.dto.QnaCommentResponseDto;
import com.ssafy.escapesvr.entity.QnaComment;
import com.ssafy.escapesvr.entity.QnaNotice;
import com.ssafy.escapesvr.repository.QnaCommentRepository;
import com.ssafy.escapesvr.repository.QnaNoticeRepository;
import feign.FeignException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class QnaCommentServiceImpl implements QnaCommentService {

    private final QnaNoticeRepository qnaNoticeRepository;
    private final QnaCommentRepository qnaCommentRepository;
    private final UserServiceClient userServiceClient;

    //게시글 별 댓글 조회
    @Override
    public List<QnaCommentResponseDto> getQnaCommentList(Long qnaNoticeId) {
        QnaNotice qnaNotice = qnaNoticeRepository.getById(qnaNoticeId);
        List<QnaComment> comments = qnaCommentRepository.findByQnaNotice(qnaNotice);
        return comments.stream().map(QnaCommentResponseDto::new).collect(Collectors.toList());
    }

    //회원 별 댓글 조회
    @Override
    public List<QnaCommentResponseDto> getMyQnaCommentList(Integer userId, Pageable pageable) {
        List<QnaComment> myQnaComments = qnaCommentRepository.findByUserIdOrderByCreatedAtDesc(userId);
        return myQnaComments.stream().map(QnaCommentResponseDto::new).collect(Collectors.toList());
    }

    //댓글 작성
    @Transactional
    @Override
    public void insertQnaComment(QnaCommentRequestDto qnaCommentRequestDto) {
        QnaNotice qnaNotice = qnaNoticeRepository.getById(qnaCommentRequestDto.getQnaNoticeId());

        QnaComment qnaComment = new QnaComment();
        qnaComment.setContent(qnaCommentRequestDto.getContent());
        qnaComment.setCreatedAt(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime());
        qnaComment.setQnaNotice(qnaNotice);
        qnaComment.setUserId(qnaCommentRequestDto.getUserId());

        try{
            ProfileRequestDto profileRequestDto = userServiceClient.userFindProfile(qnaCommentRequestDto.getUserId());
            qnaComment.setNickName(profileRequestDto.getNickName());
            qnaComment.setUserImage(profileRequestDto.getImage());
        }catch (FeignException e){
            e.printStackTrace();
        }



        qnaCommentRepository.save(qnaComment);
    }

    //댓글 수정
    @Transactional
    @Override
    public void updateQnaComment(QnaCommentRequestDto qnaCommentRequestDto) {
        QnaComment qnaComment = qnaCommentRepository.getById(qnaCommentRequestDto.getId());
        qnaComment.setContent(qnaCommentRequestDto.getContent());
        qnaComment.setModifiedAt(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime());
        qnaCommentRepository.save(qnaComment);
    }

    //댓글 삭제
    @Transactional
    @Override
    public void deleteQnaComment(Long qnaCommentId) {
        qnaCommentRepository.deleteById(qnaCommentId);
    }
}
