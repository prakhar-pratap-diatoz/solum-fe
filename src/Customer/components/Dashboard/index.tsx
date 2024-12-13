import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import "./style.scss";
import { Header } from "../../../design-system/designComponents";
import MainContainer from "../../../components/MainContainer";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const CustomerDashboard = () => {
  const doughnutData = {
    datasets: [
      {
        label: "License Expiry",
        data: [15, 30, 45, 60],
        backgroundColor: ["#33A02C", "#1F78B4", "#A6CEE3", "#B2DF8A"],
      },
    ],
    labels: ["15 Days", "30 Days", "45 Days", "60 Days"],
  };

  const barData = {
    labels: [
      "2024-09-01",
      "2024-09-02",
      "2024-09-03",
      "2024-09-04",
      "2024-09-05",
      "2024-09-06",
      "2024-09-07",
      "2024-09-08",
      "2024-09-09",
      "2024-09-10",
    ],
    datasets: [
      {
        label: "Pending",
        data: [2, 3, 1, 4, 3, 5, 2, 6, 4, 2],
        backgroundColor: "#37A87A",
        categoryPercentage: 0.6,
        barPercentage: 0.6,
      },
      {
        label: "Approved",
        data: [5, 4, 6, 3, 7, 6, 5, 8, 7, 6],
        backgroundColor: "#CABAC5",
        categoryPercentage: 0.6,
        barPercentage: 0.6,
      },
      {
        label: "Denied",
        data: [3, 3, 4, 5, 4, 3, 3, 4, 3, 4],
        backgroundColor: "#9E76E2",
        categoryPercentage: 0.6,
        barPercentage: 0.6,
      },
    ],
  };

  const doughOptions = {
    cutout: "85%",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 15,
          usePointStyle: true,
        },
      },
    },
  };

  const barOptions: any = {
    // const barOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 10,
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {},
      },
    },
  };

  return (
    <MainContainer>
      <div className="dashboard-container">
        <Header heading="Dashboard" />
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Requests</h3>
            <p>10</p>
          </div>
          <div className="stat-card">
            <h3>Pending Requests</h3>
            <p>1</p>
          </div>
          <div className="stat-card">
            <h3>Keys Pending Allocation</h3>
            <p>2</p>
          </div>
          <div className="stat-card">
            <h3>Keys Expiring in 60 Days</h3>
            <p>6</p>
          </div>
        </div>

        <div className="dashboard-charts">
          <div className="dough-chart">
            <h3>Expiring Licence</h3>
            <Doughnut data={doughnutData} options={doughOptions} />
          </div>

          <div className="bar-chart">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default CustomerDashboard;
