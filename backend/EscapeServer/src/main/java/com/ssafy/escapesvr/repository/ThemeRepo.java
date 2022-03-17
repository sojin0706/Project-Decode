package com.ssafy.escapesvr.repository;

import com.ssafy.escapesvr.entity.Theme;
import com.ssafy.escapesvr.repository.querydsl.InformationRepo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThemeRepo extends JpaRepository<Theme,Integer>, InformationRepo {

}
