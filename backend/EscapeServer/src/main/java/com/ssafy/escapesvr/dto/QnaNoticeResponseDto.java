package com.ssafy.escapesvr.dto;


import com.ssafy.escapesvr.entity.QnaNotice;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(description = "1:1 문의와 공지사항 관련 요청dto")
public class QnaNoticeResponseDto {

    @ApiModelProperty(value = "공지사항/문의글 번호", required = true)
    private Long id; //공지사항/문의글 번호

    @ApiModelProperty(value = "공지사항/문의글 제목", required = true)
    private String title; //제목

    @ApiModelProperty(value = "공지사항/문의글 내용", required = true)
    private String content; //내용

    @ApiModelProperty(value = "보안글 여부")
    private Boolean isSecret; //보안글여부

    @ApiModelProperty(value = "공지글 여부")
    private Boolean isNotice; //공지글여부

    @ApiModelProperty(value = "공지사항/문의 작성시간")
    private LocalDateTime createdAt; //작성시간

    @ApiModelProperty(value = "공지사항/문의 수정시간")
    private LocalDateTime modifiedAt; //수정시간

    @ApiModelProperty(value = "사용자 id(번호)", required = true)
    private Integer userId; //사용자 번호

    public QnaNoticeResponseDto(QnaNotice qnaNotice){
        this.id= qnaNotice.getId();
        this.title= qnaNotice.getTitle();;
        this.content= qnaNotice.getContent();
        this.createdAt =qnaNotice.getCreatedAt();
        this.modifiedAt= qnaNotice.getModifiedAt();
        this.isSecret=qnaNotice.getIsSecret();
        this.isNotice=qnaNotice.getIsNotice();
        this.userId=qnaNotice.getUserId();
    }



}
