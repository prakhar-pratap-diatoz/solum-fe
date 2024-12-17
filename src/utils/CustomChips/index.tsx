import React, { ReactNode } from "react";
import { Add } from "@mui/icons-material";
import "./style.scss";

interface CustomChipsProps {
  title: string;
  icon?: ReactNode;
  color?: string;
}

const CustomChips = ({ title, icon, color }: CustomChipsProps) => {
  return (
    <div
      id="custom-chips"
      style={{
        color: color ? color : undefined,
        backgroundColor: color ? `${color}26` : undefined,
      }}
    >
      {icon && <div className="icon">{icon}</div>}
      <div className="title">{title}</div>
    </div>
  );
};

export default CustomChips;
