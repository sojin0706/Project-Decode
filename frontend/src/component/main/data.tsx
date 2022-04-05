import { Statistic } from "semantic-ui-react";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "../../../styles/main/Data.module.css"
export default function Data() {
  const [themeCnt, setThemeCnt] = useState(0);
  const [storeCnt, setStoreCnt] = useState(0);

  useEffect(() => {
    axios.get(`http://j6c203.p.ssafy.io:8082/home`).then(({ data }) => {
      setThemeCnt(data.count[0]);
      setStoreCnt(data.count[1]);
    });
  }, []);

  const [userCnt, setUserCnt] = useState(0)
  useEffect(() => {
    // axios.get(`http://j6c203.p.ssafy.io:8081/user/userCount`).then(({ data }) => {
    axios.get(`https://j6c203.p.ssafy.io/api/user/userCount`).then(({ data }) => {
      setUserCnt(data.userCount)
    });
  }, []);
  return (
    <>
      <Statistic.Group>
        <Statistic color="yellow" className={style.font}>
          <Statistic.Value>{themeCnt}</Statistic.Value>
          <Statistic.Label>테마 데이터</Statistic.Label>
        </Statistic>
        <Statistic color="orange" className={style.font}>
          <Statistic.Value>{storeCnt}</Statistic.Value>
          <Statistic.Label>지점 데이터</Statistic.Label>
        </Statistic>
        <Statistic color="olive" className={style.font}>
          <Statistic.Value>{userCnt}</Statistic.Value>
          <Statistic.Label>유저 데이터</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </>
  );
}
