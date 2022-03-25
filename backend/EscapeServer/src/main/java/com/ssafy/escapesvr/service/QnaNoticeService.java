package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.QnaNoticeRequestDto;
import com.ssafy.escapesvr.dto.QnaNoticeResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;

public interface QnaNoticeService {

    void insertQnaNotice(QnaNoticeRequestDto qnaNoticeRequestDto) throws Exception;
    void updateQnaNotice(QnaNoticeRequestDto qnaNoticeRequestDto);
    void deleteQnaNotice(Long qnaId);

    Page<QnaNoticeResponseDto> getMyQnaList(Integer userId, Pageable pageable);
    //List<QnaNoticeResponseDto> getQnaNoticeList();
    Page<QnaNoticeResponseDto> getQnaNoticeList(Pageable pageable);
}
