import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar(){
    const router = useRouter();
    return (
        <nav>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home  </a>
          </Link>
          <Link href="/info">
            <a className={router.pathname === "/info" ? "active" : ""}>info  </a>
          </Link>
          <Link href="/rec">
            <a className={router.pathname === "/rec" ? "active" : ""}>rec  </a>
          </Link>
          <Link href="/notice">
            <a className={router.pathname === "/notice" ? "active" : ""}>notice  </a>
          </Link>
          <Link href="/board">
            <a className={router.pathname === "/board" ? "active" : ""}>board  </a>
          </Link>
          <style jsx>{`
            a {
              text-decoration: none;
            }
            .active {
              color: red;
            }
          `}</style>
        </nav>
      );
}