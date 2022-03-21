import {
    Comment,
    Item,
    Button,
    Grid,
  } from "semantic-ui-react";
import React, {Component} from 'react'
  
import styles from "../../styles/notice/detail.module.css";

export default function notice_detail() {

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
                    <strong>공지게시판</strong>
                </div>
                <div>문의사항이 있으실 경우 질문을 남겨주세요</div>
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
                            <dt>조회</dt>
                            <dd>127</dd>
                        </dl>
                    </div>
                    <div className={styles.cont}>
                        글 내용이 들어갑니다.
                    </div>
                    
                </div>
                <div className={styles.bt_wrap}>
                    <a href="/notice" className={styles.on}>목록</a>
                    <a href="/notice/create">수정</a>
                </div>
                <div className={styles.comment_cont}>
                            <Grid verticalAlign='middle' centered>
                                <Grid.Column width={1}>
                                    <Item.Group>
                                        <Item>
                                            <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                        </Item>
                                    </Item.Group>
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
    
    </Grid.Column>
    <Grid.Column width={2}></Grid.Column>
    </Grid>
    
    </>
);
}
