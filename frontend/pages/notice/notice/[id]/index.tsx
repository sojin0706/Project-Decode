import {
    Comment,
    Button,
    Grid,
  } from "semantic-ui-react";
import React from 'react'
import allAxios from "../../../../src/lib/allAxios";
import { useEffect, useState } from 'react';
import IsLogin from "../../../../src/lib/customLogin";
import userAxios from "../../../../src/lib/userAxios";
import Router, { useRouter } from "next/router";
import styles from "../../../../styles/notice/detail.module.css";

export default function Notice_detail() {

    const [userInfo, setUserInfo]: any = useState([])
    const [noticeDetail,setNoticeDetail]:any = useState([])
    const router = useRouter()
    const id = Number(router.query.id)

    // 유저
    useEffect(() => {
        loadUser()
    }, [])

    useEffect(() => {
        loadnoticeDetail(id)
    }, [id])

    const loadUser = async() => {
        if (IsLogin()){
            userAxios.get(`/auth/users`)
            .then(({ data }) => {
                console.log(data.body.user)
                setUserInfo(data.body.user)
            })
            .catch((e) => {
            console.log(e);
            alert('로그인 시간이 만료되었습니다.')
            });
          }
        }

    const loadnoticeDetail = async(id:Number) => {
        await allAxios
            .get(`/notice/${id}`)
            .then(({ data }) => {
                console.log(data.notice)
                setNoticeDetail(data.notice)
            })
            .catch((e) => {
                console.log(e)
            })      
    }

    const deleteNotice = () => {
        allAxios
        .delete(`/notice/{id}`)
        .then(()=>{
            alert("게시글이 삭제되었습니다.")
            router.push("/notice");
        })
        .catch(() => {
        alert("잠시 후 다시 시도해주세요.")
        });
    };


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
                        {noticeDetail.title}
                    </div>
                    <div className={styles.info}>
                        <dl>
                            <dt>번호</dt>
                            <dd>{id}</dd>
                        </dl>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd>{noticeDetail.nickName}</dd>
                        </dl>
                        <dl>
                            <dt>작성일</dt>
                            <dd>{noticeDetail.createdAt?noticeDetail.createdAt[0]+'.'+noticeDetail.createdAt[1]+'.'+noticeDetail.createdAt[2]:''}</dd>
                        </dl>
                        {/* <dl>
                            <dt>조회</dt>
                            <dd>127</dd>
                        </dl> */}
                    </div>
                    <div className={styles.cont}>
                        {noticeDetail.content}
                    </div>
                    
                </div>
                <div className={styles.bt_wrap}>
                    <div className={styles.on} onClick={() => Router.back()}>목록</div>
                    {userInfo.id == noticeDetail.userId &&(
                    <>
                        <div className={styles.editbutton} onClick={() => router.push(`/notice/editQna/${id}`)}> 수정</div>
                        <div className={styles.deletebutton} onClick={deleteNotice}> 삭제</div>
                    </>
                    )}
                </div>
                <div className={styles.comment_cont}>
                            <Grid verticalAlign='middle' centered>
                                <Grid.Column width={1}>
                                    <Comment.Group size='massive'>
                                        <Comment>
                                            <Comment. Avatar src={userInfo.image} />
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
