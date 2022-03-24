package com.ssafy.authsvr.entity;

import com.ssafy.authsvr.payload.request.UserProfileRequest;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.Column;
import javax.persistence.Id;
import java.util.List;

@Document("escape")
@NoArgsConstructor
@Getter
public class PreferenceDocument {

    @Id
    private ObjectId id;

    private String name;

    private Integer age;

    private String gender;

    private List<String> location;

    @Column(name = "스릴러")
    private Integer thrill;

    @Column(name = "로맨스")
    private Integer romance;

    @Column(name = "추리")
    private Integer reasoning;

    @Column(name = "SF/판타지")
    private Integer sfFantasy;

    @Column(name = "모험/액션")
    private Integer adventure;

    @Column(name = "코미디")
    private Integer comedy;

    @Column(name = "범죄")
    private Integer crime;

    @Column(name = "공포")
    private Integer horror;

    @Column(name = "19금")
    private Integer adult;

    @Column(name = "감성/드라마")
    private Integer drama;

    @Builder
    public PreferenceDocument(ObjectId id, String name, Integer age, String gender, List<String> location, Integer thrill, Integer romance, Integer reasoning, Integer sfFantasy, Integer adventure, Integer comedy, Integer crime, Integer horror, Integer adult, Integer drama) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.location = location;
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
    }

    public static PreferenceDocument genreDocument(UserProfileRequest profileRequest, List<String> location){
        return PreferenceDocument.builder()
                .name(profileRequest.getNickName())
                .age(profileRequest.getAge())
                .gender(profileRequest.getGender())
                .location(location)
                .thrill(profileRequest.getPreferenceGenre().getThrill())
                .romance(profileRequest.getPreferenceGenre().getRomance())
                .reasoning(profileRequest.getPreferenceGenre().getReasoning())
                .sfFantasy(profileRequest.getPreferenceGenre().getSfFantasy())
                .adventure(profileRequest.getPreferenceGenre().getAdventure())
                .comedy(profileRequest.getPreferenceGenre().getComedy())
                .crime(profileRequest.getPreferenceGenre().getCrime())
                .horror(profileRequest.getPreferenceGenre().getHorror())
                .adult(profileRequest.getPreferenceGenre().getAdult())
                .drama(profileRequest.getPreferenceGenre().getDrama())
                .build();
    }

}
