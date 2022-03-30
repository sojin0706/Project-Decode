package com.ssafy.escapesvr.service;


import com.ssafy.escapesvr.dto.NoticeRequestDto;
import com.ssafy.escapesvr.dto.NoticeResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface NoticeService {

    void insertNotice(NoticeRequestDto noticeRequestDto) throws Exception;
    void updateNotice(NoticeRequestDto noticeRequestDto, Long id);
    void deleteNotice(Long id);

    Page<NoticeResponseDto> getMyNoticeList(Integer userId, Pageable pageable);
    Page<NoticeResponseDto> getNoticeList(Pageable pageable);

    NoticeResponseDto getNotice(Long id);
}
