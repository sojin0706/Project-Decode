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
import Notice from "../..";

export default function Qna_detail() {

    const [userInfo, setUserInfo]: any = useState([])
    const [qnaDetail,setQnaDetail]:any = useState([])
    const [comments, setComments]:any = useState('')
    const [comentInfo, setComentInfo]:any = useState([])
    const router = useRouter()
    const id = Number(router.query.id)

    // 유저
    useEffect(() => {
        loadUser()
    }, [])



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
    
    // qna
    useEffect(() => {
        loadqnaDetail(id)
    }, [id])

    const loadqnaDetail = async(id:Number) => {
        await allAxios
            .get(`/qna/${id}`)
            .then(({ data }) => {
                console.log(data.qna)
                setQnaDetail(data.qna)
            })
            .catch((e) => {
                console.log(e)
            })      
    }

    const deleteqna = () => {
        allAxios
        .delete(`/qna/{id}`)
        .then(()=>{
            alert("게시글이 삭제되었습니다.")
            router.push("/userboard");
        })
        .catch(() => {
        alert("잠시 후 다시 시도해주세요.")
        });
    };

    // 댓글
    // useEffect(() => {
    //     loadcomment(id)
    // }, [id])

    // const loadcomment = async(id:Number) => {
    //     await allAxios
    //         .get(`/qnaComment/${id}`)
    //         .then(({ data }) => {
    //             console.log(data.commentList)
    //             setComentInfo(data.commentList)
    //         })
    //         .catch((e) => {
    //             console.log(e)
    //         })      
    // }  





    const submitComment = async() => {
        if (comments.length == 0 || comments.length > 100){
            alert('댓글은 1자 이상 100자 이하로 작성해주세요')
            return
        }
        if (IsLogin()){
            const body = {
                content: comments,
                id: qnaDetail.id,
                qnaId: qnaDetail.id,
                userId: userInfo.id,
            }
        await allAxios.post(`/qnaComment`, body)
        .then(() => {
            alert('리뷰가 작성되었습니다.')

        })
        .catch((e) => {
            console.log(e)
            alert('잠시 후 다시 시도해주세요')
        })
        }
    }

    function writeComment(e: any){
        setComments(e.target.value)
    }



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
                        {qnaDetail.title}
                    </div>
                    <div className={styles.info}>
                        <dl>
                            <dt>번호</dt>
                            <dd>{id}</dd>
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
                        {qnaDetail.content}
                    </div>
                    
                </div>
                <div className={styles.bt_wrap}>
                    <div className={styles.on} onClick={() => Router.back()}>목록</div>
                    {userInfo.id == qnaDetail.userId &&(
                    <>
                        <div className={styles.editbutton} onClick={() => router.push(`/notice/editQna/${id}`)}> 수정</div>
                        <div className={styles.deletebutton} onClick={deleteqna}> 삭제</div>
                    </>
                    )}
                </div>
                <div className={styles.comment_cont}>
                    <div className={styles.comment_title}>
                        댓글쓰기
                    </div>
                        {userInfo.id?
                            <Grid verticalAlign='middle' centered stackable>
                            <Grid.Column width={1}>
                                <Comment.Group size='massive'>
                                    <Comment>
                                        <Comment. Avatar src={userInfo.image} />
                                    </Comment>
                                </Comment.Group>
                            </Grid.Column>
                            <Grid.Column width={1}>
                                <div className={styles.comment_createname}>
                                    {userInfo.nick_name}
                                </div>
                            </Grid.Column>
                            <Grid.Column width={12}>
                            <div>
                                <textarea value={comments} placeholder="댓글을 작성해주세요" onChange={writeComment}></textarea>
                            </div>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <div className={styles.comment_button}>
                                    <Button color='black' onClick={submitComment}> 작성 </Button>
                                </div>
                            </Grid.Column>
                        </Grid>
                        :''}
                                    
                        {/* {comentInfo? comentInfo.map((comment:any) => {
                            return( */}
                            <Comment.Group >
                            <Comment>
                            <Comment. Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'></Comment.Author>
                                <Comment.Metadata>
                                <div>하루 전</div>
                                </Comment.Metadata>
                                <Comment.Text>
                                <p>방탈출 함께 해요</p>
                                </Comment.Text>
                            </Comment.Content>
                            </Comment>
                        </Comment.Group>

                         {/* );
                        }) : ''} */}
                        </div>
                    </div>
            </div>
    
    </Grid.Column>
    <Grid.Column width={2}></Grid.Column>
    </Grid>
    
    </>
);
}
