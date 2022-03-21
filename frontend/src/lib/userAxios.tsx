import Axios from "axios";

const API_URL = "http://j6c203.p.ssafy.io:8081";
let TOKEN_VALUE: any = null;

if (typeof window !== "undefined") TOKEN_VALUE = localStorage.getItem("token");

const userAxios = Axios.create({
  baseURL: `${API_URL}`,
  headers: { Authorization: `Bearer ${TOKEN_VALUE}` },
});

export default userAxios;
