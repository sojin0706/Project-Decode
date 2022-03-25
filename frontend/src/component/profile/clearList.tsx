import { Grid, Image } from "semantic-ui-react";
import { useState, useEffect } from "react";
import IsLogin from "../../lib/customLogin";
import axios from "axios";

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

  useEffect(() => {
    if (userInfo !== 0) {
      axios
        .get(`http://j6c203.p.ssafy.io:8082/review/poster/${userInfo.id}`)
        .then((data) => {
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
  }, [userInfo]);
  return (
    <>
      <Grid columns={4}>
        {myClearLst.map((p: any, i: number) => {
          return (
            <Grid.Column key={i}>
              <Image src={p[2]} alt={p[1]} />
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
