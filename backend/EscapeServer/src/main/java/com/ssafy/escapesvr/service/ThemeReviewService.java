package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.MyReviewResponseDto;
import com.ssafy.escapesvr.dto.ReviewRequestDto;
import com.ssafy.escapesvr.dto.ThemeReviewResponseDto;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

public interface ThemeReviewService {
   List<ThemeReviewResponseDto> getThemeReviewList(Integer themeId,Pageable pageable);
   List<MyReviewResponseDto> getMyReviewList(Integer userId,Pageable pageable);
   Map<String,Integer> getMyGenre(Integer userId);
   void insertReview(ReviewRequestDto reviewRequestDto);
   void deleteReview(Integer themeReviewId);
   List<String>getPosters(Integer userId);
}
