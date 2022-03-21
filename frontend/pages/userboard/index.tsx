import { useState } from 'react';
// import {
//     Pagination,
//     Grid,
//     Dropdown,
//     Input,
//     Icon
//   } from "semantic-ui-react";
// import React, {Component} from 'react'
// import Region from "../../src/component/filter/region";
// import styles from "../../styles/userboard/userboard.module.css";

// const options = [
//     { key: '제목', value: '제목', text: '제목' },
//     { key: '내용', value: '내용', text: '내용' },
//     { key: '글쓴이', value: '글쓴이', text: '글쓴이' }
// ]

// export default function userboard() {

// return (
//     <>
//  <Grid>
//     <Grid.Column width={2}></Grid.Column>
//     <Grid.Column width={12}>
//     <div className={styles.board_wrap}>    
     
//         <div className={styles.userboardtop}>
//             <Grid>
//                 <Grid.Column width={10}>
//                 <div className={styles.board_title}>
//                     <strong>유저게시판</strong>
//                     <div className={styles.regionfilter}>
//                         <Region />
//                     </div>

//                </div> 
               
//                 </Grid.Column>
//                 <Grid.Column width={4}>
//                     <div className={styles.board_search}>
//                         <Input
//                             icon={<Icon name='search' inverted circular link />}
//                             action={
//                                 <Dropdown button basic floating options={options} placeholder='검색' defaultValue='page' />
//                             }
//                             actionPosition='left' 
//                             placeholder='검색어를 입력하세요'
//                         />
//                     </div>
//                 </Grid.Column>
//                 <Grid.Column width={2}>
//                 <div className={styles.bt_wrap}>
//                     <a href="/userboard/create" className={styles.on}>글 작성</a>
//                 </div>
//                 </Grid.Column>
//             </Grid>
//         </div>
//         <div className={styles.board_list_wrap}>
//             <div className={styles.board_list}>
//                 <div className={styles.top}>
//                     <div className={styles.type}>지역</div>
//                     <div className={styles.num}>번호</div>
//                     <div className={styles.title}>제목</div>
//                     <div className={styles.writer}>글쓴이</div>
//                     <div className={styles.date}>작성일</div>
//                 </div>
//                 <div>
//                     <div className={styles.type}>강남</div>
//                     <div className={styles.num}>1</div>
//                     <div className={styles.title}><a href="/userboard/detail">제목test</a></div>
//                     <div className={styles.writer}>하루</div>
//                     <div className={styles.date}>2022.03.14</div>
//                 </div>

//             </div>
//             <div className={styles.board_page}>
//             <Pagination
//             boundaryRange={0}
//             defaultActivePage={1}
//             ellipsisItem={null}
//             firstItem={null}
//             lastItem={null}
//             siblingRange={1}
//             totalPages={10}
//              />

//             </div>
//         </div>
//     </div>
//     </Grid.Column>
//     <Grid.Column width={2}></Grid.Column>
//     </Grid>
    
//     </>
// );
// }