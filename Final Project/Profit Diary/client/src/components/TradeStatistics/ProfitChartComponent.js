import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // This is needed for Chart.js 3

const ProfitChartComponent = ({ trades }) => {
  const emptyLabels = new Array(trades.length).fill("");
  const chartData = {
    labels: emptyLabels,
    datasets: [
      {
        label: "Profit",
        data: trades.map((trade) => parseFloat(trade.profit)), // Y-axis data
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value, index, values) {
            // Add a dollar sign ($) in front of the number
            return "$" + value;
          },
        },
      },
    },
  };

  return (
    <div
      className="chart-container"
      style={{ width: "800px", height: "600px" }}
    >
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default ProfitChartComponent;
