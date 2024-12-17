import React from "react";
import { Header, Button } from "../../../design-system/designComponents";
import { Add } from "@mui/icons-material";

const HeaderSection = () => {
  return (
    <>
      <Header
        heading={"Users"}
        actions={<Button title="Create User" startIcon={<Add />} />}
      />
    </>
  );
};

export default HeaderSection;
