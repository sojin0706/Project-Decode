import {
    Pagination,
    Grid,
    Button,
  } from "semantic-ui-react";
import React, {Component} from 'react'
  
import styles from "../../styles/userboard/detail.module.css";
import { isDynamicRoute } from "next/dist/shared/lib/router/utils";

export default function userboard_detail() {

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
                    <div className={styles.cont}>
                        글 내용이 들어갑니다.
                    </div>
                    
                </div>
                <div className={styles.comment}>
                    <div className={styles.comment_review}>
                        <dl>추천</dl>
                        <dl>신고</dl>
                    </div>
                    <div className={styles.comment_title}>
                        댓글쓰기
                    </div>
                    <div className={styles.comment_create}>
                    <div className={styles.cont}>
                    <textarea placeholder="내용 입력"></textarea>
                    </div>
                    <Button>등록</Button>
                    </div>
                    <div className={styles.comment_view}>
                    <dl>
                        <dt>유저이름</dt>
                    </dl>
                    <dl>
                        <dt>리뷰내용</dt>
                    </dl>
                    </div>
                </div>
                <div className={styles.bt_wrap}>
                    <a href="/userboard" className={styles.on}>목록</a>
                    <a href="/userboard/create">수정</a>
                </div>
            </div>
    </div>
    </Grid.Column>
    <Grid.Column width={2}></Grid.Column>
    </Grid>
    
    </>
);
}
