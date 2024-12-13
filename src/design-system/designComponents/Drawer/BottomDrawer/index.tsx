import { ReactNode } from "react";
import { Drawer } from "@mui/material";
import { DrawerCloseIcon } from "../../../assets/Drawer";
import { Button, TypographyHeader } from "../..";
import "./style.scss";
import { OpenInFull } from "@mui/icons-material";

function BottomDrawer({
  children,
  open,
  handleClose,
  actionButtonDisable,
  actionButtonText,
  header,
  close,
  heading,
  handleActionButton,
  zIndex,
  closeOnBackdropClick,
  extraAction,
  fullHeight,
  loading,
  actionBtnHidden,
  customHeight,
  hideBackdrop,
}: {
  children?: any;
  actionButtonDisable?: boolean;
  handleClose: Function;
  actionButtonText?: string;
  open: boolean;
  close?: boolean;
  header?: ReactNode;
  heading?: string;
  handleActionButton?: Function | any;
  zIndex?: number;
  closeOnBackdropClick?: boolean;
  extraAction?: Function;
  fullHeight?: boolean;
  loading?: boolean;
  actionBtnHidden?: boolean;
  customHeight?: string;
  hideBackdrop?: boolean;
}) {
  return (
    <Drawer
      onClose={(_: any, reason: any) => {
        return reason === "backdropClick"
          ? closeOnBackdropClick
            ? handleClose()
            : null
          : handleClose();
      }}
      sx={{
        zIndex: zIndex ? zIndex : 1500,
        ".MuiBackdrop-root": {
          backgroundColor: "#262626",
          opacity: hideBackdrop ? "0 !important" : "0.5 !important",
          width: hideBackdrop ? "0%" : "100%",
        },
        ".MuiDrawer-paper": {
          height: fullHeight
            ? "100% !important"
            : customHeight
            ? customHeight
            : "calc(100% - 78px)",
        },
      }}
      open={open}
      id="custom-bottom-drawer"
      anchor="bottom"
    >
      {close ? (
        <div
          onClick={() => {
            handleClose();
          }}
          className="close-icon"
        >
          <DrawerCloseIcon />
        </div>
      ) : null}

      {extraAction ? (
        <Button
          className="full-view-btn"
          textColor="var(--color-secondary)"
          filterButton
          onClick={() => extraAction()}
          title="View in full screen"
          endIcon={<OpenInFull />}
        />
      ) : null}
      {header ? (
        <div className="custom-bottom-drawer-header-wrapper">{header}</div>
      ) : (
        heading && (
          <>
            <div className="custom-bottom-drawer-header-wrapper">
              <div className="d-flex justify-content-between align-items-center w-100">
                <TypographyHeader variant="h4">{heading}</TypographyHeader>
                {actionButtonText && (
                  <div
                    style={{
                      visibility: actionBtnHidden ? "hidden" : "visible",
                    }}
                  >
                    <Button
                      onClick={handleActionButton}
                      disabled={actionButtonDisable}
                      title={actionButtonText}
                      loading={loading}
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        )
      )}

      {children}
    </Drawer>
  );
}

export default BottomDrawer;
