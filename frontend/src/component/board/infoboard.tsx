import { useEffect, useState } from 'react';
import { Grid, Header, Pagination } from 'semantic-ui-react'
import allAxios from '../../lib/allAxios';
import Detail from '../modal/detail';

export default function Infoboard() {

    const [themeInfo, setThemeInfo] = useState([])

    useEffect(() => {
        loadInfomation(0)
    }, [])

    const loadInfomation = async (pages: Number) => {
        await allAxios
            .get("/information", {
                params: {
                    maxLevel: 5,
                    maxNumber: 5,
                    maxTime: 60,
                    page: pages,
                }
            })
            .then(({ data }) => {
                setThemeInfo(data.informationList)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    function movePage(e: any) {
        loadInfomation(e.target.textContent-1)
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
                {themeInfo.map((theme: any) => {
                    return (
                        <Grid.Row key={theme.theme_id}>
                            <Grid.Column width={1}>
                                <Header as='h4'>{theme.theme_id}</Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h4'>{theme.largeRegion}/{theme.smallRegion}</Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h4'>{theme.genre}</Header>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Detail theme={theme} isImage={false} w={150} h={200}/>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h4'>{theme.maxNumber}명</Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h4'>{theme.level}</Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h4'>{theme.time}분</Header>
                            </Grid.Column>
                        </Grid.Row>
                    );
                })} 
            </Grid>
            <Grid centered>
                <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={2}
                        totalPages={10}
                        onClick={movePage}
                    />
            </Grid>
            
        </>
    );
}