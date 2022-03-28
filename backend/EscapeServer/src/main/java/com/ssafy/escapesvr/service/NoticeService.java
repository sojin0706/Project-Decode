package com.ssafy.escapesvr.service;


import com.ssafy.escapesvr.dto.NoticeRequestDto;
import com.ssafy.escapesvr.dto.NoticeResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface NoticeService {

    void insertNotice(NoticeRequestDto noticeRequestDto) throws Exception;
    void updateNotice(NoticeRequestDto noticeRequestDto);
    void deleteNotice(Long noticeId);

    Page<NoticeResponseDto> getMyNoticeList(Integer userId, Pageable pageable);
    Page<NoticeResponseDto> getNoticeList(Pageable pageable);
}
