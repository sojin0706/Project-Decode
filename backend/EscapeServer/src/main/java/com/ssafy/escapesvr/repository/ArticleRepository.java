package com.ssafy.escapesvr.repository;

import com.ssafy.escapesvr.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ArticleRepository extends JpaRepository<Article, Long> {

}
