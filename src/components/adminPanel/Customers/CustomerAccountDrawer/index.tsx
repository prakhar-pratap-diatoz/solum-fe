import React, { ChangeEvent, useState } from "react";
import {
  Button,
  RightDrawer,
  TextField,
  FieldLabel,
  DateField,
} from "../../../../design-system/designComponents";
import { ToggleOn, ToggleOff } from "@mui/icons-material";
import "./style.scss";

interface CustomerAccountDrawerProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
}

interface DetailsProps {
  code: string;
  company: string;
  invoiceNo: string;
  price: string;
  notes: string;
  noOfLicenseKeys: string;
}

const CustomerAccountDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: CustomerAccountDrawerProps) => {
  const [customerDetails, setCustomerDetails] = useState<DetailsProps>({
    code: "",
    company: "",
    invoiceNo: "",
    price: "",
    notes: "",
    noOfLicenseKeys: "",
  });

  const { code, company, noOfLicenseKeys, price, notes, invoiceNo } =
    customerDetails || {};

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
        <div className="row mb-3">
          <div className="col-12">
            <TextField
              value={"Active"}
              onChange={({
                target: { value },
              }: ChangeEvent<HTMLInputElement>) =>
                setCustomerDetails((prev: any) => ({
                  ...prev,
                  code: value,
                }))
              }
              endIcon={<ToggleOn sx={{ fill: "#42A715", height: "28px" }} />}
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="section-heading-name">Licence Key Details</div>

          <div className="row mb-3">
            <div className="col-4">
              <TextField
                required
                heading="No. Of Licence Keys"
                value={noOfLicenseKeys}
                onChange={({
                  target: { value },
                }: ChangeEvent<HTMLInputElement>) =>
                  setCustomerDetails((prev: any) => ({
                    ...prev,
                    noOfLicenseKeys: value,
                  }))
                }
              />
            </div>
            <div className="col-8">
              <TextField
                required
                heading="Price"
                value={price}
                onChange={({
                  target: { value },
                }: ChangeEvent<HTMLInputElement>) =>
                  setCustomerDetails((prev: any) => ({
                    ...prev,
                    price: value,
                  }))
                }
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-6">
              <DateField
                value={"2024-12-17"}
                heading="Start Date"
                required
                onChange={() => {}}
              />
            </div>

            <div className="col-6">
              <DateField
                value={"2024-12-31"}
                heading="End Date"
                required
                onChange={() => {}}
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="section-heading-name">Invoice Details</div>

          <div className="mb-3">
            <TextField
              required
              heading="Invoice Number"
              value={invoiceNo}
              onChange={({
                target: { value },
              }: ChangeEvent<HTMLInputElement>) =>
                setCustomerDetails((prev: any) => ({
                  ...prev,
                  invoiceNo: value,
                }))
              }
            />
          </div>
          <div className="mb-3">
            <TextField
              required
              heading="Notes"
              multiline
              rows={4}
              value={notes}
              onChange={({
                target: { value },
              }: ChangeEvent<HTMLInputElement>) =>
                setCustomerDetails((prev: any) => ({
                  ...prev,
                  notes: value,
                }))
              }
            />
          </div>
        </div>
      </div>
    </RightDrawer>
  );
};

export default CustomerAccountDrawer;
