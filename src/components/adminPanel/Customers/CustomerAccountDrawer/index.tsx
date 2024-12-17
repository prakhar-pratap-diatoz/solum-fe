import React, { ChangeEvent, useState } from "react";
import {
  Button,
  RightDrawer,
  TextField,
  FieldLabel,
} from "../../../../design-system/designComponents";

interface CustomerAccountDrawerProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
}

interface DetailsProps {
  code: string;
  company: string;
}

const CustomerAccountDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: CustomerAccountDrawerProps) => {
  const [customerDetails, setCustomerDetails] = useState<DetailsProps>({
    code: "",
    company: "",
  });

  const { code, company } = customerDetails || {};

  return (
    <RightDrawer
      open={isDrawerOpen}
      handleClose={() => setIsDrawerOpen(false)}
      top={0}
      header={
        <div className="w-100 d-flex align-items-center justify-content-between px-3">
          <div className="title">New Customer</div>
          <Button title="Submit" onClick={() => setIsDrawerOpen(false)} />
        </div>
      }
    >
      <div className="customer-account-details-field-container p-3">
        <div className="row mb-3">
          <div className="col-4">
            <TextField
              required
              heading="Code"
              value={code}
              onChange={({
                target: { value },
              }: ChangeEvent<HTMLInputElement>) =>
                setCustomerDetails((prev: any) => ({
                  ...prev,
                  code: value,
                }))
              }
            />
          </div>
          <div className="col-8">
            <TextField
              required
              heading="Company"
              value={company}
              onChange={({
                target: { value },
              }: ChangeEvent<HTMLInputElement>) =>
                setCustomerDetails((prev: any) => ({
                  ...prev,
                  company: value,
                }))
              }
            />
          </div>
        </div>

        <div className="mb-3">
          <FieldLabel heading={"Licence Key Details"} />

          <div className="row">
            <div className="col-4">
              <TextField
                required
                heading="No. Of Licence Keys"
                value={code}
                onChange={({
                  target: { value },
                }: ChangeEvent<HTMLInputElement>) =>
                  setCustomerDetails((prev: any) => ({
                    ...prev,
                    code: value,
                  }))
                }
              />
            </div>
            <div className="col-8">
              <TextField
                required
                heading="Price"
                value={company}
                onChange={({
                  target: { value },
                }: ChangeEvent<HTMLInputElement>) =>
                  setCustomerDetails((prev: any) => ({
                    ...prev,
                    company: value,
                  }))
                }
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <FieldLabel heading={"Invoice Details"} />

          <div className="row">
            <div className="col-4">
              <TextField
                required
                heading="Invoice Details"
                value={code}
                onChange={({
                  target: { value },
                }: ChangeEvent<HTMLInputElement>) =>
                  setCustomerDetails((prev: any) => ({
                    ...prev,
                    code: value,
                  }))
                }
              />
            </div>
            <div className="col-8">
              <TextField
                required
                heading="Notes"
                value={company}
                onChange={({
                  target: { value },
                }: ChangeEvent<HTMLInputElement>) =>
                  setCustomerDetails((prev: any) => ({
                    ...prev,
                    company: value,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </RightDrawer>
  );
};

export default CustomerAccountDrawer;
