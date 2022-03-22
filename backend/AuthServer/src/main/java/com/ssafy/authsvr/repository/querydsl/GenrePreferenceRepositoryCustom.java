package com.ssafy.authsvr.repository.querydsl;

import com.ssafy.authsvr.entity.GenrePreference;
import com.ssafy.authsvr.entity.User;
import java.util.List;

public interface GenrePreferenceRepositoryCustom {
    List<GenrePreference> findByUserGenrePreference(Integer id);

}
