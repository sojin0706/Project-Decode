import { useState } from "react";
import { Button, Grid, Header, Icon, Pagination, Rating } from "semantic-ui-react";

export default function Reviewboard(){

    const reviews = [
        {
            number: 1,
            nickname: '닉네임1',
            score: 3,
            create_date: '2020.09.28',
            clear_time: 55,
            content: '재밌었다.'
        },
        {
            number: 2,
            nickname: '닉네임2',
            score: 5,
            create_date: '2020.07.28',
            clear_time: 45,
            content: '추천'
        },
        {
            number: 3,
            nickname: '닉네임3',
            score: 1,
            create_date: '2020.05.28',
            clear_time: 60,
            content: '어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요어려워요'
        },
        {
            number: 4,
            nickname: '닉네임4',
            score: 4,
            create_date: '2020.03.28',
            clear_time: 50,
            content: '재밌었다.'
        },
        {
            number: 5,
            nickname: '닉네임5',
            score: 3,
            create_date: '2020.01.28',
            clear_time: 55,
            content: '난이도 보통'
        },
    ]

    const [myRate, setMyRate] = useState(3)
    const [myTime, setMytime] = useState(0)
    const [myReview, setMyReview] = useState('')

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
                {reviews.map((review) => {
                    return(
                        <Grid.Row>
                            <Grid.Column width={1}>
                                <Header as='h5'>{review.number}</Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h5'>{review.nickname}</Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h5'><Rating icon='star' defaultRating={review.score} maxRating={review.score} /></Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h5'>{review.create_date}</Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h5'>{review.clear_time}분</Header>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Header as='h5'>{review.content}</Header>
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
                />
            </Grid>
        </>
    );
}