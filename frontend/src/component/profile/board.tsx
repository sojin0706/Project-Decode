import { List, Tab } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import IsLogin from "../../lib/customLogin";
import axios from "axios";
import { useRouter } from 'next/router';

export default function Board() {
  const router = useRouter()
  const [userInfo, setUserInfo]: any = useState(0);

  useEffect(() => {
    if (IsLogin()) {
      var Token: any = null;
      if (typeof window !== "undefined") Token = localStorage.getItem("token");

      axios
        .get("http://j6c203.p.ssafy.io:8081/auth/users", {
          headers: { Authorization: `Bearer ${Token}` },
        })
        .then(({ data }) => {
          setUserInfo(data.body.user);
        })
        .catch((e: any) => {
          console.log("에러");
          console.log(e);
        });
    }
  }, []);
  
  // 리뷰 불러오기
  const [review, setReview] = useState([])
  const tmpReview:any = []
  useEffect(() => {
    if (userInfo !== 0) {
      axios.get(`http://j6c203.p.ssafy.io:8082/review/myreview/${userInfo.id}`)
      .then(({data}) => {
        data.review.content.map((d:any, i:number) => {
          const tmparr:any = []
          tmparr.push(d["createdAt"])
          tmparr.push(d["myScore"])
          tmparr.push(d["reviewContent"])
          tmparr.push(d["themeId"])
          tmparr.push(d["themeName"])
          tmparr.push(d["themeReviewId"])
          tmpReview.push(tmparr)
        })
        setReview(tmpReview)
      })
    }
  },[userInfo])

  // 유저게시판 불러오기
  const [userBoard, setUserBoard] = useState([])
  const tmpUserBoard:any = []
  useEffect(() => {
    if (userInfo !== 0) {
      axios.get(`http://j6c203.p.ssafy.io:8082/article/profile/${userInfo.id}`)
      .then(({data}) => {
        data.myArticleList.content.map((d:any, i:number) => {
          tmpUserBoard.push(d)
        })
      })
      .then(() => {
        console.log(tmpUserBoard)
        setUserBoard(tmpUserBoard)
      })
    }
  },[userInfo])

const panes = [
  {
    menuItem: '리뷰',
    render: () => <Tab.Pane attached={false}>
      <ul>
        <p>{review}</p>
      </ul>
    </Tab.Pane>
  },
  {
    menuItem: '유저 게시판',
    render: () => <Tab.Pane attached={false}>내가 작성한 유저 게시판 글
    <ul>
      {userBoard.map((d:any, i: number) => {
        return (
          <li key={i} onClick = {() => {router.push(`/userboard/${d.id}`)}} style = {{cursor: 'pointer'}}>번호: {d.id} 제목: {d.title} 내용: {d.content}</li>
        )
      })}
    </ul>
    </Tab.Pane>,
  },
  {
    menuItem: '댓글',
    render: () => <Tab.Pane attached={false}>내가 작성한 댓글</Tab.Pane>,
  },
  {
    menuItem: 'Q&A',
    render: () => <Tab.Pane attached={false}>내가 작성한 Q&A 글</Tab.Pane>,
  },
]


return (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)
}
