import {
  ClickAwayListener,
  Fade,
  Popper as MaterialPopper,
  MenuList,
  Paper,
} from "@mui/material";

import { ReactNode } from "react";

const Popper = ({
  open,
  onClose,
  children,
  anchorEl,
  placement,
  zIndex,
  modifiers,
  isNoDisablePortal,
  className,
}: {
  open: boolean;
  onClose: (value: boolean | undefined) => void;
  children?: ReactNode;
  anchorEl: any;
  placement?:
    | "auto-end"
    | "auto-start"
    | "auto"
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  isNoDisablePortal?: boolean;
  zIndex?: number;
  modifiers?: any;
  className?: string;
}) => {
  return (
    <MaterialPopper
      sx={{ zIndex: zIndex ? zIndex : "5" }}
      open={open}
      role={undefined}
      placement={placement ? placement : "bottom-end"}
      disablePortal={isNoDisablePortal ? false : true}
      transition
      anchorEl={anchorEl}
      modifiers={modifiers ? modifiers : undefined}
      id="jobCard"
      className={className}
    >
      {({ TransitionProps, placement }: any) => (
        <Fade
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom-start" ? "left top" : "left bottom",
          }}
        >
          <Paper
            sx={{
              backgroundColor: "var(--color-bg-card)",
            }}
          >
            <ClickAwayListener onClickAway={() => onClose(false)}>
              <MenuList
                sx={{
                  padding: "0px !important",
                  ".MuiMenuItem-root": {
                    backgroundColor: "var(--color-bg-card)",
                    color: "var(--card-menu-color)",
                    fontSize: "14px",
                    fontFamily: "SF PRO DISPLAY",
                    justifyContent: "flex-start",
                    padding: "4px 8px",
                    width: "100%",
                    "svg, img": {
                      width: "18px",
                      marginRight: "6px",
                    },
                    minWidth: 100,
                  },
                  ".MuiMenu-list": {
                    padding: "0px !important",
                  },
                }}
              >
                {children}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Fade>
      )}
    </MaterialPopper>
  );
};
export default Popper;
