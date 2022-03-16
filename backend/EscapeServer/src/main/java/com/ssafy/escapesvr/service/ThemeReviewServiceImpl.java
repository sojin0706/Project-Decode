package com.ssafy.escapesvr.service;

import com.ssafy.escapesvr.dto.ThemeReviewResponseDto;
import com.ssafy.escapesvr.entity.Theme;
import com.ssafy.escapesvr.entity.ThemeReview;
import com.ssafy.escapesvr.repository.ThemeRepo;
import com.ssafy.escapesvr.repository.ThemeReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.List;

@Service
public class ThemeReviewServiceImpl implements ThemeReviewService{
    
    @Autowired
    ThemeRepo themeRepo;

    @Autowired
    ThemeReviewRepo themeReviewRepo;
    
    @Override
    public List<ThemeReviewResponseDto> getReview(Integer themeId,Pageable pageable) {

        Theme theme=themeRepo.getById(themeId);
        List<ThemeReview>reviews=themeReviewRepo.findByTheme(theme,pageable);
        List<ThemeReviewResponseDto> ThemeReviewResponseDto=new ArrayList<>();

        for (ThemeReview review : reviews) {
            ThemeReviewResponseDto reviewDto=new ThemeReviewResponseDto(review);
            ThemeReviewResponseDto.add(reviewDto);
        }
       return ThemeReviewResponseDto;
    }
}
