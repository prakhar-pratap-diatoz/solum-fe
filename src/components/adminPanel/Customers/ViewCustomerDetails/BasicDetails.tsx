import React from "react";
import {
  ViewDetailHelper,
  TypographyHeader,
} from "../../../../design-system/designComponents";
import { ViewCard } from "../../../../design-system/designComponents/Card";
import SvgJobsAssignedIcon from "../../../../design-system/assets/common/JobsAssignedIcon";

const BasicDetails = () => {
  return (
    <>
      <ViewCard
        sectionTitle="Basic Details"
        index={0}
        // icon={<SvgJobsAssignedIcon />}
        description="Gives details of the attendance request."
      >
        <ViewDetailHelper
          detailArrayOptions={[
            {
              label: "Code",
              stringValue: "DSPL",
            },
            {
              label: "Company",
              stringValue: "DIATOZ Solutions Pvt Ltd.",
            },
            {
              label: "Active",
              stringValue: "Yes",
            },
          ]}
        />
      </ViewCard>
    </>
  );
};

export default BasicDetails;
