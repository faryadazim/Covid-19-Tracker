import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({ datas }) => {
  const [State, setstate] = useState({
    labels: [
      "Cases",
      "Recovered",
      "Active",
      "Death",
      "Critical",
      "Today Cases",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [datas.cases, 210386345, 18393443, 4778872, 91474, 35346],
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
  });
  useEffect(() => {
    setstate({
      labels: [
        "Cases",
        // "Papulations",
        "Recovered",
        "Active",
        "Death",
        "testsPerOneMillion",
        "Today Cases",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [
            datas.cases,
            // datas.population,

            datas.recovered,
            datas.active,
            datas.deaths,
            datas.testsPerOneMillion,
          ],
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
    });
  }, [State]);

  return (
    <>
      <div>
        <Bar
          data={State}
          height={"275px"}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </>
  );
};

export default Chart;
