import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Grid, Header, Icon, Select } from "semantic-ui-react";
import Detail from "../../src/component/modal/detail";
import allAxios from "../../src/lib/allAxios";
import IsLogin from "../../src/lib/customLogin";
import getrecoAxios from "../../src/lib/getrecoAxios";
import userAxios from "../../src/lib/userAxios";

const regionOptions = [
    { key: '전체', value: '전체', text: '전체' },
    { key: '서울', value: '서울', text: '서울' },
    { key: '경기/인천', value: '경기/인천', text: '경기/인천' },
    { key: '충청', value: '충청', text: '충청' },
    { key: '강원', value: '강원', text: '강원' },
    { key: '경상', value: '경상', text: '경상' },
    { key: '전라', value: '전라', text: '전라' },
    { key: '제주', value: '제주', text: '제주' },
]

export default function Recommend(){

    const router = useRouter()

    const [region, setRegion] = useState(null)
    const [smallRegion, setSmallRegion] = useState(null)
    const [smallRegionOptions, setSmallRegionOptions] = useState([{ key: '전체', value: '전체', text: '전체' }])
    const [userInfo, setUserInfo]: any = useState([])
    const [myRecommend, setMyRecommend]: any = useState([])
    const [ageRecommend, setAgeRecommend]: any = useState([])
    const [genreRecommend, setGenreRecommend]: any = useState([])

    useEffect(() => {
        // if (!IsLogin()){
        //     alert('로그인 후 이용해주세요')
        //     router.push('/')
        // }
        loadUser()
        loadSmallRegion(null)
    }, [])

    useEffect(() => {
        loadMyRecommend()
        loadAgeRecommend()
        loadgenreRecommend()
    }, [userInfo.id])

    function selectedRegion(e: any){
        setSmallRegion(null)
        if (e.target.textContent === '전체'){
            loadSmallRegion(null)
            setRegion(null)
            return
        }
        setRegion(e.target.textContent) 
        loadSmallRegion(e.target.textContent)
    }

    function selectedSmallRegion(e: any){
        setSmallRegion(e.target.textContent)
    }

    const loadSmallRegion = async (region: any) => {
        await allAxios
            .get("/information/region", {
                params: {
                    largeRegion: region
                }
            })
            .then(({ data }) => {
                const tempRegion = data.smallRegions.map((regions: String) => {
                    return {key: regions, value:regions, text: regions}
                })
                setSmallRegionOptions(tempRegion)
            })
            .catch((e: any) => {
                console.log(e)
            })
    }

    const loadUser = async () => {
    if (IsLogin()){
            userAxios.get(`/auth/users`)
            .then(({ data }) => {
                setUserInfo(data.body.user)
            })
            .catch((e) => {
                console.log(e)
                alert('로그인 시간이 만료되었습니다.')
            })
        }
    } 

    const loadMyRecommend = async () => {
        if(userInfo.id){
            getrecoAxios.get(`/recommend/like/${userInfo.id}`)
            .then(({ data }) => {
                setMyRecommend(data)
            })
            .catch((e) => {
                console.log(e)
            })
        }
    }


    const loadAgeRecommend = async () => {
        if(userInfo.id){
            getrecoAxios.get(`/recommend/genderAge/${userInfo.id}`)
            .then(({ data }) => {
                setAgeRecommend(data)
            })
            .catch((e) => {
                console.log(e)
            })
        }
    }

    const loadgenreRecommend = async () => {
        if(userInfo.id){
            getrecoAxios.get(`/recommend/genre/${userInfo.id}`)
            .then(({ data }) => {
                console.log(data)
                setGenreRecommend(data)
            })
            .catch((e) => {
                console.log(e)
            })
        }
    }

    return (
        <>
            <Grid stackable>
                {/* <Grid.Row>
                    <Grid.Column width={2}/>
                    <Grid.Column width={3}>
                        <Header as='h5'>지역</Header>
                        <Select placeholder='지역' options={regionOptions} onChange={selectedRegion} />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header as='h5'>세부지역</Header>
                        <Select placeholder='세부지역' options={smallRegionOptions} onChange={selectedSmallRegion} />
                    </Grid.Column>
                    <Grid.Column width={2}/>
                </Grid.Row> */}
                {userInfo.id?
                <>
                <Grid.Row>
                    <Grid.Column width={2}/>
                    <Grid.Column width={3}>
                        <Header as='h3'>방탈출 추천 서비스입니다. <Icon color="yellow" name='key'/></Header> 
                        <br />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header as='h3'>마음에 드는 테마를 찾아보세요! <Icon color="red" name='heart'/></Header> 
                        <br />
                    </Grid.Column>
                    <Grid.Column width={2}/>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2}/>
                    <Grid.Column width={12}>
                        <Header as='h3'>{userInfo.nick_name} 님이 좋아하실만한 테마를 준비해봤어요!</Header>
                        <Detail themeId={myRecommend.like_one} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Detail themeId={myRecommend.like_two} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Detail themeId={myRecommend.like_three} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Detail themeId={myRecommend.like_four} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Grid.Column>
                    <Grid.Column width={2}/>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2}/>
                    <Grid.Column width={12}>
                        <Header as='h3'>{userInfo.nick_name} 님과 같은 {userInfo.age}대 {userInfo.gender==='남'?"남자":"여자"}들이 좋아하는 방에 도전해보세요!</Header>
                        <Detail themeId={ageRecommend.gender_age_one} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Detail themeId={ageRecommend.gender_age_two} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Detail themeId={ageRecommend.gender_age_three} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Detail themeId={ageRecommend.gender_age_four} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Grid.Column>
                    <Grid.Column width={2}/>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2}/>
                    <Grid.Column width={12}>
                        <Header as='h3'>{userInfo.nick_name} 님이 좋아하는 장르를 모아봤어요!</Header>
                        <Detail themeId={genreRecommend.genre_one} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Detail themeId={genreRecommend.genre_two} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Detail themeId={genreRecommend.genre_three} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Detail themeId={genreRecommend.genre_four} isImage={true} w={150} h={200}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Grid.Column>
                    <Grid.Column width={2}/>
                </Grid.Row>
                </>:
                <Grid.Row>
                    <Grid.Column width={2} />
                    <Grid.Column width={12}><Header as='h3'>추천 정보를 보시려면 로그인해주세요! <Icon color="yellow" name='id card'/></Header></Grid.Column>
                    <Grid.Column width={2} />
                </Grid.Row>
                }
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