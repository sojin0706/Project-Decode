import type { NextPage } from "next";
import { Grid, GridColumn, Image } from "semantic-ui-react";
import IsLogin from "../src/lib/customLogin";
import { useState, useEffect } from "react";
import recoAxios from "../src/lib/recoAxios";
import getrecoAxios from "../src/lib/getrecoAxios";
// Component
import Data from "../src/component/main/data";
import Explain from "../src/component/main/explain";
import axios from "axios";
import Detail from "../src/component/modal/detail";
export default function Home() {
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

  useEffect(() => {
    loadMyRecommend();
  }, [userInfo.id]);

  const [myRecommend, setMyRecommend]: any = useState([]);

  const loadMyRecommend = async () => {
    if (userInfo.id) {
      getrecoAxios
        .get(`/recommend/like/${userInfo.id}`)
        // getrecoAxios.get(`/recommend/like/1`)
        .then(({ data }) => {
          setMyRecommend(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const [notLoginReco, setNotLoginReco] = useState([])
  useEffect(() => {
    axios.get('http://j6c203.p.ssafy.io:8082/home/nonmember')
    .then (({data}) => {
      const arr = data.themes
      arr.sort(function(){return Math.random() - Math.random();})
      setNotLoginReco(arr)
    })
  },[])

  if (IsLogin()) {
    return (
      <>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
              <h1>안녕하세요 {userInfo.nick_name}님!</h1>
              <h1>좋아하실만한 테마를 추천해드릴게요!</h1>
              <Grid centered columns={4}>
                <Grid.Column>
                  <Detail
                    themeId={myRecommend.like_one}
                    isImage={true}
                    w={150}
                    h={200}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Detail
                    themeId={myRecommend.like_two}
                    isImage={true}
                    w={150}
                    h={200}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Detail
                    themeId={myRecommend.like_three}
                    isImage={true}
                    w={150}
                    h={200}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Detail
                    themeId={myRecommend.like_four}
                    isImage={true}
                    w={150}
                    h={200}
                  />
                </Grid.Column>
              </Grid>
              <Grid centered columns={5}>
                <Data />
              </Grid>
              <Explain />
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
              <h1>안녕하세요 게스트님!</h1>
              <h1>로그인을 하고 맞춤 테마를 추천받아보세요!</h1>
              <Grid centered columns={4}>
                <Grid.Column>
                  <Detail
                    themeId={notLoginReco[0]}
                    isImage={true}
                    w={150}
                    h={200}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Detail
                    themeId={notLoginReco[1]}
                    isImage={true}
                    w={150}
                    h={200}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Detail
                    themeId={notLoginReco[2]}
                    isImage={true}
                    w={150}
                    h={200}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Detail
                    themeId={notLoginReco[3]}
                    isImage={true}
                    w={150}
                    h={200}
                  />
                </Grid.Column>
              </Grid>
              <Grid centered columns={5}>
                <Data />
              </Grid>
              <Explain />
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}
