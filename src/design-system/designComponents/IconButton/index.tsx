import { ReactNode, useState } from "react";
import { IconButton as IconBtn } from "@mui/material";
import "./style.scss";

function IconButton({
  id,
  icon,
  handleClick,
  className,
  disabled = false,
}: {
  id: string;
  icon: ReactNode;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  otherProps?: any;
  disabled?: boolean;
}) {
  return (
    <div id="custom-icon-btn">
      <IconBtn
        id={id}
        className={className ? className : ""}
        onClick={handleClick}
        disabled={disabled}
      >
        {icon}
      </IconBtn>
    </div>
  );
}

export default IconButton;
