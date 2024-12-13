import { ReactNode, useEffect, useState } from "react";
import { Chip } from "@mui/material";
import {
  PublishedIcon,
  InternalIcon,
  ClosedIcon,
  SendBackIcon,
  SuspendedIcon,
  DraftIcon,
  ApprovedIcon,
  RejectedIcon,
  PendingIcon,
} from "../../assets/ColoredChips";

type IColoredChip = {
  title: string | number | ReactNode;
  type?:
    | "warning"
    | "info"
    | "error"
    | "published"
    | "internal"
    | "draft"
    | "suspended"
    | "closed"
    | "rejected"
    | "pending"
    | "approved"
    | "sendback"
    | "complete"
    | "default"
    | undefined;
  icon?: any;
  className?: string;
  size?: "small";
  color?: string | undefined;
};

function CustomColorChips({
  type,
  title,
  icon,
  className,
  size,
  color,
}: IColoredChip) {
  const [styles, setStyles] = useState<any>(null);
  useEffect(() => {
    let style: any = {};
    style.border = "none";
    style.borderRadius = size === "small" ? "11px" : "5px";
    style.fontSize = "12px";
    style.padding = "4px";
    style.height = "22px";
    if (type === "warning") {
      style.backgroundColor = "var(--color-orange-700-bg)";
      style.color = "var(--color-orange-700)";
    } else if (type === "info") {
      style.backgroundColor = "var(--color-green-600-bg)";
      style.color = "var(--color-green-600)";
    } else if (type === "error") {
      style.backgroundColor = "var(--color-orange-700-bg)";
      style.color = "var(--color-orange-700)";
    } else if (type === "published") {
      style.backgroundColor = "var(--color-bg-published)";
      style.color = "var(--color-published)";
    } else if (type === "internal") {
      style.backgroundColor = "var(--color-bg-internal)";
      style.color = "var(--color-internal)";
    } else if (type === "draft") {
      style.backgroundColor = "var(--color-bg-draft)";
      style.color = "var(--color-draft)";
    } else if (type === "suspended") {
      style.backgroundColor = "var(--color-bg-suspended)";
      style.color = "var(--color-suspended)";
    } else if (type === "closed") {
      style.backgroundColor = "var(--color-bg-closed)";
      style.color = "var(--color-closed)";
    } else if (type === "rejected") {
      style.backgroundColor = "var(--color-bg-rejected)";
      style.color = "var(--color-rejected)";
    } else if (type === "pending") {
      style.backgroundColor = "var(--color-bg-pending)";
      style.color = "var(--color-pending)";
    } else if (type === "approved") {
      style.backgroundColor = "var(--color-bg-approved)";
      style.color = "var(--color-approved)";
    } else if (type === "sendback") {
      style.backgroundColor = "var(--color-bg-sendBack)";
      style.color = "var(--color-sendBack)";
    } else if (type === "complete") {
      style.backgroundColor = "var(--color-bg-complete)";
      style.color = "var(--color-complete)";
    } else if (type === "default") {
      style.backgroundColor = "var(--color-bg-default)";
      style.color = "var(--color-default)";
    } else if (color) {
      style.backgroundColor = `${color}29`;
      style.color = color;
    } else {
      style.backgroundColor = "var(--color-elephant-600-bg)";
      style.color = "var(--color-elephant-600)";
    }
    setStyles(style);
  }, [type, color, size]);
  const renderIcons = (type: string) => {
    switch (type) {
      case "published":
        return <PublishedIcon />;
      case "internal":
        return <InternalIcon />;
      case "draft":
        return <DraftIcon />;
      case "suspended":
        return <SuspendedIcon />;
      case "closed":
        return <ClosedIcon />;
      case "rejected":
        return <RejectedIcon />;
      case "pending":
        return <PendingIcon />;
      case "approved":
        return <ApprovedIcon />;
      case "sendback":
        return <SendBackIcon />;
      default:
        return null;
    }
  };
  return (
    <Chip
      sx={{
        ...styles,
        "& .MuiChip-label": {
          padding: "0px 7px",
        },
      }}
      variant="outlined"
      icon={icon ? icon : renderIcons(type ? type : "")}
      label={title}
      className={className ? className : ""}
    />
  );
}

export default CustomColorChips;
