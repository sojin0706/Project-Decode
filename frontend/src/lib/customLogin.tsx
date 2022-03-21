// var isLogin = false;

// if (typeof window !== "undefined") {
//   const token = localStorage.getItem("token");

//   if (!token || token == "undefined") {
//     isLogin = false;
//   } else isLogin = true;
// }

// const IsLogin = isLogin;

const IsLogin = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
  
    if (!token || token == "undefined") {
      return false;
    } else return true;
  }

}
export default IsLogin;
