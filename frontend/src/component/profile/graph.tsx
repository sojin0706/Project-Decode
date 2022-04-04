import { useState, useEffect } from "react";
import IsLogin from "../../lib/customLogin";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function Graph() {
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

  // const genreLst = [
  //   "스릴러",
  //   "로맨스",
  //   "추리",
  //   "SF/판타지",
  //   "모험/액션",
  //   "코미디",
  //   "범죄",
  //   "공포",
  //   "19금",
  //   "감성/드라마",
  // ];

  var tmparr: any = [];
  const [genreCnt, SetGenreCnt] = useState([]);

  useEffect(() => {
    if (userInfo !== 0) {
      axios
        .get(`http://j6c203.p.ssafy.io:8082/review/mygenre/${userInfo.id}`)
        .then((data) => {
          data.data.genre.map((d: any, i: number) => {
            tmparr.push(d);
          });
          SetGenreCnt(tmparr);
        })
        .catch((e: any) => {});
    }
  }, [userInfo]);

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
            "#571EF5",
            "#FF007F",
            "#A0A0A0",
            "#006666",
            "#994C00",
            "#FFFF33",
            "#000000",
            "#000066",
            "#FF0000",
            "#FFCCE5",
          ],
        },
      ],
    };

    return (
      <div>
        <div>
          <Pie data={pieData} options={options} style={{height: "250px"}}/>
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
