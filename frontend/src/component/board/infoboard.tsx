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
                    <Detail item={thema}/>
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