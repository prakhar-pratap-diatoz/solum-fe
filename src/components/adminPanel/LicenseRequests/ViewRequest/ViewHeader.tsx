import React from "react";
import BreadCrumbs from "../../../../design-system/designComponents/BreadCrumbs";
import { Header } from "../../../../design-system/designComponents";

const ViewHeader = () => {
  return (
    <Header
      heading={"REQ000020"}
      breadCrumbValues={
        <BreadCrumbs
          linksSet={[
            {
              name: "License Requests",
              href: "license-requests",
              cursor: true,
            },
            {
              name: "REQ000020",
            },
          ]}
        />
      }
    />
  );
};

export default ViewHeader;
