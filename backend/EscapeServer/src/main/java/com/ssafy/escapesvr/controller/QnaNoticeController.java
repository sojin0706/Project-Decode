package com.ssafy.escapesvr.controller;



import com.ssafy.escapesvr.dto.QnaNoticeRequestDto;
import com.ssafy.escapesvr.dto.QnaNoticeResponseDto;
import com.ssafy.escapesvr.service.QnaNoticeServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/qnaNotice")
@Api("1:1문의와 공지사항 컨트롤러")
public class QnaNoticeController {

    private final QnaNoticeServiceImpl qnaNoticeService;


    //등록,수정,삭제,조회

    //Qna랑 공지사항 작성 : isNotice가 0이면 qna, 1이면 공지사항
    @ApiOperation(value = "1:1 문의 or 공지사항 작성", notes = "회원이 1:1 문의글(isNotice =0) or 공지사항(isNotice = 1)을 작성한다")
    @PostMapping
    public ResponseEntity<String> insertQnaNotice(@RequestBody @ApiParam(value = "문의/공지글 작성 모델") @Valid QnaNoticeRequestDto qnaNoticeRequestDto) {

        HttpStatus status = null;
        try {
            qnaNoticeService.insertQnaNotice(qnaNoticeRequestDto);
            status = HttpStatus.OK;
        } catch (Exception e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(status);

    }

    @ApiOperation(value = "모든 1:1 문의 or 공지사항 리스트 조회", notes = "1:1 문의 or 공지사항 문의 리스트를 조회한다")
    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllQnaNoticeList(@PathVariable @PageableDefault(size=5) @SortDefault.SortDefaults({@SortDefault(sort="isNotice", direction = Sort.Direction.DESC), @SortDefault(sort="createdAt", direction = Sort.Direction.DESC)}) Pageable pageable) {

        //(@PathVariable @PageableDefault(sort="createdAt",direction = Sort.Direction.DESC,size=5) Pageable pageable)
        //Sort.by(Sort.Direction.DESC, "isNotice","createdAt"),

        Map<String, Object> result = new HashMap<>();
        Page<QnaNoticeResponseDto> qnaNoticeList = null;
        HttpStatus status = null;
        try {
            qnaNoticeList = qnaNoticeService.getQnaNoticeList(pageable);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        result.put("qnaNoticeList", qnaNoticeList);

        return new ResponseEntity<>(result, status);
    }

    @ApiOperation(value = "자신(회원)이 쓴 qna 문의 리스트", notes = "회원이 프로필에서 확인하는 자신의 qna 문의 리스트")
    @GetMapping("/profile/{userId}")
    public ResponseEntity<Map<String, Object>> getMyQnaList(@PathVariable @ApiParam(value = "회원번호") Integer userId, @PageableDefault(sort="createdAt",direction = Sort.Direction.DESC,size=5) Pageable pageable) {
        Map<String, Object> result = new HashMap<>();
        Page<QnaNoticeResponseDto> myQnaList = null;
        HttpStatus status = null;
        try {
            myQnaList = qnaNoticeService.getMyQnaList(userId, pageable);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        result.put("myQnaList", myQnaList);

        return new ResponseEntity<>(result, status);
    }


    @ApiOperation(value = "1:1 문의 or 공지사항 수정", notes = "1:1 문의글(isNotice =0) or 공지사항(isNotice = 1)을 수정한다")
    @PutMapping
    public ResponseEntity<String> updateQnaNotice(@RequestBody @ApiParam(value = "문의/공지글 수정 모델") @Valid QnaNoticeRequestDto qnaNoticeRequestDto) {
        HttpStatus status = null;
        try {
            qnaNoticeService.updateQnaNotice(qnaNoticeRequestDto);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(status);
    }

    @ApiOperation(value = "1:1 문의 or 공지사항 삭제", notes = "문의/공지글을 삭제한다")
    @DeleteMapping("/{qnaId}")
    public ResponseEntity<String> deleteQnaNotice(@PathVariable @ApiParam(value = "문의/공지 게시글 번호") Long qnaId) {
        HttpStatus status = null;
        try {
            qnaNoticeService.deleteQnaNotice(qnaId);
            status = HttpStatus.OK;
        } catch (RuntimeException e) {
            e.printStackTrace();
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(status);
    }





}
