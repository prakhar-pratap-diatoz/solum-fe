import React from "react";
import { useNavigate } from "react-router-dom";
import { Header, Button } from "../../../design-system/designComponents";
import LicenseRequestFilters from "./Filters";

const HeaderSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        heading={"License Requests"}
        actions={<Button title="Completed Requests" onClick={() => {}} />}
      />
    </>
  );
};

export default HeaderSection;
