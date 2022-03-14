package com.ssafy.escapesvr.controller;


import com.ssafy.escapesvr.dto.ArticleRequestDto;
import com.ssafy.escapesvr.dto.ArticleResponseDto;
import com.ssafy.escapesvr.entity.Article;
import com.ssafy.escapesvr.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class ArticleController {
    //공지게시판

    private final ArticleService boardService;

    //게시글생성
    @PostMapping("/article")
    public Long save(@RequestBody final ArticleRequestDto params) {
        return boardService.save(params);
    }

    //게시글조회
    @GetMapping("/article")
    public List<ArticleResponseDto> findAll() {
        return boardService.findAll();
    }

    //게시글수정
    @PutMapping ("/article/{id}")
    public Long save(@PathVariable final Long id, @RequestBody final ArticleRequestDto params) {
        return boardService.update(id, params);
    }



}
