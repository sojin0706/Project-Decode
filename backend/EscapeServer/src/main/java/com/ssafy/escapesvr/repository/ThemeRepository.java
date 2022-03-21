package com.ssafy.escapesvr.repository;

import com.ssafy.escapesvr.entity.Theme;
import com.ssafy.escapesvr.repository.querydsl.InformationRepository;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThemeRepository extends JpaRepository<Theme,Integer>, InformationRepository {
}
