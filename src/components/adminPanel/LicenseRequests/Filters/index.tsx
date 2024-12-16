import React, { ChangeEvent, useState } from "react";
import {
  Select,
  TextField,
  Button,
} from "../../../../design-system/designComponents";
import SortIcon from "../../../../design-system/assets/Sort";
import { FilterAlt } from "@mui/icons-material";

const LicenseRequestFilters = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="d-flex align-items-center" style={{ columnGap: "15px" }}>
      <div style={{ width: "250px" }}>
        <TextField
          value={search}
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
            setSearch(value)
          }
          placeholder="Search here..."
          type="Search"
        />
      </div>
      <Select
        id={"Sort"}
        menuOptions={[{ label: "Select", value: "Select" }]}
        onChange={undefined}
        value={"Select"}
      />
      <Button
        filterButton
        onClick={() => {}}
        title="More Filters"
        startIcon={
          <FilterAlt style={{ color: "var(--color-primary-text" }} />
          // <FilterIcon style={{ color: "var(--color-primary-text" }} />
        }
      />
      <Select
        id={"Sort"}
        menuOptions={[{ label: "Sort By", value: "Sort" }]}
        onChange={undefined}
        value={"Sort"}
        startIcon={<SortIcon fill={"var(--color-primary-text)"} />}
      />
    </div>
  );
};

export default LicenseRequestFilters;
