import React, { useEffect, useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CustomerDashboard from "./Customer/components/Dashboard";
import LicenseRequests from "./components/adminPanel/LicenseRequests";
import Users from "./components/adminPanel/Users/Users";
import Customers from "./components/adminPanel/Customers";
import ViewLicenseRequest from "./components/adminPanel/LicenseRequests/ViewRequest";
import { useGlobal } from "./Providers/GlobalProvider";

const Router = () => {
  const { viewType } = useGlobal();

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                component={
                  viewType === "solum-view" ? (
                    <Dashboard />
                  ) : (
                    <CustomerDashboard />
                  )
                }
              />
            }
          />
          <Route
            path="/license-requests"
            element={<PrivateRoute component={<LicenseRequests />} />}
          />
          <Route
            path="/license-requests/:id"
            element={<PrivateRoute component={<ViewLicenseRequest />} />}
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
