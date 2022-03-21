package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.QnaNoticeRequestDto;
import com.ssafy.escapesvr.dto.QnaNoticeResponseDto;
import com.ssafy.escapesvr.entity.QnaNotice;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface QnaNoticeService {

    void insertQnaNotice(QnaNoticeRequestDto qnaNoticeRequestDto) throws Exception;
    void updateQnaNotice(QnaNoticeRequestDto qnaNoticeRequestDto);
    void deleteQnaNotice(Long qnaId);
    List<QnaNoticeResponseDto> getQnaNoticeList();
    List<QnaNoticeResponseDto> getMyQnaList(Integer userId, Pageable pageable);
}
