import { Close } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import "./style.scss";

//changes

const RightDrawer = ({
  children,
  open,
  handleClose,
  header,
  drawerWidth,
  hideBackdrop,
  closeOnBackdropClick,
  zIndex,
  top,
  id,
}: {
  children: any;
  handleClose: Function;
  open: boolean;
  close?: boolean;
  header?: ReactNode | null;
  drawerWidth?: string | number;
  hideBackdrop?: boolean;
  closeOnBackdropClick?: boolean;
  zIndex?: number;
  top?: number;
  id?: string;
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Drawer
      onClose={(_: any, reason: any) => {
        return reason === "backdropClick"
          ? closeOnBackdropClick
            ? handleClose()
            : handleClose()
          : null;
      }}
      sx={{
        zIndex: zIndex ? zIndex : 1100,
        ".MuiBackdrop-root": {
          opacity: hideBackdrop ? "0 !important" : "1 !important",
          width: hideBackdrop ? "0%" : "100%",
        },
        ".MuiDrawer-paper": {
          backgroundColor: "var(--color-drawer-bg)",
          top: top === 0 || top ? top + "px !important" : "60px !important",
          width: isMobile
            ? `100% !important`
            : drawerWidth
            ? `${drawerWidth}!important`
            : "536px !important",
        },
        width: hideBackdrop ? "0%" : "100%",
      }}
      // ModalProps={{
      //   container: document.getElementById("timetracking-root"),
      //   style: { position: "absolute" },
      // }}
      open={open}
      anchor="right"
      className="custom-right-drawer"
    >
      {!isMobile && (
        <div
          onClick={() => {
            handleClose();
          }}
          className="close-icon"
        >
          <div className="outer">
            <div className="inner">
              <label>Close</label>
            </div>
          </div>
        </div>
      )}
      <div className="body-wrapper">
        {header || isMobile ? (
          <div className="header-container">
            {header}
            {isMobile && (
              <div className="mobile-right-drawer-close-icon">
                <Close
                  style={{ color: "var(--color-primary-text)" }}
                  onClick={() => {
                    handleClose();
                  }}
                />
              </div>
            )}
          </div>
        ) : null}
        <div className={header ? "content-wrapper-header" : "content-wrapper"}>
          {children}
        </div>
      </div>
    </Drawer>
  );
};

export default RightDrawer;
