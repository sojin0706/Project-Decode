import React from "react";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';

const MyChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  };

  const pieData = {
    labels: ["스릴러", "로맨스", "추리", "SF/판타지", "모험/액션", "코미디", "범죄", "공포", "19금", "감성/드라마"],
    datasets: [
      {
        data: [100, 80, 40, 100, 20, 30, 100, 10, 300, 50],
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

export default function graph() {
  return (
    <div className="graph">
      <MyChart />
    </div>
  );
}
