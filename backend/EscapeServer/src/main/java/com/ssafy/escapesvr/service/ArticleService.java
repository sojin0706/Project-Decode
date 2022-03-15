package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.ArticleRequestDto;
import com.ssafy.escapesvr.dto.ArticleResponseDto;

public interface ArticleService {

    ArticleResponseDto save(ArticleRequestDto articleRequestDto); //게시글 저장
    ArticleResponseDto getArticle(Long id);//게시글 조회
    ArticleResponseDto updateArticle(ArticleRequestDto articleRequestDto, Long id); //게시글 수정
    void deleteArticle(Long id); //게시글 아이디로 게시글 삭제


}
