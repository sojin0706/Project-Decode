import {
    Pagination,
    Grid,
  } from "semantic-ui-react";
import React, {Component} from 'react'
  
import styles from "../../styles/notice/detail.module.css";

export default function notice() {

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
            <div className={styles.board_list_wrap}>
                <div className={styles.board_list}>
                    
                </div>
                <div className={styles.board_page}>

                </div>
                <div className={styles.bt_wrap}>
                    <a href="/notice" className={styles.on}>목록</a>
                    <a href="#" className={styles.on2}>수정</a>
                </div>
            </div>
    </div>
    </Grid.Column>
    <Grid.Column width={2}></Grid.Column>
    </Grid>
    
    </>
);
}
