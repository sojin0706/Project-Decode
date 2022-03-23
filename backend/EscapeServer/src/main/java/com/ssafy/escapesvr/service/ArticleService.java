package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.ArticleRequestDto;
import com.ssafy.escapesvr.dto.ArticleResponseDto;
import com.ssafy.escapesvr.dto.SearchDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ArticleService {

    ArticleResponseDto save(ArticleRequestDto articleRequestDto); //게시글 저장
    ArticleResponseDto getArticle(Long id);//하나의 게시글 조회
    Page<ArticleResponseDto> getMyArticleList(Integer userId, Pageable pageable); //회원 별 게시글 조회
    ArticleResponseDto updateArticle(ArticleRequestDto articleRequestDto, Long id); //게시글 수정
    void deleteArticle(Long id); //게시글 아이디로 게시글 삭제
    Integer recommendArticle(Long id); //게시글 아이디로 추천 수 증가
    Integer reportArticle(Long id); //게시글 아이디로 신고 수 증가

    List<ArticleResponseDto> postList(String smallRegion, SearchDto searchDto);
}
