import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import userAxios from "../../lib/userAxios";

// components
import LoginModal from "../login/loginModal";
import IsLogin from "../../lib/customLogin";

export default function Navbar() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("token");
    router.reload();
  }



  const getUserInfo = async () => {
    userAxios
      .get(`/auth/users`)
      .then((data) => {
        setUserInfo(data.data.body.user);
      })
      .catch((e) => {
        // window.location.reload()
        console.log(e);
      });
  };

  const [userInfo, setUserInfo]: any = useState(0);

  useEffect(() => {
    if (IsLogin()) {
      getUserInfo();
    } else {
      if (router.pathname === "/login") {
        router.push("/");
      }
      if (router.pathname === "/profile") {
        alert('로그인을 해주세요.')
        router.push("/")
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    if (userInfo.small_region === null) {
      router.push("/login");
    } else {
      if (router.pathname === "/login") {
        router.push("/");
      }
    }
  }, [userInfo]);

  // useEffect(() => {
  //   if (IsLogin() && userInfo === 0) {
  //     alert('로그인 시간이 만료되었습니다.')
  //     logout()
  //   }
  // },)

  
  // if (IsLogin()) {
  //   return(
  //     <></>
  //   )
  // } else {

  // }
  return (
    
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
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
      <div>
        {IsLogin() ? (
          <Link href="/">
            <a onClick={logout}>Logout</a>
          </Link>
        ) : (
          <LoginModal />
        )}
      </div>
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
