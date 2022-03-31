import {
    Button,
    Comment,
    Divider,
    Grid,
    Icon,
  } from "semantic-ui-react";
import React from 'react'
import { useEffect, useState } from "react";
import allAxios from "../../../src/lib/allAxios";
import styles from "../../../styles/userboard/detail.module.css";
import Router, { useRouter } from "next/router";
import IsLogin from "../../../src/lib/customLogin";
import userAxios from "../../../src/lib/userAxios";

export default function Userboard_detail() {
    const [userboardDetail,setUserboardDetail]:any = useState([])
    const [likes, setLikes] = useState(false)
    const [userInfo, setUserInfo]: any = useState(0)
    const router = useRouter()
    const id = Number(router.query.id)
    const [isLike, setisLike] = useState(false);
    const [comments, setComments]:any = useState('')

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

    // 게시글 정보

    useEffect(() => {
        loadUserboardDetail(id)
    }, [id])

    const loadUserboardDetail = async(id:Number) => {
        await allAxios
            .get(`/article/${id}`)
            .then(({ data }) => {
                console.log(data.article)
                setUserboardDetail(data.article)
            })
            .catch((e) => {
                console.log(e)
            })
        }


    const deleteuserboard = () => {
        allAxios
        .delete(`/article/${id}`)
        .then(()=>{
            alert("게시글이 삭제되었습니다.")
            router.push("/userboard");
        })
        .catch(() => {
        alert("잠시 후 다시 시도해주세요.")
        });
    };

    // 댓글
    const submitComment = async() => {
        if (comments.length == 0 || comments.length > 100){
            alert('댓글은 1자 이상 100자 이하로 작성해주세요')
            return
        }
        if (IsLogin()){
            const body = {
                content: comments,
                id: userboardDetail.id,
                articleId: userboardDetail.id,
                userId: userInfo.id,
            }
        await allAxios.post(`/comment`, body)
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
    <Grid stackable>
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
                        {userboardDetail.title}
                    </div>
                    <div className={styles.info}>
                        <dl>
                            <dt>번호</dt>
                            <dd>{id}</dd>
                        </dl>
                        <dl>
                            <dt>지역</dt>
                            <dd>{userboardDetail.smallRegion}</dd>
                        </dl>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd>{userboardDetail.nickName}</dd>
                        </dl>

                        <dl>
                            <dt>작성일</dt>
                            <dd>{userboardDetail.createdAt?userboardDetail.createdAt[0]+'.'+userboardDetail.createdAt[1]+'.'+userboardDetail.createdAt[2]:''}</dd>
                        </dl>
                        {/* <dl>
                            <dt>조회수</dt>
                            <dd>219</dd>
                        </dl>
                        <dl>
                            <dt>추천수</dt>
                            <dd>127</dd>
                        </dl> */}
                    </div>
                    <div className={styles.board_cont}>
                        {userboardDetail.content}
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
                    <div className={styles.on} onClick={() => Router.back()}>목록</div>
                    {userInfo.id == userboardDetail.userId &&(
                    <>
                        <div className={styles.editbutton} onClick={() => router.push(`/userboard/edit/${id}`)}> 수정</div>
                        <div className={styles.deletebutton} onClick={deleteuserboard}> 삭제</div>
                    </>
                    )}
                    
                </div>
                    <div className={styles.comments}>
                        
                        <div className={styles.comment_title}>
                            댓글쓰기
                        </div>
                        <div className={styles.comment_cont} >
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
                            </Comment.Content>
                            </Comment>
                        </Comment.Group>
                        <Divider/>
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
