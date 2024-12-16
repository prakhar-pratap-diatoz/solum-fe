import React from "react";
import { Header, Button } from "../../../design-system/designComponents";
import LicenseRequestFilters from "./Filters";

const HeaderSection = () => {
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
