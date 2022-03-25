package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.MyReviewResponseDto;
import com.ssafy.escapesvr.dto.PosterResponseDto;
import com.ssafy.escapesvr.dto.ReviewRequestDto;
import com.ssafy.escapesvr.dto.ThemeReviewResponseDto;
import com.ssafy.escapesvr.entity.ThemeReview;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

public interface ThemeReviewService {
   Page<ThemeReviewResponseDto> getThemeReviewList(Integer themeId, Pageable pageable);

   Page<MyReviewResponseDto> getMyReviewList(Integer userId,Pageable pageable);
   Map<String,Integer> getMyGenre(Integer userId);
   void insertReview(ReviewRequestDto reviewRequestDto);
   void deleteReview(Integer themeReviewId);
   Page<PosterResponseDto>getPosters(Integer userId, Pageable pageable);
}
