import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { CardView, ListView } from "../../assets/common";
import "./style.scss";

function ViewToggle({
  value,
  setValue,
  size,
}: {
  value: "list" | "card";
  setValue: (value: "list" | "card") => void;
  size?: "small" | "medium" | "large";
}) {
  return (
    <div id="view-toggle">
      <ToggleButtonGroup
        value={value}
        size={size ? size : "small"}
        exclusive
        onChange={(event: any, newView: "list" | "card") => setValue(newView)}
        aria-label="view alignment"
      >
        <ToggleButton value="card" aria-label="centered">
          <CardView fill={value === "card" ? "#0080a5" : "#8b8b8b"} />
        </ToggleButton>
        <ToggleButton value="list" aria-label="left aligned">
          <ListView fill={value === "list" ? "#0080a5" : "#8b8b8b"} />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default ViewToggle;
