import {
    Pagination,
    Grid,
    Dropdown,
    Input,
    Icon,
    Header,
    Select,
  } from "semantic-ui-react";
import { useEffect, useState } from "react";
import React from 'react'
import styles from "../../styles/userboard/userboard.module.css";
import allAxios from "../../src/lib/allAxios";
import IsLogin from "../../src/lib/customLogin";
import Router from "next/router";


const options = [
    { key: '제목', value: '제목', text: '제목' },
    { key: '내용', value: '내용', text: '내용' },
    { key: '글쓴이', value: '글쓴이', text: '글쓴이' }
]

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

export default function Userboard({ id }:any) {
    // 로그인 유저 정보
    const [user, setUser] = useState()
    
    // 지역선택
    const [region, setRegion] = useState(null)
    const [smallRegion, setSmallRegion] = useState(null)
    const [smallRegionOptions, setSmallRegionOptions] = useState([{ key: '전체', value: '전체', text: '전체' }])
    
    // 게시글 정보
    const [userboard, setUserboard] = useState({
        id: ""
    })


    //지역 선택
    useEffect(() => {
        loadSmallRegion(null)
    }, [])

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

    // 게시글 정보 받아오기



    // 글 작성 버튼 연결
    const goUserWrite = async() => {
        if (IsLogin()){
            Router.push(`/userboard/create`)
        } else {
            alert('게시글 작성은 로그인 후 이용가능합니다')
            return
        }
    }

return (
    <>
 <Grid>
    <Grid.Column width={2}></Grid.Column>
    <Grid.Column width={12}>
    <div className={styles.board_wrap}>    
     
        <div className={styles.userboardtop}>
            <Grid>
                <Grid.Column width={10}>
                <div className={styles.board_title}>
                    <strong>유저게시판</strong>
                    <div>
                        <div className={styles.board_select}>
                            <div className={styles.select_title}>
                            <Header as='h5'>지역</Header>
                            </div>
                            <Select placeholder='지역' options={regionOptions} onChange={selectedRegion} />
                        </div>
                        <div className={styles.board_select}>
                            <div className={styles.select_title}>
                            <Header as='h5'>세부지역</Header>
                            </div>
                            <Select placeholder='세부지역' options={smallRegionOptions} onChange={selectedSmallRegion} />
                        </div>
                    </div>
               </div> 
               
                </Grid.Column>
                <Grid.Column width={4}>
                    <div className={styles.board_search}>
                        <Input
                            icon={<Icon name='search' inverted circular link />}
                            action={
                                <Dropdown button basic floating options={options} placeholder='검색' defaultValue='page' />
                            }
                            actionPosition='left' 
                            placeholder='검색어를 입력하세요'
                        />
                    </div>
                </Grid.Column>
                <Grid.Column width={2}>
                <div className={styles.bt_wrap}>
                    <div className={styles.on} onClick={goUserWrite}>글 작성</div>
                </div>
                </Grid.Column>
            </Grid>
        </div>
        <div className={styles.board_list_wrap}>
            <div className={styles.board_list}>
                <div className={styles.top}>
                    <div className={styles.type}>지역</div>
                    <div className={styles.num}>번호</div>
                    <div className={styles.title}>제목</div>
                    <div className={styles.writer}>글쓴이</div>
                    <div className={styles.date}>작성일</div>
                </div>
                <div>
                    <div className={styles.type}>강남</div>
                    <div className={styles.num}>1</div>
                    <div className={styles.title}>제목test</div>
                    <div className={styles.writer}>하루</div>
                    <div className={styles.date}>2022.03.14</div>
                </div>

            </div>
            <div className={styles.board_page}>
            <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={2}
            totalPages={10}
             />

            </div>
        </div>
    </div>
    </Grid.Column>
    <Grid.Column width={2}></Grid.Column>
    </Grid>
    
    </>
);
}