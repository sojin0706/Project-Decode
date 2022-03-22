package com.ssafy.escapesvr.repository.querydsl;

import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.escapesvr.dto.ArticleRequestDto;
import com.ssafy.escapesvr.dto.ArticleResponseDto;
import com.ssafy.escapesvr.dto.SearchDto;
import com.ssafy.escapesvr.entity.Article;
import com.ssafy.escapesvr.entity.QArticle;

import javax.persistence.EntityManager;
import java.util.List;

import static com.ssafy.escapesvr.entity.QArticle.article;

public class SearchRepositoryImpl implements SearchRepository {

    private static final QArticle qArticle= QArticle.article;

    private final JPAQueryFactory queryFactory;


    public SearchRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }


    @Override
    public List<Article> findPageDynamicQuery(SearchDto searchDto) {

        return queryFactory
                .select(qArticle)
                .from(qArticle)
                .where(searchDtoEq(searchDto))
                .orderBy(qArticle.createdAt.desc())
                .fetch();

    }

    private BooleanExpression searchDtoEq(SearchDto searchDto) {
        if(searchDto.getSearchKey()!=null && searchDto.getSearchValue()!=null){
            if(searchDto.getSearchKey().equals("제목")){
                return  article.title.contains((searchDto.getSearchValue()));
            }else if(searchDto.getSearchKey().equals("내용")){
                return article.content.contains(searchDto.getSearchValue());
            }else{
                //작성자
                return article.nickName.contains(searchDto.getSearchValue());
            }
        }
        return null;
    }
}
