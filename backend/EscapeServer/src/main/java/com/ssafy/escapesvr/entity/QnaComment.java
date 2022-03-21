package com.ssafy.escapesvr.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QnaComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="qna_comment_id")
    private Long id; //공지사항 댓글 ID

    @NotNull
    private String content; //댓글 내용

    private LocalDateTime createdAt;//작성시간

    private LocalDateTime modifiedAt;//수정시간

    //외래키
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "qna_notice_id")
    private QnaNotice qnaNotice; //공지사항글 id

    @NotNull
    private Integer userId;

    private String nickName;//유저 닉네임

    private String userImage; //유저 프로필 사진


}
