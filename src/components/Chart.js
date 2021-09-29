import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Cases", "Recovered", "Active", "Death", "Critical", "Today Cases"],
  datasets: [
    {
      label: "# of Votes",
      data: [233558660, 210386345, 18393443, 4778872, 91474, 35346],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 0.5,
    },
  ],
};

const Chart = () => (
  <>
    <div>
      <Bar
        data={data}
        height={"275px"}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  </>
);

export default Chart;
