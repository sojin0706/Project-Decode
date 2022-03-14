import React, {Component} from 'react'
  
import styles from "../../styles/noticedetail.module.css";

export default function noticedetail() {

return (
    <>
    <div className={styles.board_wrap}>
        <div className={styles.board_title}>
            <strong>공지게시판</strong>
            <p>문의사항이 있으실 경우 질문을 남겨주세요</p>
        </div>
        <div className={styles.board_list_wrap}>
            <div className={styles.board_list}>
                
            </div>
            <div className={styles.board_page}>

            </div>
            <div className={styles.bt_wrap}>
                <a href="#" className={styles.on}>목록</a>
                <a href="#" className={styles.on2}>수정</a>
            </div>
        </div>
    </div>
    
    </>
);
}