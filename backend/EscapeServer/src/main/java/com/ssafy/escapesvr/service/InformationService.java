package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.StoreAndThemeResponseDto;
import com.ssafy.escapesvr.dto.ThemeResponseDto;

import java.util.List;


public interface InformationService {
    StoreAndThemeResponseDto getDetail(Integer themeId);
    List<ThemeResponseDto> getInformationList(String largeRegion, String smallRegion, String gerne, Integer maxCnt, Integer maxLevel, Integer minTime, Integer maxTime);
}
