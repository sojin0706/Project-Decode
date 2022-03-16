package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.ThemeReviewResponseDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ThemeReviewService {
   List<ThemeReviewResponseDto> getReview(Integer themeId,Pageable pageable);
}
