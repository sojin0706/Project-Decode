package com.ssafy.escapesvr.controller;

import com.ssafy.escapesvr.dto.StoreAndThemeResponseDto;
import com.ssafy.escapesvr.dto.ThemeReviewResponseDto;
import com.ssafy.escapesvr.service.ThemeReviewService;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/review")
public class ThemeReviewController {

    @Autowired
    ThemeReviewService themeReviewService;

    //테마에 해당하는 리뷰
    @GetMapping("/{themeId}")
    public ResponseEntity<Map<String, Object>> getDetail(@PathVariable @ApiParam( value="테마 아이디",required = true) Integer themeId, @PageableDefault(sort="createdAt",direction = Sort.Direction.DESC,size=5) Pageable pageable) {
        Map<String, Object> result = new HashMap<>();
        HttpStatus httpStatus = null;
        List<ThemeReviewResponseDto> reviews=new ArrayList<>();
        try {
            //리뷰리스트에 대한 정보
            reviews=themeReviewService.getReview(themeId,pageable);
            // 그 테마 아이디에 해당하는 리뷰들을 리스트형태로 가지고와서 -> 리뷰에서 만들어주기
            httpStatus = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;

        }
        result.put("review",reviews);

        return new ResponseEntity<Map<String, Object>>(result, httpStatus);
    }
}
