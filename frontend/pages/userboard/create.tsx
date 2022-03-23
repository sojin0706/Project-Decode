import {
    Grid,
  } from "semantic-ui-react";
import React from 'react'
import styles from "../../styles/userboard/create.module.css";
import Region from "../../src/component/filter/region";

import { useEffect, useState } from 'react';


export default function Userboard_create() {

    const [title, setTitle] = useState('')
    const [user, setUser] = useState('')
    const [content, setContent] = useState([])
    const [region, setRegion] = useState('')
    const [smallRegion, setSmallRegion] = useState('')

    function changeTitle(e: any){
        setTitle(e.target.value)
    }

    function changeContent(e: any){
        setTitle(e.target.value)
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
            <div className={styles.board_write_wrap}>
                <div className={styles.board_write}>
                    <div className={styles.title}>
                        <dl>
                            <dt>제목</dt>
                            <dd><input value={title} type="text" placeholder="제목 입력"/></dd>
                        </dl>
                    </div>
                    <div className={styles.info}>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd>하루</dd>
                        </dl>
                        <dl>
                            <dt>지역선택</dt>
                            <dd><Region /></dd>
                        </dl>
                    </div>
                    <div className={styles.cont}>
                        <textarea value={content} placeholder="내용 입력"></textarea>
                    </div>
                    
                </div>


                <div className={styles.bt_wrap}>
                    <div className={styles.on}>등록</div>
                    <div>취소</div>
                </div>
            </div>
    </div>
    </Grid.Column>
    <Grid.Column width={2}></Grid.Column>
    </Grid>
    </>
    );
    }