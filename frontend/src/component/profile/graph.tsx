import { useState, useEffect } from "react";
import IsLogin from "../../lib/customLogin";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function Graph(props: any) {
  const [userInfo, setUserInfo]: any = useState(0);

  useEffect(() => {
    if (IsLogin()) {
      var Token: any = null;
      if (typeof window !== "undefined") Token = localStorage.getItem("token");

      axios
        .get("http://j6c203.p.ssafy.io:8081/auth/users", {
          headers: { Authorization: `Bearer ${Token}` },
        })
        .then(({ data }) => {
          setUserInfo(data.body.user);
        })
        .catch((e: any) => {
          console.log("에러");
          console.log(e);
        });
    }
  }, []);

  const genreLst = [
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
  ];
  var test = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [genreCnt, setGenreCnt] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [myData, setMyData]: any = useState();

  useEffect(() => {
    if (userInfo !==0) {
      axios
      .get(`http://j6c203.p.ssafy.io:8082/review/mygenre/${userInfo.id}`)
      .then((data) => {
        console.log(data.data)
        // setMyData(JSON.stringify(data.data));
      })
      .catch((e: any) => {});
    }
  }, [userInfo])

  // useEffect(() => {
  // }, [myData]);

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
          backgroundColor: [
            "rgb(0, 60, 180)",
            "rgb(30, 90, 150)",
            "rgb(60, 120, 120)",
            "rgb(90, 150, 90)",
            "rgb(120, 180, 60)",
            "rgb(150, 210, 0)",
            "rgb(180, 240, 0)",
            "rgb(210, 270, 0)",
            "rgb(240, 300, 0)",
            "rgb(270, 330, 0)",
          ],
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
