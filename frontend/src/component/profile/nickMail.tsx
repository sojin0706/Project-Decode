import { useState, useEffect } from "react";
import IsLogin from "../../lib/customLogin";
import axios from "axios";

export default function  NickMail(){
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
  return (
    <>
      <h1>닉네임 : {JSON.stringify(userInfo.nick_name)}</h1>
    </>
  )
}