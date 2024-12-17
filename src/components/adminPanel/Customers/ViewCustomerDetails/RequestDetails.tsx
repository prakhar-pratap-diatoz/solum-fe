import React from "react";
import {
  ViewDetailHelper,
  TypographyHeader,
} from "../../../../design-system/designComponents";
import { ViewCard } from "../../../../design-system/designComponents/Card";
import TabularView from "../../LicenseRequests/TabularView";

const RequestDetails = () => {
  return (
    <ViewCard
      sectionTitle="License ID: 1aa5ad52-4058-387e-b278-07d604704c96"
      index={0}
      // icon={<SvgJobsAssignedIcon />}
      description="Gives details of the attendance request."
    >
      <div className="mb-3">
        <TabularView />
      </div>
    </ViewCard>
  );
};

export default RequestDetails;
