import { Grid, Header } from "semantic-ui-react";
import Region from "../../src/component/filter/region";
import Detail from "../../src/component/modal/detail";

export default function Recommend(){

    const thema = {
        name: '완전한 사랑',
        difficulty: 3,
        genre: '감성/드라마',
        reco_person: 3,
        max_person: 3,
        time: 60,
        url: 'https://next-edition.s3.amazonaws.com/theme/title_image_url/%EC%99%84%EC%A0%84%ED%95%9C%EC%82%AC%EB%9E%91(%EB%A6%AC%EB%89%B4%EC%96%BC)/theme__%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%92%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A1%E1%84%85%E1%85%A1%E1%86%BC-%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5_%EC%99%84%EC%A0%84%ED%95%9C%EC%82%AC%EB%9E%91(%EB%A6%AC%EB%89%B4%EC%96%BC).jpg',
    }

    return (
        <>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={2}/>
                    <Grid.Column width={12}>
                        <Region />
                    </Grid.Column>
                    <Grid.Column width={2}/>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2}/>
                    <Grid.Column width={12}>
                        <Header as='h3'>'유저' 님이 좋아하실만한 테마를 준비해봤어요!</Header>
                        <Detail item={thema} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Detail item={thema} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Detail item={thema} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Detail item={thema} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Grid.Column>
                    <Grid.Column width={2}/>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2}/>
                    <Grid.Column width={12}>
                        <Header as='h3'>'유저' 님이 좋아하실만한 테마를 준비해봤어요!</Header>
                        <img src="https://next-edition.s3.amazonaws.com/theme/title_image_url/MEMORY%20-%20Episode%201/theme__%E1%84%86%E1%85%A6%E1%84%86%E1%85%A9%E1%84%85%E1%85%B5-%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5-%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC_%E1%84%8C%E1%85%A5%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%85%E1%85%A3%E1%86%BC__MEMORY%20-%20Episode%201.jpg" alt="맞춤추천" height="200px" width="150px" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="https://next-edition.s3.amazonaws.com/theme/title_image_url/%EC%99%84%EC%A0%84%ED%95%9C%EC%82%AC%EB%9E%91(%EB%A6%AC%EB%89%B4%EC%96%BC)/theme__%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%92%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A1%E1%84%85%E1%85%A1%E1%86%BC-%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5_%EC%99%84%EC%A0%84%ED%95%9C%EC%82%AC%EB%9E%91(%EB%A6%AC%EB%89%B4%EC%96%BC).jpg" alt="맞춤추천" height="200px" width="150px" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="https://next-edition.s3.amazonaws.com/theme/title_image_url/%ED%9D%90%EB%A6%B0%EB%82%A0/theme__%E1%84%92%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%82%E1%85%A1%E1%86%AF_%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5_%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC_%ED%9D%90%EB%A6%B0%EB%82%A0.jpg" alt="맞춤추천" height="200px" width="150px" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="https://next-edition.s3.amazonaws.com/theme/title_image_url/%EC%B9%B4%EB%A5%B4%ED%85%94/theme__%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2019-03-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.01.28_%EC%B9%B4%EB%A5%B4%ED%85%94.jpg" alt="맞춤추천" height="200px" width="150px" />
                    </Grid.Column>
                    <Grid.Column width={2}/>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2}/>
                    <Grid.Column width={12}>
                        <Header as='h3'>'유저' 님과 같은 '20'대 '여성'들이 좋아하는 방에 도전해보세요!</Header>
                        <img src="https://next-edition.s3.amazonaws.com/theme/title_image_url/%EC%A0%80%EB%8B%88(JOURNEY)/theme__%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B5_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC_%EC%A0%80%EB%8B%88(JOURNEY).jpg" alt="연령추천" height="200px" width="150px" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="https://next-edition.s3.amazonaws.com/theme/title_image_url/%ED%80%B4%EC%A6%88%20%EC%9D%B8%20%EB%8D%94%20%EB%85%B8%EB%B8%94%20(Quiz%20in%20The%20Noble)/theme__%E1%84%8F%E1%85%B1%E1%84%8C%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A5%E1%84%82%E1%85%A9%E1%84%87%E1%85%B3%E1%86%AF_%ED%80%B4%EC%A6%88%20%EC%9D%B8%20%EB%8D%94%20%EB%85%B8%EB%B8%94%20(Quiz%20in%20The%20Noble).jpg" alt="연령추천" height="200px" width="150px" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="https://next-edition.s3.amazonaws.com/theme/title_image_url/%EC%BB%A4%EB%84%A5%ED%8A%B8%20(Connect)/theme__%E1%84%8F%E1%85%A5%E1%84%82%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3_%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5_%EC%BB%A4%EB%84%A5%ED%8A%B8%20(Connect).jpg" alt="연령추천" height="200px" width="150px" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="https://next-edition.s3.amazonaws.com/theme/title_image_url/%EC%B2%AB%EB%A7%8C%EB%82%A8/theme__%E1%84%8E%E1%85%A5%E1%86%BA%E1%84%86%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A1%E1%86%B7_%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A9%E1%86%AB_%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC_%EC%B2%AB%EB%A7%8C%EB%82%A8.jpg" alt="연령추천" height="200px" width="150px" />
                    </Grid.Column>
                    <Grid.Column width={2}/>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2}/>
                    <Grid.Column width={12}>
                        <Header as='h3'>'유저' 님이 좋아하는 '추리'장르를 모아봤어요!</Header>
                        <img src="https://next-edition.s3.amazonaws.com/theme/title_image_url/SOS/theme__SOS_%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5_%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC_%E1%84%8C%E1%85%A5%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%85%E1%85%A3%E1%86%BC__SOS.jpg" alt="장르추천" height="200px" width="150px" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="http://red.doorescape.co.kr/upload/theme/theme51247_0.jpg" alt="장르추천" height="200px" width="150px" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="http://red.doorescape.co.kr/upload/theme/theme73755_0.jpg" alt="장르추천" height="200px" width="150px" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="http://blue.doorescape.co.kr/upload/theme/theme06441_0.jpg" alt="장르추천" height="200px" width="150px" />
                    </Grid.Column>
                    <Grid.Column width={2}/>
                </Grid.Row>
            </Grid>
            
            {/* 2차 디자인 */}
            {/* <Grid centered columns={3} stackable>
                <Grid.Row>
                <Header as='h4'>'유저' 님이 좋아하실만한 테마를 준비해봤어요!</Header>
                </Grid.Row>
                <Grid.Column>
                    <Recoboard />
                </Grid.Column>
                <Grid.Column>
                    <Header as='h4'>'유저' 님과 같은 '20'대 '여성'들이 좋아하는 방에 도전해보세요!</Header>
                    <Recoboard />
                </Grid.Column>
                <Grid.Column>
                    <Header as='h4'>'유저' 님이 좋아하는 '추리'장르를 모아봤어요!</Header>
                    <Recoboard />
                </Grid.Column>
            </Grid> */}
            
        </>
    );
}