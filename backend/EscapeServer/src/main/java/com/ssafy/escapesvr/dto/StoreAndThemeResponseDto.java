package com.ssafy.escapesvr.dto;

import com.ssafy.escapesvr.entity.RecommendNumber;
import com.ssafy.escapesvr.entity.Store;
import com.ssafy.escapesvr.entity.Theme;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class StoreAndThemeResponseDto {
    //테마관련 테마아이디
    private Integer themeId;
    //포스터
    private String posterUrl;
    //난이드
    private Integer level;
    //장르
    private String genre;
    //최대인원수
    private Integer maxNumber;
    //시간
    private Integer time;

    //추천인원수
    private Integer numberIsTwo;

    private Integer numberIsThree;

    private Integer numberIsFour;

    private Integer numberIsFive;

    //store
    //지역 대분류
    private String largeRegion;
    //지역 소분류
    private String smallRegion;

    //가게 이름
    private String storeName;

    //사이트 url
    private String siteUrl;

    public StoreAndThemeResponseDto(Theme theme, Store store,RecommendNumber recommendNumber){
        themeId=theme.getId();
        posterUrl=theme.getPosterUrl();
        level=theme.getLevel();
        genre=theme.getGenre();
        maxNumber=theme.getMaxNumber();
        time=theme.getTime();
        numberIsTwo=recommendNumber.getNumberIsTwo();
        numberIsThree=recommendNumber.getNumberIsThree();
        numberIsFour=recommendNumber.getNumberIsFour();
        numberIsFive=recommendNumber.getNumberIsFive();
        storeName=store.getName();
        siteUrl=store.getSiteUrl();
        largeRegion=store.getLargeRegion();
        smallRegion=store.getSmallRegion();

    }

}
