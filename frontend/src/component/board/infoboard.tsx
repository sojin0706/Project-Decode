import { Grid, GridColumn, GridRow, Header } from 'semantic-ui-react'

export default function Infoboard() {
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
                <GridRow>
                    <GridColumn>

                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
}