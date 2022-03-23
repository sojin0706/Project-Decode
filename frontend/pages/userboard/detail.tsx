import {
    Button,
    Comment,
    Grid,
    Icon,
  } from "semantic-ui-react";
import React from 'react'
  
import styles from "../../styles/userboard/detail.module.css";


export default function Userboard_detail() {

return (
    <>
    <Grid>
    <Grid.Column width={2}></Grid.Column>
    <Grid.Column width={12}>
    <div className={styles.board_wrap}>    
        <div className={styles.noticetext}>
            <Grid>
                <Grid.Column width={16}>
                <div className={styles.board_title}>
                    <strong>유저게시판</strong>
                </div>
                <div>방탈출에 관한 자유로운 이야기를 나눠보세요</div>
                </Grid.Column>
            </Grid>
        </div>
            <div className={styles.board_view_wrap}>
                <div className={styles.board_view}>
                    <div className={styles.title}>
                        글 제목
                    </div>
                    <div className={styles.info}>
                        <dl>
                            <dt>번호</dt>
                            <dd>1</dd>
                        </dl>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd>하루</dd>
                        </dl>
                        <dl>
                            <dt>작성일</dt>
                            <dd>2021.03.14</dd>
                        </dl>
                        <dl>
                            <dt>조회수</dt>
                            <dd>219</dd>
                        </dl>
                        <dl>
                            <dt>추천수</dt>
                            <dd>127</dd>
                        </dl>
                    </div>
                    <div className={styles.board_cont}>
                        글 내용이 들어갑니다.
                    </div>
                    
                </div>
                <div className={styles.comment}>
                    <div className={styles.comment_review}>
                        <div className={styles.comment_reco}>
                        <Button color='orange' inverted animated='fade'>
                            <Button.Content visible>
                                <Icon name='thumbs up outline' />
                            </Button.Content>
                            <Button.Content hidden>
                                추천
                            </Button.Content>
                        </Button>
                        </div>
                        <div className={styles.comment_report}>
                        <Button color='grey'  animated='fade'>
                            <Button.Content visible>
                                <Icon name='user close' />
                            </Button.Content>
                            <Button.Content hidden>
                                신고
                            </Button.Content>
                        </Button>
                        </div>
                    </div>
                    <br />
                <div className={styles.bt_wrap}>
                    <div className={styles.on}>목록</div>
                    <div>수정</div>
                </div>
                    <div className={styles.comments}>
                        
                        <div className={styles.comment_title}>
                            댓글쓰기
                        </div>
                        <div className={styles.comment_cont}>
                            <Grid verticalAlign='middle' centered>
                                <Grid.Column width={1}>
                                    <Comment.Group size='massive'>
                                        <Comment>
                                            <Comment. Avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                        </Comment>
                                    </Comment.Group>
                                </Grid.Column>
                                <Grid.Column width={1}>
                                    <div className={styles.comment_createname}>
                                        하루
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={12}>
                                <div>
                                    <textarea placeholder="댓글을 작성해주세요"></textarea>
                                </div>
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <div className={styles.comment_button}>
                                        <Button color='black'> 작성 </Button>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </div>
                        <Comment.Group >
                            <Comment>
                            <Comment. Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>하랑</Comment.Author>
                                <Comment.Metadata>
                                <div>하루 전</div>
                                </Comment.Metadata>
                                <Comment.Text>
                                <p>방탈출 함께 해요</p>
                                </Comment.Text>
                                <Comment.Actions>
                                <Comment.Action>답글 달기</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                            <Comment.Group>
                                <Comment>
                                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
                                <Comment.Content>
                                    <Comment.Author as='a'>하늬</Comment.Author>
                                    <Comment.Metadata>
                                    <div>방금 전</div>
                                    </Comment.Metadata>
                                    <Comment.Text>저요</Comment.Text>
                                    <Comment.Actions>
                                    <Comment.Action>답글 달기</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                                </Comment>
                            </Comment.Group>
                            </Comment>
                        </Comment.Group>
    
                    </div>
                </div>

            </div>
    </div>
    </Grid.Column>
    <Grid.Column width={2}></Grid.Column>
    </Grid>
    
    </>
);
}
