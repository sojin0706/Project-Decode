import {
    Grid,
  } from "semantic-ui-react";
import React, {Component} from 'react'
import styles from "../../styles/notice/create.module.css";

export default function noticecreate() {

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
                    <strong>Q&A</strong>
                </div>
                <div>문의사항이 있으실 경우 질문을 남겨주세요</div>
                </Grid.Column>
            </Grid>
        </div>
            <div className={styles.board_write_wrap}>
                <div className={styles.board_write}>
                    <div className={styles.title}>
                        <dl>
                            <dt>제목</dt>
                            <dd><input type="text" placeholder="제목 입력"/></dd>
                        </dl>
                    </div>
                    <div className={styles.info}>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd>하루</dd>
                        </dl>
                        <dl>
                            <dt>비밀번호</dt>
                            <dd><input type="password" placeholder="비밀번호 입력"/></dd>
                        </dl>
                    </div>
                    <div className={styles.cont}>
                        <textarea placeholder="내용 입력"></textarea>
                    </div>

                </div>


                <div className={styles.bt_wrap}>
                    <a href="/notice" className={styles.on}>등록</a>
                    <a href="/notice">취소</a>
                </div>
            </div>
    </div>
    </Grid.Column>
    <Grid.Column width={2}></Grid.Column>
    </Grid>
    </>
    );
    }