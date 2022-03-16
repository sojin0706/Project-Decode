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
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id")
    private Long id; //게시글 ID

    @NotNull
    private String title; //제목

    @NotNull
    private String content; //내용

    @NotNull
    private int recommend; //추천개수

    @NotNull
    private int smallRegion; //지역

    @NotNull
    private int report; //신고횟수

    @NotNull
    private LocalDateTime createdAt; //작성시간

    @NotNull
    private LocalDateTime modifiedAt; //수정시간

    @NotNull
    private Integer user_id;

}
