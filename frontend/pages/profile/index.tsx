import { Grid, Image } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import Graph from "../../src/component/profile/graph"
import RecentClear from "../../src/component/profile/recentClear";
import ClearList from "../../src/component/profile/clearList";
import NickMail from "../../src/component/profile/nickMail";
import UserInfo from "../../src/component/profile/userInfo";
import Board from "../../src/component/profile/board";
import IsLogin from "../../src/lib/customLogin";

export default function Index() {
  const isLogin = IsLogin;
  const [userInfo, setUserInfo]: any = useState([]);

  useEffect(() => {
    if (isLogin()) {
      var Token: any = null;
      if (typeof window !== "undefined") Token = localStorage.getItem("token");

      axios
        .get("http://j6c203.p.ssafy.io:8081/auth/users", {
          headers: { Authorization: `Bearer ${Token}` },
        })
        .then(({ data }) => {
          console.log("데이터");
          console.log(data);
          console.log(data.body.user)
          setUserInfo(data.body.user)
        })
        .catch((e: any) => {
          console.log("에러");
          console.log(e);
        });
    }
  }, []);
  console.log(userInfo)

  // props test
  const [test, setTest] = useState('please')
  console.log(userInfo)
  return (
    <>
      <Grid stackable>
        <Grid.Row>
          {/* 여백 */}
          <Grid.Column width={2}>

          </Grid.Column>

          {/* 본문 */}
          <Grid.Column width={12}>
            {/* 프로필사진, 그래프, 최근클리어 */}
            <Grid centered columns={4}>
              {/* 프로필사진 */}
              <Grid.Column width={3}>
                <Image src= "/images/test_chr.png" alt='test'></Image>
              </Grid.Column>

              {/* 닉네임, 이메일 */}
              <Grid.Column width={5}>
                <br></br>
                <NickMail test={test}/>
                <Graph/>
              </Grid.Column>

              {/* 그래프 */}
              <Grid.Column width={4}>
                <Graph/>
              </Grid.Column>

              {/* 최근클리어 */}
              <Grid.Column width={4}>
                <RecentClear/>
              </Grid.Column>
            </Grid>
            {/* 프로필정보, 작성글 리스트 */}
            <Grid centered columns={4}>
              {/* 프로필정보 */}
              <Grid.Column width={6}>
                <UserInfo/>
              </Grid.Column>

              {/* 작성글 리스트 */}
              <Grid.Column width={10}>
                <Board/>
              </Grid.Column>
                
            </Grid>

            {/* 클리어한 테마 리스트들 */}
            <ClearList/>
          </Grid.Column>

          {/* 여백 */}
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
