import { Grid, Image } from "semantic-ui-react";
import { useState, useEffect } from "react";
import IsLogin from "../../lib/customLogin";
import axios from "axios";
import ClearPoster from "./clearListModal";
import { Pagination } from "semantic-ui-react";
export default function ClearList() {
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

  const clearLst: any = [];
  const [myClearLst, setMyClearLst] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  function movePage(e: any) {
    if (e.target.type === "nextItem") {
      if (currentPage === totalPage) {
        return;
      } else {
        setCurrentPage(Number(currentPage + 1));
      }
    } else if (e.target.type === "prevItem") {
      if (currentPage === 1) {
        return;
      } else {
        setCurrentPage(Number(currentPage - 1));
      }
    } else if (e.target.type === "pageItem") {
      setCurrentPage(Number(e.target.textContent));
    }
  }

  useEffect(() => {
    if (userInfo !== 0) {
      axios
        .get(
          `http://j6c203.p.ssafy.io:8082/review/poster/${userInfo.id}?page=${
            currentPage - 1
          }`
        )
        .then((data) => {
          setTotalPage(data.data.posters.totalPages);
          data.data.posters.content.map((d: any, i: number) => {
            return clearLst.push([d.themeId, d.themeName, d.posterUrl]);
          });
        })
        .then(() => {
          setMyClearLst(clearLst);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentPage, userInfo]);

  return (
    <>
      <Grid columns={4}>
        {myClearLst.map((p: any, i: number) => {
          return (
            <Grid.Column key={i}>
              <ClearPoster themeId={p[0]} isImage={false} w={150} h={200} />
            </Grid.Column>
          );
        })}
      </Grid>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={2}
        totalPages={totalPage}
        onClick={movePage}
        activePage={currentPage}
      />
    </>
  );
}
