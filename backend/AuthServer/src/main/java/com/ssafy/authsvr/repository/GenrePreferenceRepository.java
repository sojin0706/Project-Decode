package com.ssafy.authsvr.repository;

import com.ssafy.authsvr.entity.GenrePreference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenrePreferenceRepository extends JpaRepository<GenrePreference,Integer> {
    GenrePreference findGenreById(Integer id);
}
