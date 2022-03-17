import { Grid, GridColumn, GridRow, Header } from 'semantic-ui-react'
import Detail from '../modal/detail';

export default function Infoboard() {
    const thema = {
        name: '완전한 사랑',
        difficulty: 3,
        genre: '감성/드라마',
        reco_person: 3,
        max_person: 3,
        time: 60,
        url: 'https://next-edition.s3.amazonaws.com/theme/title_image_url/%EC%99%84%EC%A0%84%ED%95%9C%EC%82%AC%EB%9E%91(%EB%A6%AC%EB%89%B4%EC%96%BC)/theme__%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%92%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A1%E1%84%85%E1%85%A1%E1%86%BC-%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5_%EC%99%84%EC%A0%84%ED%95%9C%EC%82%AC%EB%9E%91(%EB%A6%AC%EB%89%B4%EC%96%BC).jpg',
    }
    return(
        <>
            <Grid celled centered stackable>
                <Grid.Row>
                <Grid.Column width={1}>
                    <Header as='h4'>번호</Header>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4'>지역</Header>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4'>장르</Header>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Header as='h4'>테마명</Header>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4'>인원수</Header>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4'>난이도</Header>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4'>시간</Header>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column width={1}>
                    <Header as='h4'>1</Header>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4'>제주</Header>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4'>스릴러</Header>
                </Grid.Column>
                <Grid.Column width={5}>
                    {/* <Header as='h4'>테마명??</Header> */}
                    <Detail item={thema} isImage={false} w={150} h={200}/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4'>3명</Header>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4'>3명</Header>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4'>60분</Header>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
}