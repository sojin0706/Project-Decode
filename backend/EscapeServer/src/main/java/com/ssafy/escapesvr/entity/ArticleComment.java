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
public class ArticleComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="comment_id")
    private Long id; //댓글 ID

    @NotNull
    private String content; //댓글 내용

    @NotNull
    private LocalDateTime createdAt;//작성시간

    @NotNull
    private LocalDateTime modifiedAt;//수정시간

    //외래키
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "article_id")
    private Article article; //게시글 id

    @NotNull
    private Integer userId;
}