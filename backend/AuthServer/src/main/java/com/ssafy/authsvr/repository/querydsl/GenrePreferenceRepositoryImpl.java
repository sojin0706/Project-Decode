package com.ssafy.authsvr.repository.querydsl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.authsvr.entity.GenrePreference;
import com.ssafy.authsvr.entity.QGenrePreference;
import com.ssafy.authsvr.entity.QUser;
import com.ssafy.authsvr.entity.User;
import javax.persistence.EntityManager;
import java.util.List;

public class GenrePreferenceRepositoryImpl implements GenrePreferenceRepositoryCustom {
    private static final QUser qUser = QUser.user;
    private static final QGenrePreference qGenrePreference = QGenrePreference.genrePreference;

    private final JPAQueryFactory queryFactory;

    public GenrePreferenceRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<GenrePreference> findByUserGenrePreference(Integer id) {
        return queryFactory
                .select(qGenrePreference)
                .from(qGenrePreference)
                .innerJoin(qGenrePreference.user,qUser)
                .fetchJoin()
                .where(qUser.genrePreference.eq(id))
                .fetch();
    }
}
