package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.StoreAndThemeResponseDto;
import com.ssafy.escapesvr.dto.ThemeResponseDto;
import com.ssafy.escapesvr.entity.RecommendNumber;
import com.ssafy.escapesvr.entity.Store;
import com.ssafy.escapesvr.entity.Theme;
import com.ssafy.escapesvr.repository.ThemeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class InformationServiceImpl implements InformationService {

    @Autowired
    ThemeRepo themeRepo;


    //테마아이디로 상세페이지
    @Override
    public StoreAndThemeResponseDto getDetail(Integer themeId) {
        //테마
        Theme theme=themeRepo.getById(themeId);
        //가게
        Store store=theme.getStore();

        RecommendNumber recommendNumber=theme.getRecommendNumber();

        StoreAndThemeResponseDto storeAndThemeResponseDto=new StoreAndThemeResponseDto(theme,store,recommendNumber);

        return storeAndThemeResponseDto;
    }

    @Override
    public List<ThemeResponseDto> getInformationList(String largeRegion, String smallRegion, String gerne, Integer maxCnt, Integer maxLevel, Integer minTime, Integer maxTime) {

        // 1. 지역대분류/소분류/장르가 null일때 -> 인원수,난이도,시간으로 필터링

        // 2. 지역대분류/소분류가 null일때 -> 장르,인원수,난이도,시간으로 필터링

        // 3. 지역소분류가 null일때 -> 지역대분류,인원수,난이도,시간으로 필터링

        // 4. 지역 소분류,장르가 null 일때  -> 지역대분류,인원수,난이도,시간으로 필터링

        // 5. 장르가 null일때 -> 지역대분류,소분류,인원수,난이도,시간으로 필터링

        return null;
    }

}
