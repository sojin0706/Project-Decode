import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Authentication() {
  const router = useRouter();

  if (typeof window !== "undefined") {
    localStorage.setItem("token", String(router.query.token));
  }

  useEffect(() => {
    if (localStorage.token !== "undefined"){
      // router.push("/");
      location.href = "http://localhost:3000/"
    }
  }, );

  return <></>;
}
