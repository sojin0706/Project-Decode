import { Grid, Header, Rating } from "semantic-ui-react";

export default function Reviewboard(){

    const reviews = [
        {
            number: 1,
            nickname: '닉네임1',
            score: 3,
            create_date: '2020.09.28',
            content: '재밌었다.'
        },
        {
            number: 2,
            nickname: '닉네임2',
            score: 5,
            create_date: '2020.07.28',
            content: '추천'
        },
        {
            number: 3,
            nickname: '닉네임3',
            score: 1,
            create_date: '2020.05.28',
            content: '어려워요'
        },
        {
            number: 4,
            nickname: '닉네임4',
            score: 4,
            create_date: '2020.03.28',
            content: '재밌었다.'
        },
        {
            number: 5,
            nickname: '닉네임5',
            score: 3,
            create_date: '2020.01.28',
            content: '난이도 보통'
        },
    ]
    console.log(reviews)

    return(
        <>
            <Grid centered stackable>
                <Grid.Row>
                    <Grid.Column width={1} />
                    <Grid.Column width={2}>
                        <Header as='h5'>번호</Header>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header as='h5'>닉네임</Header>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header as='h5'>별점</Header>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header as='h5'>작성날짜</Header>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header as='h5'>후기</Header>
                    </Grid.Column>
                    <Grid.Column width={1} />
                </Grid.Row>
                {reviews.map((review) => {
                    return(
                        <Grid.Row>
                            <Grid.Column width={1} />
                            <Grid.Column width={2}>
                                <Header as='h5'>{review.number}</Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h5'>{review.nickname}</Header>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h5'><Rating icon='star' defaultRating={review.score} maxRating={review.score} /></Header>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header as='h5'>{review.create_date}</Header>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Header as='h5'>{review.content}</Header>
                            </Grid.Column>
                            <Grid.Column width={1} />
                        </Grid.Row>
                    );
                })}
            </Grid>
        </>
    );
}