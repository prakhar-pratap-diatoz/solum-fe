import React from "react";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CustomerDashboard from "./Customer/components/Dashboard";
import LicenseRequests from "./components/adminPanel/LicenseRequests";
import Users from "./components/adminPanel/Users/Users";
import Customers from "./components/adminPanel/Customers";

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
          <Route
            path="/license-requests"
            element={<PrivateRoute component={<LicenseRequests />} />}
          />
          <Route
            path="/users"
            element={<PrivateRoute component={<Users />} />}
          />
          <Route
            path="/customers"
            element={<PrivateRoute component={<Customers />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
