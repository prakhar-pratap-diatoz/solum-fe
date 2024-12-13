import React from "react";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CustomerDashboard from "./Customer/components/Dashboard";

const Router = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={<Dashboard />} />}
          />
          <Route
            path="/user-dashboard"
            element={<PrivateRoute component={<CustomerDashboard />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
