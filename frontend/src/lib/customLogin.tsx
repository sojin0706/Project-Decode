var isLogin = false;

if (typeof window !== "undefined") {
  const token = localStorage.getItem("token");

  if (!token || token == "undefined") isLogin = false;
  else isLogin = true;
}

const IsLogin = isLogin;

export default IsLogin;
