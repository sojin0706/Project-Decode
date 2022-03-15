package com.ssafy.escapesvr.controller;


import com.ssafy.escapesvr.dto.ArticleRequestDto;
import com.ssafy.escapesvr.dto.ArticleResponseDto;
import com.ssafy.escapesvr.service.ArticleServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ArticleController {
    //공지게시판 컨트롤러

    private final ArticleServiceImpl articleService;

//    //게시글생성
//    @PostMapping("/article")
//    public Long save(@RequestBody final ArticleRequestDto params) {
//        return articleService.save(params);
//    }

    //게시글생성
    @PostMapping("/article")
    public ResponseEntity<Map<String, Object>> save(@RequestBody ArticleRequestDto articleRequestDto) {
        Map<String, Object> result = new HashMap<>();
        HttpStatus httpStatus = null;
        try {
            ArticleResponseDto articleResponseDto = articleService.save(articleRequestDto);
            httpStatus = HttpStatus.OK;
            result.put("article", articleResponseDto);
            result.put("success", true);
        } catch (RuntimeException e) {
            e.printStackTrace();
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
            result.put("success", false);
        }
        return new ResponseEntity<Map<String, Object>>(result, httpStatus);
    }

//    //게시글 전체 조회
//    @GetMapping("/article")
//    public List<ArticleResponseDto> findAll() {
//        return articleService.findAll();
//    }

    //게시글 전체 조회
    @GetMapping("/article")
    public ResponseEntity<Map<String, Object>>  findAll() {

        Map<String, Object> result = new HashMap<>();
        List<ArticleResponseDto> articleList = null;
        HttpStatus httpStatus = null;

        try {
            articleList = articleService.findAll();
            httpStatus = HttpStatus.OK;
            result.put("success", true);

        } catch (RuntimeException e) {
            e.printStackTrace();
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
            result.put("success", false);

        }

        result.put("articleList", articleList);

        return new ResponseEntity<Map<String, Object>>(result, httpStatus);

    }


    // 해당 게시물 조회
    @GetMapping("/article/{id}")
    public ResponseEntity<Map<String, Object>> getArticle(@PathVariable Long id) {

        Map<String, Object> result = new HashMap<>();
        HttpStatus httpStatus = null;
        ArticleResponseDto article = null;

        try {
            article = articleService.getArticle(id);
            httpStatus = HttpStatus.OK;
            result.put("success", true);

        } catch (RuntimeException e) {
            e.printStackTrace();
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
            result.put("success", false);

        }
        result.put("article", article);
        return new ResponseEntity<Map<String, Object>>(result, httpStatus);

    }


//    //게시글수정
//    @PutMapping ("/article/{id}")
//    public Long save(@PathVariable final Long id, @RequestBody final ArticleRequestDto params) {
//        return articleService.update(id, params);
//    }

    //게시글수정
    @PutMapping ("/article/{id}")
    public ResponseEntity<Map<String, Object>> updateArticle(@PathVariable final Long id, @RequestBody final ArticleRequestDto articleRequestDto) {
    //수정할 게시글 아이디, 게시글 정보

        Map<String, Object> result = new HashMap<>();
        HttpStatus httpStatus = null;
        try {
            ArticleResponseDto articleResponseDto = articleService.updateArticle(articleRequestDto, id);

            httpStatus = HttpStatus.OK;
            result.put("article", articleResponseDto);
            result.put("success", true);
        } catch (RuntimeException  e) {
            e.printStackTrace();
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
            result.put("success", false);
        }
        return new ResponseEntity<Map<String, Object>>(result, httpStatus);

    }


    //게시글 삭제
    @DeleteMapping("/article/{id}")
    public ResponseEntity<Map<String, Object>> deleteArticle(@PathVariable final Long id) {
        Map<String, Object> result = new HashMap<>();
        HttpStatus httpStatus = null;
        try {
            articleService.deleteArticle(id);

            httpStatus = HttpStatus.OK;
            result.put("success", true);
        } catch (RuntimeException e) {
            e.printStackTrace();
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
            result.put("success", false);
        }
        return new ResponseEntity<Map<String, Object>>(result, httpStatus);
    }



}
