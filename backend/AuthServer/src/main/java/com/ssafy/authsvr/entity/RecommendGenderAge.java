package com.ssafy.authsvr.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "recommend_gender_age")
@Getter
@Setter
@NoArgsConstructor
public class RecommendGenderAge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="recommend_gender_age_id")
    private Integer recommendLikeId;

    private Integer topOne;

    private Integer topTwo;

    private Integer topThree;

    private Integer topFour;

    private Integer topFive;

    private Integer topSix;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;
}
