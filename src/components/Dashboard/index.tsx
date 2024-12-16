import React from "react";
import MainContainer from "../MainContainer";
import { Header } from "../../design-system/designComponents";
import AreaChartComponent from "./AreaChartComponent";
import "./style.scss";

const Dashboard = () => {
  return (
    <MainContainer>
      <Header heading="Dashboard" />
      <div id="admin_dashboard">
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

        <AreaChartComponent />
      </div>
    </MainContainer>
  );
};

export default Dashboard;
