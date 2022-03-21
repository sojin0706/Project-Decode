package com.ssafy.escapesvr.repository;

import com.ssafy.escapesvr.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ArticleRepository extends JpaRepository<Article, Long> {

    List<Article> findByUserId(Integer userId);
}
