package com.ssafy.escapesvr.entity;


import lombok.*;

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
    private Integer userId;

    @NotNull
    private String smallRegion; //지역

//    @NotNull
    private int recommend; //추천개수



//    @NotNull
    private int report; //신고횟수

//    @NotNull
    private LocalDateTime createdAt; //작성시간

//    @NotNull
    private LocalDateTime modifiedAt; //수정시간



    @OneToMany(mappedBy = "article", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<ArticleComment> comments = new ArrayList<>();

    //빌더
    @Builder
    public Article(String title, String content, String smallRegion, Integer userId) {
        this.title= title;
        this.content= content;
        this.smallRegion = smallRegion;
        this.userId = userId;
    }

    //게시글 수정
    public void update(String title, String content, String smallRegion, Integer userId) {
        this.title = title;
        this.content = content;
        this.smallRegion = smallRegion;
        this.userId = userId;
        this.modifiedAt = LocalDateTime.now();
    }



}
