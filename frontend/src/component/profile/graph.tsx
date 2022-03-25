import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const genreLst = [
  { key: "스릴러", value: 0 },
  { key: "로맨스", value: 0 },
  { key: "추리", value: 0 },
  { key: "SF/판타지", value: 0 },
  { key: "모험/액션", value: 0 },
  { key: "코미디", value: 0 },
  { key: "범죄", value: 0 },
  { key: "공포", value: 0 },
  { key: "19금", value: 0 },
  { key: "감성/드라마", value: 0 },
];

export default function Graph(props: any) {
  var test = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const [genreCnt, setGenreCnt] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [myData, setMyData]: any = useState()
  useEffect(() => {
    axios
      .get(`http://j6c203.p.ssafy.io:8082/review/mygenre/${props.userInfo.id}`)
      .then((data) => {
        setMyData(data.data)
        Object.keys(myData).map((d:any, i:number)=> {
          genreLst.map((g: any, j: number) => {
            if (d == g.key) {
              var tmpArray = [...genreCnt]
              tmpArray[j] = myData[d]
              test[j] = myData[d]
            }
          })
        })
      })
      .then((data) => {
        setGenreCnt(test)
      })
      .catch((e: any) => {
      });
  }, [props]);

  // 그래프 챠트
  const MyChart = () => {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    };

    const pieData = {
      labels: [
        "스릴러",
        "로맨스",
        "추리",
        "SF/판타지",
        "모험/액션",
        "코미디",
        "범죄",
        "공포",
        "19금",
        "감성/드라마",
      ],
      datasets: [
        {
          data: genreCnt,
          backgroundColor: ["rgb(232, 189, 125)", "rgb(125, 168, 232)"],
        },
      ],
    };

    return (
      <div>
        <div>
          <Pie data={pieData} options={options} />
        </div>
      </div>
    );
  };

  return (
    <div className="graph">
      <MyChart />
    </div>
  );
}
