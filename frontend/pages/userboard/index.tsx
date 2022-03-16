import {
    Pagination,
    Grid,
  } from "semantic-ui-react";
import React, {Component} from 'react'
  
import styles from "../../styles/notice/notice.module.css";

export default function userboard() {

return (
    <>
 <Grid>
    <Grid.Column width={2}></Grid.Column>
    <Grid.Column width={12}>
    <div className={styles.board_wrap}>    
     
        <div className={styles.button_align}>
            <Grid>
                <Grid.Column width={13}>
                <div className={styles.board_title}>
                    <strong>유저게시판</strong>
               </div> 
                <div>함께 방탈출할 친구를 구해보세요</div>
                </Grid.Column>
                <Grid.Column width={3}>
                <div className={styles.bt_wrap}>
                    <a href="/userboard/create" className={styles.on}>글 작성</a>
                </div>
                </Grid.Column>
            </Grid>
        </div>
        <div className={styles.board_list_wrap}>
            <div className={styles.board_list}>
                <div className={styles.top}>
                    <div className={styles.type}>유형</div>
                    <div className={styles.num}>번호</div>
                    <div className={styles.title}>제목</div>
                    <div className={styles.writer}>글쓴이</div>
                    <div className={styles.date}>작성일</div>
                </div>
                <div>
                    <div className={styles.type}>Q&A</div>
                    <div className={styles.num}>1</div>
                    <div className={styles.title}><a href="/userboard/detail">제목test</a></div>
                    <div className={styles.writer}>하루</div>
                    <div className={styles.date}>2022.03.14</div>
                </div>

            </div>
            <div className={styles.board_page}>
            <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={10}
             />

            </div>
        </div>
    </div>
    </Grid.Column>
    <Grid.Column width={2}></Grid.Column>
    </Grid>
    
    </>
);
}