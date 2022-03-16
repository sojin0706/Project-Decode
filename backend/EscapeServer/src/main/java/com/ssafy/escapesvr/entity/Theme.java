package com.ssafy.escapesvr.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Theme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "theme_id")
    private Integer id;

    @NotNull
    @Column(name="theme_name")
    private String name;

    @NotNull
    private String genre;

    //
    @NotNull
    private Integer isScared;

    @NotNull
    private Integer level;

    @NotNull
    private Integer maxNumber;

    @NotNull
    private Integer time;

    @NotNull
    private Double score;

    @NotNull
    private Integer reviewCnt;

    @NotNull
    private String type;

    @NotNull
    @Column(length = 1000)
    private String posterUrl;

    @NotNull
    @Column(length = 1000)
    private String reserveUrl;

    //
    @NotNull
    private Integer isSingleplay;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="recommend_number_id")
    private RecommendNumber recommendNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id")
    private Store store;

    @OneToMany(mappedBy = "theme",cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<ThemeReview> themeReviews=new ArrayList<>();

}
