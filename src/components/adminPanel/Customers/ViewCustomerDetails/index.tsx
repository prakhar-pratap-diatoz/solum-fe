import React from "react";
import CustomerViewPageHeader from "./Header";
import MainContainer from "../../../MainContainer";
import BasicDetails from "./BasicDetails";
import RequestDetails from "./RequestDetails";

const ViewCustomerDetails = () => {
  return (
    <MainContainer>
      <CustomerViewPageHeader />
      <BasicDetails />
      <RequestDetails />
    </MainContainer>
  );
};

export default ViewCustomerDetails;
