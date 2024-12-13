import { Button } from "antd";
import React, { ReactNode } from "react";
import { Add } from "@mui/icons-material";
import "./style.scss";

interface FloatingButtonProps {
  onClick: React.MouseEventHandler<HTMLElement>;
  icon?: ReactNode;
  size?: "small" | "middle" | "large" | undefined;
  backgroundColor?: string;
}

const FloatingButton = ({
  onClick,
  icon,
  size,
  backgroundColor,
}: FloatingButtonProps) => {
  return (
    <div id="floating_button">
      <div className="float-wrap">
        <Button
          className="floating-btn"
          type="primary"
          shape="circle"
          icon={icon ? icon : <Add sx={{ fontSize: "26px !important" }} />}
          size={size ? size : "large"}
          onClick={onClick}
          style={{
            background: backgroundColor
              ? backgroundColor
              : "transparent linear-gradient(134deg, #0080A5 0%, #3496B2 25%, #004053 100%) 0% 0% no-repeat padding-box",
          }}
        />
      </div>
    </div>
  );
};

export default FloatingButton;
