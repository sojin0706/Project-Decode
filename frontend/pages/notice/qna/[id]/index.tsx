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

    const [userInfo, setUserInfo]: any = useState(0)
    const [qnaDetail,setQnaDetail]:any = useState([])
    const router = useRouter()
    const id = Number(router.query.id)

    // 유저
    useEffect(() => {
        loadUser()
    }, [])

    useEffect(() => {
        loadqnaDetail(id)
    }, [id])

    const loadUser = async() => {
        if (IsLogin()){
            userAxios.get(`/auth/users`)
            .then(({ data }) => {
                setUserInfo(data.body.user)
            })
            .catch((e) => {
            console.log(e);
            alert('로그인 시간이 만료되었습니다.')
            });
          }
        }

    const loadqnaDetail = async(id:Number) => {
        await allAxios
            .get(`qna/${id}`)
            .then(({data}) => {
                console.log(data)
                setQnaDetail(data.qnaList)
            })
            .catch((e) => {
                console.log(e)
            })      
    }

    const deleteUserboard = () => {
        allAxios
        .delete(`qna/{qnaId}`)
        .then(()=>{
            alert("게시글이 삭제되었습니다.")
            router.push("/userboard");
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
                        글 제목
                    </div>
                    <div className={styles.info}>
                        <dl>
                            <dt>번호</dt>
                            <dd>{qnaDetail.id}</dd>
                        </dl>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd>{qnaDetail.nickName}</dd>
                        </dl>
                        <dl>
                            <dt>작성일</dt>
                            <dd>{qnaDetail.createdAt?qnaDetail.createdAt[0]+'.'+qnaDetail.createdAt[1]+'.'+qnaDetail.createdAt[2]:''}</dd>
                        </dl>
                        {/* <dl>
                            <dt>조회</dt>
                            <dd>127</dd>
                        </dl> */}
                    </div>
                    <div className={styles.cont}>
                        글 내용이 들어갑니다.
                    </div>
                    
                </div>
                <div className={styles.bt_wrap}>
                    <div className={styles.on} onClick={() => Router.back()}>목록</div>
                    {userInfo.id == qnaDetail.userId &&(
                    <>
                        <div className={styles.editbutton} onClick={() => router.push(`/userboard/edit/${id}`)}> 수정</div>
                        <div className={styles.deletebutton} onClick={deleteUserboard}> 삭제</div>
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
