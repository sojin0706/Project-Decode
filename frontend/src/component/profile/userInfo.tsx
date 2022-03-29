import { useState, useEffect } from "react";
import IsLogin from "../../lib/customLogin";
import axios from "axios";

import UserInfoModal from "./userInfoModal";

export default function UserInfo() {
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
          console.log("dasdasd")
          console.log("에러");
          console.log(e);
        });
    }
  }, []);
  return (
    <>
      <h3>이름: {JSON.stringify(userInfo.name)}</h3>
      <h3>닉네임: {JSON.stringify(userInfo.nick_name)}</h3>
      <h3>연령대: {JSON.stringify(userInfo.age)}</h3>
      <h3>성별: {JSON.stringify(userInfo.gender)}</h3>
      <h3>선호장르: 고민중</h3>
      <h3>활동지역: {JSON.stringify(userInfo.small_region)}</h3>
      <UserInfoModal></UserInfoModal>
    </>
  )
}