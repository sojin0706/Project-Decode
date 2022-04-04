import { useState, useEffect } from "react";
import IsLogin from "../../lib/customLogin";
import axios from "axios";
import UserInfoModal from "./userInfoModal";
import userAxios from "../../lib/userAxios";

export default function UserInfo() {
  const [userInfo, setUserInfo]: any = useState(0);

  const getUserInfo = async () => {
    userAxios
      .get(`/auth/users`)
      .then((data) => {
        setUserInfo(data.data.body.user);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const genreArr = [
    "19금",
    "모험/액션",
    "코미디",
    "드라마/감성",
    "공포",
    "추리",
    "SF/판타지",
    "스릴러",
    "범죄",
    "로맨스",
  ];
  const [favoriteGenre, setFavoriteGenre] = useState("");
  useEffect(() => {
    if (IsLogin()) {
      getUserInfo();
      axios
        .get(`http://j6c203.p.ssafy.io:8081/user/allProfile/2`)
        .then(({ data }) => {
          setFavoriteGenre(
            genreArr[
              [
                data.adult,
                data.adventure,
                data.comedy,
                data.drama,
                data.horror,
                data.reasoning,
                data.sf_fantasy,
                data.thrill,
                data.crime,
                data.romance,
              ].indexOf(
                Number(
                  Math.max.apply(null, [
                    data.adult,
                    data.adventure,
                    data.comedy,
                    data.drama,
                    data.horror,
                    data.reasoning,
                    data.sf_fantasy,
                    data.thrill,
                    data.crime,
                    data.romance,
                  ])
                )
              )
            ]
          );
        });
    }
  }, []);

  // 선호장르 1등 받아오기
  // useEffect(() => {
  //   if (userInfo !== 0) {
  //   console.log(userInfo)}
  // },[userInfo])

  return (
    <>
      <h3>
        이름:{" "}
        {String(JSON.stringify(userInfo.name)).substr(
          1,
          String(userInfo.name).length
        )}
      </h3>
      <h3>
        닉네임:
        {String(JSON.stringify(userInfo.nick_name)).substr(
          1,
          String(userInfo.nick_name).length
        )}
      </h3>
      <h3>연령대: {JSON.stringify(userInfo.age)}대</h3>
      <h3>성별: {String(JSON.stringify(userInfo.gender)).substr(1, 1)}</h3>
      <h3>선호장르: {favoriteGenre}</h3>
      <h3>
        활동지역:
        {String(JSON.stringify(userInfo.small_region)).substr(
          1,
          String(userInfo.small_region).length
        )}
      </h3>
      <UserInfoModal></UserInfoModal>
    </>
  );
}
