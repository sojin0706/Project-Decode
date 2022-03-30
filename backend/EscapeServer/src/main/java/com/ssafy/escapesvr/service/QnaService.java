package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.QnaRequestDto;
import com.ssafy.escapesvr.dto.QnaResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface QnaService {

    void insertQna(QnaRequestDto qnaRequestDto) throws Exception;
    void updateQna(QnaRequestDto qnaRequestDto, Long id);
    void deleteQna(Long id);

    Page<QnaResponseDto> getMyQnaList(Integer userId, Pageable pageable);
    //List<QnaResponseDto> getQnaList();
    Page<QnaResponseDto> getQnaList(Pageable pageable);

    QnaResponseDto getQna(Long id);
}
