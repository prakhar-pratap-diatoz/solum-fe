import React, { useState } from "react";
import { Header, Button } from "../../../design-system/designComponents";
import { Add } from "@mui/icons-material";
import CustomerAccountDrawer from "./CustomerAccountDrawer";

const HeaderSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  return (
    <>
      <Header
        heading={"Customers"}
        actions={
          <Button
            title="Create Account"
            startIcon={<Add />}
            onClick={() => setIsDrawerOpen(true)}
          />
        }
      />
      {isDrawerOpen && (
        <CustomerAccountDrawer
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      )}
    </>
  );
};

export default HeaderSection;
