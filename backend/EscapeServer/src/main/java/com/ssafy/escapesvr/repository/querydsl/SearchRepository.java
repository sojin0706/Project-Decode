package com.ssafy.escapesvr.repository.querydsl;

import com.ssafy.escapesvr.entity.Article;

import java.util.List;

public interface SearchRepository {

    List<Article> findPageDynamicQuery(String largeRegion ,String smallRegion);

}
