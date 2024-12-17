import React from "react";
import { Header, Button } from "../../../../design-system/designComponents";
import BreadCrumbs from "../../../../design-system/designComponents/BreadCrumbs";
import { Add } from "@mui/icons-material";

const CustomerViewPageHeader = () => {
  return (
    <>
      <Header
        heading={"DIATOZ Solutions Pvt Ltd."}
        actions={<Button title="Edit Account" startIcon={<Add />} />}
        breadCrumbValues={
          <BreadCrumbs
            linksSet={[
              {
                name: "Customers",
                href: "customers",
                cursor: true,
              },
              {
                name: "DIATOZ Solutions Pvt Ltd.",
              },
            ]}
          />
        }
      />
    </>
  );
};

export default CustomerViewPageHeader;
