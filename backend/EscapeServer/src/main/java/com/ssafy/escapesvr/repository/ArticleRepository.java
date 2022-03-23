package com.ssafy.escapesvr.repository;

import com.ssafy.escapesvr.entity.Article;
import com.ssafy.escapesvr.repository.querydsl.SearchRepository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ArticleRepository extends JpaRepository<Article, Long> , SearchRepository {

    List<Article> findByUserId(Integer userId);
}
