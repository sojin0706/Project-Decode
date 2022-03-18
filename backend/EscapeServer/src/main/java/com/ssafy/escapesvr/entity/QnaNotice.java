package com.ssafy.escapesvr.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QnaNotice {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "qna_id")
    private Long id; //공지사항글 ID

    @NotNull
    private String title; //제목

    @NotNull
    private String content; //내용

    @NotNull
    private Boolean isSecret; //보안글여부

    @NotNull
    private Boolean isNotice; //공지글여부

    @NotNull
    private LocalDateTime createdAt; //작성시간

    private LocalDateTime modifiedAt; //수정시간

    @NotNull
    private Integer userId;

    @OneToMany(mappedBy = "qnaNotice", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<QnaComment> comments = new ArrayList<>();


}
