import { MouseEvent, MouseEventHandler, ReactNode, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import "./Button.scss";

interface ButtonProps {
  id?: string;
  variant?: string | "contained" | "outlined" | "text" | "link" | "cancel";
  danger?: boolean;
  title: string | ReactNode;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  className?: string;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  loading?: boolean;
  filterButton?: boolean;
  textColor?: string;
  sx?: any;
  width?: number | string;
  height?: number | string;
  onMouseOver?: MouseEventHandler<HTMLButtonElement> | undefined;
  isSpinnerActive?: boolean;
  type?: any;
}

const Buttons = ({
  id,
  variant,
  disabled,
  title,
  danger = false,
  textColor,
  endIcon,
  startIcon,
  onClick,
  filterButton,
  className,
  sx,
  width,
  height,
  onMouseOver,
  loading,
  isSpinnerActive,
  type,
}: ButtonProps) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    setButtonClicked(true);
    if (onClick) await Promise.resolve(onClick(e));
    setTimeout(() => {
      setButtonClicked(false);
    }, 1000);
  };

  return (
    <div className="e2e-design-button">
      <Button
        id={id}
        type={type ?? "button"}
        onMouseOver={onMouseOver}
        onClick={handleClick}
        disabled={disabled}
        endIcon={endIcon}
        startIcon={startIcon}
        className={
          (filterButton
            ? "filter-button-design"
            : `${danger ? "danger" : "primary"}-${
                variant ? variant : "contained"
              }`) + (className ? " " + className : "")
        }
        style={{
          color: `${textColor}`,
          width: width ? width : variant === "text" ? "fit-content" : "",
          height: height ? height : variant === "text" ? "fit-content" : "",
        }}
        sx={sx}
      >
        {(buttonClicked && loading) || isSpinnerActive ? (
          <CircularProgress
            size={20}
            style={{
              color:
                !variant || variant === "contained"
                  ? "var(--color-white)"
                  : "var(--color-secondary)",
            }}
          />
        ) : (
          title
        )}
      </Button>
    </div>
  );
};
export default Buttons;
