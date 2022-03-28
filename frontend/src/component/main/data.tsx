import { Statistic } from "semantic-ui-react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Data() {
  const [themeCnt, setThemeCnt] = useState(0)
  const [storeCnt, setStoreCnt] = useState(0)

  useEffect(() => {
    axios.get(`http://j6c203.p.ssafy.io:8082/home`)
    .then(({ data }) => {
      setThemeCnt(data.count[0])
      setStoreCnt(data.count[1])
    });
  }, []);
  return (
    <>
      <Statistic.Group>
        <Statistic color="yellow">
          <Statistic.Value>{themeCnt}</Statistic.Value>
          <Statistic.Label>테마 데이터</Statistic.Label>
        </Statistic>
        <Statistic color="orange">
          <Statistic.Value>{storeCnt}</Statistic.Value>
          <Statistic.Label>지점 데이터</Statistic.Label>
        </Statistic>
        <Statistic color="olive">
          <Statistic.Value>10000</Statistic.Value>
          <Statistic.Label>유저 데이터</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </>
  );
}
