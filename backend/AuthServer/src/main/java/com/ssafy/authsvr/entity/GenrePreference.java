package com.ssafy.authsvr.entity;

import com.ssafy.authsvr.payload.request.UserRequestDto;
import lombok.Builder;
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

    @OneToOne(mappedBy = "genrePreference")
    private User user;

    @Builder
    public GenrePreference(Integer id, Integer thrill, Integer romance, Integer reasoning, Integer sfFantasy, Integer adventure, Integer comedy, Integer crime, Integer horror, Integer adult, Integer drama, User user) {
        this.id = id;
        this.thrill = thrill;
        this.romance = romance;
        this.reasoning = reasoning;
        this.sfFantasy = sfFantasy;
        this.adventure = adventure;
        this.comedy = comedy;
        this.crime = crime;
        this.horror = horror;
        this.adult = adult;
        this.drama = drama;
        this.user = user;
    }

    public static GenrePreference genrePreferenceBuild(UserRequestDto.preferenceGenre genre, User user) {
        return GenrePreference.builder()
                .id(user.getId())
                .thrill(genre.getThrill())
                .romance(genre.getRomance())
                .reasoning(genre.getReasoning())
                .sfFantasy(genre.getSfFantasy())
                .adventure(genre.getAdventure())
                .comedy(genre.getComedy())
                .crime(genre.getCrime())
                .horror(genre.getHorror())
                .adult(genre.getAdult())
                .drama(genre.getDrama())
                .user(user)
                .build();
    }
}