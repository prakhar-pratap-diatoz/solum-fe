import React from "react";
import { Header, Button } from "../../../design-system/designComponents";
import { Add } from "@mui/icons-material";

const HeaderSection = () => {
  return (
    <>
      <Header
        heading={"Customers"}
        actions={<Button title="Create Account" startIcon={<Add />} />}
      />
    </>
  );
};

export default HeaderSection;
