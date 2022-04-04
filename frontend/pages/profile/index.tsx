import { Grid, Image } from "semantic-ui-react";
import axios from "axios";
import { useEffect, useState } from "react";
// Components
import IsLogin from "../../src/lib/customLogin";
import Graph from "../../src/component/profile/graph";
import ClearList from "../../src/component/profile/clearList";
import UserInfo from "../../src/component/profile/userInfo";
import Board from "../../src/component/profile/board";

export default function Index() {
  const [userInfo, setUserInfo]: any = useState([]);

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

  if (IsLogin()) {
    return (
      <>
        <Grid stackable>
          <Grid.Row>
            {/* 여백 */}
            <Grid.Column width={2}></Grid.Column>

            {/* 왼쪽 프로필사진, 정보, 그래프 */}
            <Grid.Column width={6}>
              <Grid centered>
                <Grid.Column width={10}>
                  <Image src={userInfo.image} alt="profileImage"></Image>
                </Grid.Column>
                <Grid.Column width={6}>
                  <br></br>
                  <UserInfo></UserInfo>
                </Grid.Column>
              </Grid>
              <Graph></Graph>
            </Grid.Column>

            {/* 오른쪽 클리어리스트, 게시글 */}
            <Grid.Column width={6}>
              <Board></Board>
              <br></br>
              <ClearList></ClearList>
            </Grid.Column>

            {/* 여백 */}
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );

  } else {
    return <></>;
  }
}
