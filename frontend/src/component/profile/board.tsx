import { List, Tab } from "semantic-ui-react";
import { useState, useEffect } from "react";
import IsLogin from "../../lib/customLogin";
import axios from "axios";
import { useRouter } from "next/router";
import { Pagination } from "semantic-ui-react";
import Userboard from "../../../pages/userboard";
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

  const [totalPageUserBoard, setTotalPageUserBoard] = useState(1);
  const [currentPagesUserBoard, setCurrentPagesUserBoard] = useState(1);
  // userBoard

  const [totalPageComment, setTotalPageComment] = useState(1);
  const [currentPagesComment, setCurrentPagesComment] = useState(1);
  // comment

  const [totalPageQa, setTotalPageQa] = useState(1);
  const [currentPagesQa, setCurrentPagesQa] = useState(1);
  // qa



  useEffect(() => {
    const lastPageUserBoard = Math.ceil(userBoard.length / 3);
    setTotalPageUserBoard(lastPageUserBoard ? lastPageUserBoard : 1);
    const lastPageComment = Math.ceil(comment.length / 3);
    setTotalPageComment(lastPageComment ? lastPageComment : 1);
    const lastPageQa = Math.ceil(qa.length / 3);
    setTotalPageQa(lastPageQa ? lastPageQa : 1);
  }, [qa, Comment, Userboard]);



  function movePageUserBoard(e: any) {
    if (e.target.type === "nextItem") {
      if (currentPagesUserBoard === totalPageUserBoard ) {
        return;
      } else {
        setCurrentPagesUserBoard(Number(currentPagesUserBoard + 1));
      }
    } else if (e.target.type === "prevItem") {
      if (currentPagesUserBoard === 1) {
        return;
      } else {
        setCurrentPagesUserBoard(Number(currentPagesUserBoard - 1));
      }
    } else if (e.target.type === "pageItem") {
      setCurrentPagesUserBoard(Number(e.target.textContent));
    }
  }
  useEffect(() => {
    console.log(currentPagesUserBoard)
  },[currentPagesUserBoard])

  function movePageComment(e: any) {
    if (e.target.type == "nextItem") {
      if (currentPagesComment === totalPageComment ) {
        return;
      } else {
        setCurrentPagesComment(Number(currentPagesComment + 1));
      }
    } else if (e.target.type === "prevItem") {
      if (currentPagesComment === 1) {
        return;
      } else {
        setCurrentPagesComment(Number(currentPagesComment - 1));
      }
    } else if (e.target.type === "pageItem") {
      setCurrentPagesComment(Number(e.target.textContent));
    }
  }

  function movePageQa(e: any) {
    if (e.target.type == "nextItem") {
      if (currentPagesQa === totalPageQa ) {
        return;
      } else {
        setCurrentPagesQa(Number(currentPagesQa + 1));
      }
    } else if (e.target.type === "prevItem") {
      if (currentPagesQa === 1) {
        return;
      } else {
        setCurrentPagesQa(Number(currentPagesQa - 1));
      }
    } else if (e.target.type === "pageItem") {
      setCurrentPagesQa(Number(e.target.textContent));
    }
  }

  const panes = [
    {
      menuItem: "유저 게시판",
      render: () => (
        <>
          <Tab.Pane attached={false}>
            내가 작성한 유저 게시판 글
            <ul>
              {userBoard.map((d: any, i: number) => {
                if ((currentPagesUserBoard - 1) * 3 <= i && i < currentPagesUserBoard * 3)
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
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={2}
            totalPages={totalPageUserBoard}
            onClick={movePageUserBoard}
            activePage={currentPagesUserBoard}
          />
        </>
      ),
    },
    {
      menuItem: "댓글",
      render: () => (
        <>
          <Tab.Pane attached={false}>
            내가 작성한 댓글
            <ul>
              {comment.map((d: any, i: number) => {
                if ((currentPagesComment - 1) * 3 <= i && i < currentPagesComment * 3)
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
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={2}
            totalPages={totalPageComment}
            onClick={movePageComment}
            activePage={currentPagesComment}
          />
        </>
      ),
    },
    {
      menuItem: "Q&A",
      render: () => (
        <>
          <Tab.Pane attached={false}>
            내가 작성한 Q&A 글
            <ul>
              {qa.map((d: any, i: number) => {
                if ((currentPagesQa - 1) * 3 <= i && i < currentPagesQa * 3)
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

          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={2}
            totalPages={totalPageQa}
            onClick={movePageQa}
            activePage={currentPagesQa}
          />
        </>
      ),
    },
  ];

  return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
}
