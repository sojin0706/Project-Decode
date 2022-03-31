import { useEffect, useState } from "react";
import IsLogin from "../../lib/customLogin";
import axios from "axios";
import Image from "semantic-ui-react";

export default function UserImage() {
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

  return (
    <>
      <Image src="/images/test_chr.png" alt="test"></Image>
    </>
  );
}
