import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

// components
import userAxios from "../../lib/userAxios";
import LoginModal from "../login/loginModal";
import IsLogin from "../../lib/customLogin";

export default function Navbar() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("token");
    // localStorage.removeItem("userID");
    router.reload();
  }

  function autoLogout() {
    if (IsLogin() && !userInfo.username) {
      logout();
    }
  }

  const isLogin = IsLogin;

  const [userInfo, setUserInfo]: any = useState([]);

  // useEffect(() => {
  //   if (IsLogin()) {
  //     userAxios
  //       .get(`/api/auth/users`)
  //       .then(({ data }) => {
  //         setUserInfo(data.body.user);
  //       })
  //       .catch((e: any) => {
  //         alert("로그인 시간이 만료되었습니다.");
  //         autoLogout();
  //       });
  //   }
  // }, []);

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
          console.log(data.body.user)
          setUserInfo(data.body.user)
        })
        .catch((e: any) => {
          console.log("에러");
          console.log(e);
        });
    }
  }, []);

  // if (userInfo.preference === null && router.pathname !== "/login") {
  //   router.push("/login")
  //   console.log("추가정보입력x")
  // }
  
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/login">
        <a className={router.pathname === "/login" ? "active" : ""}>login</a>
      </Link>
      <Link href="/profile">
        <a className={router.pathname === "/profile" ? "active" : ""}>
          profile
        </a>
      </Link>
      <Link href="/info">
        <a className={router.pathname === "/info" ? "active" : ""}>info</a>
      </Link>
      <Link href="/recommend">
        <a className={router.pathname === "/recommend" ? "active" : ""}>
          recommend
        </a>
      </Link>
      <Link href="/notice">
        <a className={router.pathname === "/notice" ? "active" : ""}>notice</a>
      </Link>
      <Link href="/userboard">
        <a className={router.pathname === "/userboard" ? "active" : ""}>
          userboard
        </a>
      </Link>
      {IsLogin() ? (
        <Link href="/">
          <a onClick={logout}>Logout</a>
        </Link>
      ) : (
        <LoginModal />
      )}

      {/* {IsLogin ? (
        <Link href="/">
          <a onClick={logout}>Logout</a>
        </Link>
      ) : (
        <LoginModal />
      )} */}

      <style jsx>{`
        a {
          text-decoration: none;
          font-size: larger;
        }
        .active {
          color: red;
        }
        nav {
          background-color: black;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </nav>
  );
}
