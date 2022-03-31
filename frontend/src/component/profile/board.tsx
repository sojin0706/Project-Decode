import { List, Tab } from "semantic-ui-react";
import { useState, useEffect } from "react";
import IsLogin from "../../lib/customLogin";
import axios from "axios";
import { useRouter } from "next/router";
import Detail from "../modal/detail";
export default function Board() {
  const router = useRouter();
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
  const [review, setReview]: any[] = useState([]);
  const tmpReview: any[] = [];
  useEffect(() => {
    if (userInfo !== 0) {
      axios
        .get(`http://j6c203.p.ssafy.io:8082/review/myreview/${userInfo.id}`)
        .then(({ data }) => {
          data.review.content.map((d: any, i: number) => {
            tmpReview.push(d);
          });
        })
        .then(() => {
          setReview(tmpReview);
        });
    }
  }, [userInfo]);

  // 유저게시판 불러오기
  const [userBoard, setUserBoard] = useState([]);
  const tmpUserBoard: any = [];
  useEffect(() => {
    if (userInfo !== 0) {
      axios
        .get(`http://j6c203.p.ssafy.io:8082/article/profile/${userInfo.id}`)
        .then(({ data }) => {
          data.myArticleList.content.map((d: any, i: number) => {
            tmpUserBoard.push(d);
          });
        })
        .then(() => {
          setUserBoard(tmpUserBoard);
        });
    }
  }, [userInfo]);

  // 댓글 불러오기
  const [comment, setComment] = useState([]);
  const tmpComment: any = [];
  useEffect(() => {
    if (userInfo !== 0) {
      axios
        .get(`http://j6c203.p.ssafy.io:8082/comment/profile/${userInfo.id}`)
        .then(({ data }) => {
          data.myArticleCommentList.content.map((d: any, i: number) => {
            tmpComment.push(d);
            axios
              .get(`http://j6c203.p.ssafy.io:8082/article/${d.articleId}`)
              .then(({ data }) => {
                tmpComment[i].userImage = data.article.title;
              });
          });
        })
        .then(() => {
          setComment(tmpComment);
        });
    }
  }, [userInfo]);

  // Q&A 불러오기
  const [qa, setQA] = useState([]);
  const tmpQA: any = [];
  useEffect(() => {
    if (userInfo !== 0) {
      axios
        .get(`http://j6c203.p.ssafy.io:8082/qna/profile/${userInfo.id}`)
        .then(({ data }) => {
          data.myQnaList.content.map((d: any, i: number) => {
            tmpQA.push(d);
          });
        })
        .then(() => {
          setQA(tmpQA);
        });
    }
  }, [userInfo]);

  const panes = [
    {
      menuItem: "리뷰",
      render: () => (
        <Tab.Pane attached={false}>
          <ul>
            {review.map((d: any, i: number) => {
              return (
                <li key={i} style={{ cursor: "pointer" }}>
                  번호: {d.themeReviewId} 테마:{" "}
                  <Detail themeId={d.themeId} isImage={false} w={150} h={200} />{" "}
                  내용: {d.reviewContent} 내가 준 평점: {d.myScore}
                </li>
              );
            })}
          </ul>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "유저 게시판",
      render: () => (
        <Tab.Pane attached={false}>
          내가 작성한 유저 게시판 글
          <ul>
            {userBoard.map((d: any, i: number) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    router.push(`/userboard/${d.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  번호: {d.id} 제목: {d.title} 내용: {d.content}
                </li>
              );
            })}
          </ul>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "댓글",
      render: () => (
        <Tab.Pane attached={false}>
          내가 작성한 댓글
          <ul>
            {comment.map((d: any, i: number) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    router.push(`/userboard/${d.articleId}`);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  글 제목: {d.userImage} 댓글 내용: {d.content}
                </li>
              );
            })}
          </ul>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Q&A",
      render: () => (
        <Tab.Pane attached={false}>
          내가 작성한 Q&A 글
          <ul>
            {qa.map((d: any, i: number) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    router.push(`/notice/qna/${d.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  번호: {d.id} 제목: {d.title} 내용: {d.content}
                </li>
              );
            })}
          </ul>
        </Tab.Pane>
      ),
    },
  ];

  return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
}
