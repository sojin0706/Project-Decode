import { Grid, Image } from "semantic-ui-react";
import axios from "axios";
import { useEffect, useState } from "react";
// Components
import IsLogin from "../../src/lib/customLogin";
import Graph from "../../src/component/profile/graph"
import RecentClear from "../../src/component/profile/recentClear";
import ClearList from "../../src/component/profile/clearList";
import UserInfo from "../../src/component/profile/userInfo";
import Board from "../../src/component/profile/board";
import UserImage from "../../src/component/profile/userImage";

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
          setUserInfo(data.body.user)
        })
        .catch((e: any) => {
          console.log("에러");
          console.log(e);
        });
    }
  }, []);
  console.log(userInfo.image)
  return (
    <>
      <Grid stackable>
        <Grid.Row>
          {/* 여백 */}
          <Grid.Column width={2}>
          </Grid.Column>

          <Grid.Column width={12}>
            <Grid centered columns={4}>
              <Grid.Column width={5}>
                <Image src= {userInfo.image} alt='profileImage'></Image>
              </Grid.Column>

              <Grid.Column width={1}>
              </Grid.Column>

              <Grid.Column width={6}>
                <br></br>
                <UserInfo/>
              </Grid.Column>

              <Grid.Column width={4}>
                <RecentClear/>
              </Grid.Column>
            </Grid>

            <Grid centered columns={4}>
              <Grid.Column width={8}>
                <Graph/>
                
              </Grid.Column>

              <Grid.Column width={8}>
                <Board/>
              </Grid.Column>
                
            </Grid>

            <ClearList/>
          </Grid.Column>

          {/* 여백 */}
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
