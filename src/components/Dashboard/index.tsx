import React from "react";
import MainContainer from "../MainContainer";
import { Header } from "../../design-system/designComponents";
import BreadCrumbs from "../../design-system/designComponents/BreadCrumbs";

const Dashboard = () => {
  return (
    <MainContainer>
      <Header
        heading="Dashboard"
        breadCrumbValues={
          <BreadCrumbs
            activeColor="var(--header-color-primary-text)"
            inActiveColor="var(--header-color-secondary-text)"
            linksSet={[
              {
                name: "License Request",
                href: "license",
                cursor: true,
              },
              {
                name: "REQ00020",
              },
            ]}
          />
        }
      />
    </MainContainer>
  );
};

export default Dashboard;
