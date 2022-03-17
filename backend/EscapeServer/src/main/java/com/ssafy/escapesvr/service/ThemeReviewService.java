package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.MyReviewResponseDto;
import com.ssafy.escapesvr.dto.ReviewRequestDto;
import com.ssafy.escapesvr.dto.ThemeReviewResponseDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ThemeReviewService {
   List<ThemeReviewResponseDto> getThemeReviewList(Integer themeId,Pageable pageable);
   List<MyReviewResponseDto> getMyReviewList(Integer userId,Pageable pageable);
   void insertReview(ReviewRequestDto reviewRequestDto);
   void deleteReview(Integer themeReviewId);
}
