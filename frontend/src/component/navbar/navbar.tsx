import Link from "next/link";
import { useRouter } from "next/router";
import LoginModal from "../login/loginModal"

export default function Navbar(){
    const router = useRouter();
    return (
        <nav>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/login">
            <a className={router.pathname === "/login" ? "active" : ""}>login</a>
          </Link>
          <Link href="/profile">
            <a className={router.pathname === "/profile" ? "active" : ""}>profile</a>
          </Link>
          <Link href="/info">
            <a className={router.pathname === "/info" ? "active" : ""}>info</a>
          </Link>
          <Link href="/recommend">
            <a className={router.pathname === "/recommend" ? "active" : ""}>recommend</a>
          </Link>
          <Link href="/notice">
            <a className={router.pathname === "/notice" ? "active" : ""}>notice</a>
          </Link>
          <Link href="/userboard">
            <a className={router.pathname === "/userboard" ? "active" : ""}>userboard</a>
          </Link>
          <LoginModal />
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