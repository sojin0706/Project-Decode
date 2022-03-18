package com.ssafy.authsvr.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity
@Table(name = "genre_preference")
@Getter
@NoArgsConstructor
public class GenrePreference {

    @Id
    @Column(name = "genre_preference_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer thrill;

    private Integer romance;

    private Integer reasoning;

    private Integer sfFantasy;

    private Integer adventure;

    private Integer comedy;

    private Integer crime;

    private Integer horror;

    private Integer adult;

    private Integer drama;
//
//    @OneToOne(mappedBy = "genrePreference")
//    private User user;
}
