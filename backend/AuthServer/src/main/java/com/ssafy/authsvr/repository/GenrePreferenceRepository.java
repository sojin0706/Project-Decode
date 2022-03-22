package com.ssafy.authsvr.repository;

import com.ssafy.authsvr.entity.GenrePreference;
import com.ssafy.authsvr.repository.querydsl.GenrePreferenceRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenrePreferenceRepository extends JpaRepository<GenrePreference,Integer>, GenrePreferenceRepositoryCustom {
}
