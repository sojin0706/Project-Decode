package com.ssafy.escapesvr.service;

import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.escapesvr.dto.ArticleRequestDto;
import com.ssafy.escapesvr.dto.ArticleResponseDto;
import com.ssafy.escapesvr.entity.Article;
import com.ssafy.escapesvr.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ArticleServiceImpl implements ArticleService{

    private final ArticleRepository articleRepository;

    //게시글 생성
    @Override
    @Transactional
    public ArticleResponseDto save(final ArticleRequestDto articleRequestDto) {

        Article article = new Article();

        //유저정보에서 userid가져오기
        article.setUserId(articleRequestDto.getUserId());
        article.setTitle(articleRequestDto.getTitle());
        article.setContent(articleRequestDto.getTitle());
        article.setSmallRegion(articleRequestDto.getSmallRegion());
        article.setCreatedAt(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime());
        article.setRecommend(0);
        article.setReport(0);

        article = articleRepository.save(article);

        return new ArticleResponseDto(article);

    }

    //게시글 전체 조회
    public List<ArticleResponseDto> findAll() {

        Sort sort = Sort.by(Direction.DESC, "id", "createdAt");
        List<Article> list = articleRepository.findAll(sort);
        return list.stream().map(ArticleResponseDto::new).collect(Collectors.toList());

    }

    //해당 게시물 조회
    @Override
    @Transactional
    public ArticleResponseDto getArticle(Long id) {

        Article article = articleRepository.getById(id);
        ArticleResponseDto articleResponseDto = new ArticleResponseDto(article);

        return articleResponseDto;

    }

    //게시글 수정
    @Override
    @Transactional
    public ArticleResponseDto updateArticle(ArticleRequestDto articleRequestDto, Long id) {

        Article article = articleRepository.getById(id);

        article.setUserId(articleRequestDto.getUserId());
        article.setTitle(articleRequestDto.getTitle());
        article.setContent(articleRequestDto.getTitle());
        article.setSmallRegion(articleRequestDto.getSmallRegion());
        article.setCreatedAt(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime());
        article.setRecommend(0);
        article.setReport(0);

        article = articleRepository.save(article);

        return new ArticleResponseDto(article);
    }

    @Override
    @Transactional
    public void deleteArticle(Long id) {

        Article article = articleRepository.getById(id);

        //댓글 완성되면 연관 댓글도 삭제!

        articleRepository.deleteById(id);
    }

    // 추천 횟수 증가
    @Override
    public void recommendArticle(Long id) {

        Article article = articleRepository.getById(id);

        article.setRecommend((article.getRecommend()+1));
        article = articleRepository.save(article);

    }

    // 신고 횟수 증가
    @Override
    public void reportArticle(Long id) {

        Article article = articleRepository.getById(id);

        article.setRecommend((article.getReport()+1));
        article = articleRepository.save(article);

    }


}
