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

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ArticleService {

    private final ArticleRepository articleRepository;

    //게시글 생성
    @Transactional
    public Long save(final ArticleRequestDto params) {

        Article entity = articleRepository.save(params.toEntity());
        return entity.getId();

    }

    //게시글 조회
    public List<ArticleResponseDto> findAll() {

        Sort sort = Sort.by(Direction.DESC, "id", "createdAt");
        List<Article> list = articleRepository.findAll(sort);
        return list.stream().map(ArticleResponseDto::new).collect(Collectors.toList());

    }

    //게시글 수정
    @Transactional
    public Long update(final Long id, final ArticleRequestDto params) {

        Article entity = articleRepository.findById(id).orElseThrow();
        entity.update(params.getTitle(), params.getContent(), params.getSmallRegion(), params.getUserId());
        return id;
        
    }
}
