package com.ssafy.escapesvr.controller;

import com.ssafy.escapesvr.dto.StoreAndThemeResponseDto;
import com.ssafy.escapesvr.dto.ThemeResponseDto;
import com.ssafy.escapesvr.dto.ThemeReviewResponseDto;
import com.ssafy.escapesvr.service.InformationService;
import com.ssafy.escapesvr.service.ThemeReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/information")
//@Api("정보게시판 컨트롤러")
public class InformationController {

    @Autowired
    InformationService informationService;
    @Autowired
    ThemeReviewService themeReviewService;

 //       @ApiOperation(value = "정보게시판 리스트 조회", notes = "게시글 리스트를 쿼리스트링으로 받은 옵션에 따라 불러온다", response = Map.class)
    @GetMapping
    public ResponseEntity<Map<String, Object>> getInformationList(@RequestParam(required = false) String largeRegion,
                                                              @RequestParam(required = false)  String smallRegion,
                                                              @RequestParam(required = false) String gerne,
                                                              @RequestParam Integer maxCnt, @RequestParam Integer maxLevel, @RequestParam Integer minTime, @RequestParam Integer maxTime
                                                                  ) {

        Map<String, Object> result = new HashMap<>();

        List<ThemeResponseDto> informationList = null;
        HttpStatus httpStatus = null;

        try {
            informationList = informationService.getInformationList(largeRegion, smallRegion, gerne, maxCnt,maxLevel,minTime,maxTime);
            httpStatus = HttpStatus.OK;
            result.put("success", true);

        } catch (RuntimeException e) {
            e.printStackTrace();
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
            result.put("success", false);

        }
         result.put("informationList", informationList);
         return new ResponseEntity<Map<String, Object>>(result, httpStatus);
    }
    @GetMapping("/detail/{themeId}")
    public ResponseEntity<Map<String, Object>> getDetail(@PathVariable Integer themeId) {
        Map<String, Object> result = new HashMap<>();
        HttpStatus httpStatus = null;
        StoreAndThemeResponseDto storeandtheme = null;
        try {
            //리뷰를 제외한 테마+스토어에 대한 정보
            storeandtheme = informationService.getDetail(themeId);

            httpStatus = HttpStatus.OK;
            result.put("success", true);
        } catch (RuntimeException e) {
            e.printStackTrace();
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
            result.put("success", false);
        }

        result.put("storeandtheme",storeandtheme);
        return new ResponseEntity<Map<String, Object>>(result, httpStatus);
    }

}
