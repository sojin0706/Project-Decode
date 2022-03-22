package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.client.UserServiceClient;
import com.ssafy.escapesvr.dto.MyReviewResponseDto;
import com.ssafy.escapesvr.dto.ReviewRequestDto;
import com.ssafy.escapesvr.dto.ThemeReviewResponseDto;
import com.ssafy.escapesvr.entity.Theme;
import com.ssafy.escapesvr.entity.ThemeReview;
import com.ssafy.escapesvr.repository.ThemeRepository;
import com.ssafy.escapesvr.repository.ThemeReviewRepository;
import feign.FeignException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional(readOnly = true)
public class ThemeReviewServiceImpl implements ThemeReviewService{

    @Autowired
    ThemeRepository themeRepo;

    @Autowired
    ThemeReviewRepository themeReviewRepo;

    @Autowired
    UserServiceClient userServiceClient;

    //테마의 리뷰리스트
    @Override
    public Page<ThemeReviewResponseDto> getThemeReviewList(Integer themeId, Pageable pageable) {

        Theme theme=themeRepo.getById(themeId);
        Page<ThemeReview>reviews=themeReviewRepo.findByTheme(theme,pageable);
        Page<ThemeReviewResponseDto> themelist=reviews.map(
                o-> new ThemeReviewResponseDto(o.getId(),o.getUserId(),o.getUserNickName(),o.getMyScore(),o.getReviewContent(),o.getCreatedAt(),o.getClearTime()));
        return themelist;
    }

    //auth로 전달- 내가 작성한 리뷰리스트
    @Override
    public Page<MyReviewResponseDto> getMyReviewList(Integer userId, Pageable pageable) {
        List<ThemeReview>reviews=themeReviewRepo.findAllByUserId(userId,pageable);
        List<MyReviewResponseDto> myReviewResponseDtos=new ArrayList<>();
        List<ThemeReview>findcnts=themeReviewRepo.findAllByUserId(userId);
        int cnt=findcnts.size();
        for (ThemeReview review : reviews) {
            Theme theme=review.getTheme();
            MyReviewResponseDto reviewDto=new MyReviewResponseDto(review,theme);
            myReviewResponseDtos.add(reviewDto);
        }
        return new PageImpl<>(myReviewResponseDtos, pageable,cnt);
    }

    // auth로 전달- 내가 깬 장르
    @Override
    public Map<String, Integer> getMyGenre(Integer userId) {
        List<ThemeReview>reviews=themeReviewRepo.findAllByUserId(userId);
        Map<String,Integer>genres=new HashMap<>();
        for (ThemeReview review : reviews) {
            Theme theme=review.getTheme();
            String genre=theme.getGenre();
            // 있으면 기존의것에+1 없으면 그냥 1
            genres.put(genre, genres.containsKey(genre) ? genres.get(genre) + 1 : 1);
        }
        return genres;
    }

    // 포스터
    @Override
    public List<String> getPosters(Integer userId) {
        List<ThemeReview>reviews=themeReviewRepo.findAllByUserId(userId);
        List<String>posters=new ArrayList<>();
        for (ThemeReview review : reviews) {
            Theme theme=review.getTheme();
            posters.add(theme.getPosterUrl());

        }
        return posters;
    }


    //리뷰 작성
    @Override
    @Transactional
    public void insertReview(ReviewRequestDto reviewRequestDto) {
        ThemeReview themeReview=new ThemeReview();
        Theme theme=themeRepo.getById(reviewRequestDto.getThemeId());

        themeReview.setUserId(reviewRequestDto.getUserId());
        // reviewRequestDto의 userId를 이용해서 nickname을 구해온 후, 저장
//        themeReview.setUserNickName("임시 저장");
        try{
            String nickname = userServiceClient.userFindNickName(reviewRequestDto.getUserId());
            themeReview.setUserNickName(nickname);
        }catch (FeignException e){
            e.printStackTrace();
        }

        themeReview.setMyScore(reviewRequestDto.getMyScore());
        themeReview.setClearTime(reviewRequestDto.getClearTime());
        themeReview.setReviewContent(reviewRequestDto.getReviewContent());
        themeReview.setCreatedAt(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime());
        //리뷰 개수는 1 증가
        theme.setReviewCnt(theme.getReviewCnt()+1);
        //테마 score 재계산
        theme.setScore((theme.getScore()*theme.getReviewCnt()+ reviewRequestDto.getMyScore())/(theme.getReviewCnt()+1));
        themeReview.setTheme(theme);

        //저장
        themeReviewRepo.save(themeReview);
        themeRepo.save(theme);
    }

    //리뷰 삭제
    @Override
    @Transactional
    public void deleteReview(Integer themeReviewId) {
        ThemeReview themeReview=themeReviewRepo.getById(themeReviewId);
        Theme theme=themeReview.getTheme();

        //테마의 리뷰 되돌려놓기
        theme.setReviewCnt(theme.getReviewCnt()-1);
        theme.setScore((theme.getScore()*theme.getReviewCnt()- themeReview.getMyScore())/(theme.getReviewCnt()-1));

        //리뷰 지우기
        themeReviewRepo.deleteById(themeReviewId);

        //저장
        themeRepo.save(theme);

    }


}
