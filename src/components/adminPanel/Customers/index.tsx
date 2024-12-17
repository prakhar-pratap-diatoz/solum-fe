import React from "react";
import MainContainer from "../../MainContainer";
import HeaderSection from "./Header";
import CustomerListingPage from "./ListView";

const Customers = () => {
  return (
    <MainContainer>
      <HeaderSection />
      <CustomerListingPage />
    </MainContainer>
  );
};

export default Customers;
