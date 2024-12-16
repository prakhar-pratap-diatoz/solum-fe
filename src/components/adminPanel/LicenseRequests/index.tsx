import React from "react";
import MainContainer from "../../MainContainer";
import HeaderSection from "./Header";
import LicenseRequestFilters from "./Filters";
import TabularView from "./TabularView";

const LicenseRequests = () => {
  return (
    <MainContainer>
      <HeaderSection />
      <LicenseRequestFilters />
      <TabularView />
    </MainContainer>
  );
};

export default LicenseRequests;
