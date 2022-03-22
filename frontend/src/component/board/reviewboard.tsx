import { useEffect, useState } from "react";
import { Button, Grid, Header, Icon, Pagination, Rating } from "semantic-ui-react";
import allAxios from "../../lib/allAxios";

export default function Reviewboard({ themeIds }: any){

    const [myRate, setMyRate] = useState(3)
    const [myTime, setMytime] = useState(0)
    const [myReview, setMyReview] = useState('')
    const [reviewInfo, setReviewInfo] = useState([])
    const [pages, setPages] = useState(0)

    useEffect(() => {
        loadReview(pages)
    }, [pages])

    const loadReview = async (pages: Number) => {
        await allAxios.get(`/review/${themeIds}`, {
            params: {
                themeId: themeIds,
                page: pages
            }
        })
        .then(({ data }) => {
            setReviewInfo(data.review)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    function movePage(e: any){
        if(e.target.type == "nextItem"){
            setPages(pages+1)
        } else if (e.target.type === "prevItem"){
            if (pages < 1){
                return
            }
            setPages(Number(pages-1))
        } else {
            setPages(e.target.textContent-1)
        }
    }

    function changeTime(e: any){
        setMytime(e.target.value)
    }

    function changeRate(e: any){
        setMyRate(e.target.ariaPosInSet)
    }

    function changeReview(e: any){
        setMyReview(e.target.value)
    }

    function submitReview(e: any){
        if (!myTime && myTime < 30 || myTime > 90){
            alert('클리어 시간은 30 ~ 90 사이 숫자로만 작성이 가능합니다.')
            return
        }
        if (myReview.length > 200 || myReview.length < 1){
            alert('리뷰는 1자 이상 200자 이하로 작성해주세요')
            return
        }
        setMytime(0)
        setMyReview('')
        console.log('전달할 예정인 정보', myRate, myTime, myReview)
        var timeinput: any = document.getElementsByClassName('timeinput')[0]
        timeinput['value'] = 0
        var reviewinput: any = document.getElementsByClassName('reviewinput')[0]
        reviewinput['value'] = ''
        alert('리뷰가 저장되었습니다.')
    }

    function deleteReview(){
        console.log('리뷰 삭제')
    }

    return(
        <>
            <Grid centered stackable>
                <Grid.Row>
                    <Grid.Column width={1}>
                        <Header as='h5'>번호</Header>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header as='h5'>닉네임</Header>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header as='h5'>별점</Header>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header as='h5'>작성날짜</Header>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header as='h5'>클리어시간</Header>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h5'>후기</Header>
                    </Grid.Column>
                </Grid.Row>
                {reviewInfo.map((review: any, index) => {
                    return(
                        <Grid.Row key={review.theme_review_id}>
                            <Grid.Column width={1}>
                                <Header as='h5'>{index+pages*5+1}</Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h5'>{review.userNickName}</Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h5'><Rating icon='star' defaultRating={review.myScore/2} maxRating={review.myScore/2} /></Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h5'>{review.createdAt[0]}.{review.createdAt[1]}.{review.createdAt[2]}</Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h5'>{review.clearTime}분</Header>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Header as='h5'>{review.reviewContent}</Header>
                            </Grid.Column>
                            <Grid.Column width={1}>
                                <Icon name="trash" color="red" style={{ cursor: 'pointer'}} onClick={deleteReview}/>
                                {/* <Button size="mini"
                                    content='X'
                                    color='red'
                                /> */}
                            </Grid.Column>
                        </Grid.Row>
                    );
                })}
                <Grid.Row />
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Header as='h5'>닉네임</Header>
                        <p>내 닉네임</p>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header as='h5'>별점</Header>
                        <Rating className='scoreinput' icon='star' defaultRating={myRate} maxRating={5} onClick={changeRate}/>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header as='h5'>클리어 시간</Header>
                        <input className='timeinput' type="number" min={30} max={90} onChange={changeTime} />분
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h5'>후기</Header>
                        <textarea className='reviewinput' cols={50} rows={5} maxLength={200} onChange={changeReview}></textarea>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <br />
                        <Button 
                            content='리뷰작성'
                            color='blue'
                            onClick={submitReview}
                        />
                    </Grid.Column>
                </Grid.Row>
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