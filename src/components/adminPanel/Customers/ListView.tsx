import React from "react";
import CustomerCard from "./CustomerCard";

const CustomerListingPage = () => {
  const arr = [1];
  return (
    <div className="row" style={{ rowGap: "15px" }}>
      {arr?.map(() => (
        <CustomerCard />
      ))}
    </div>
  );
};

export default CustomerListingPage;
