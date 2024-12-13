import { ReactNode } from "react";
import { Modal as MaterialModal, Box } from "@mui/material";
import { TypographyHeader } from "..";
import { Close } from "@mui/icons-material";
import "./styles.scss";
function Modal({
  children,
  open,
  handleClose,
  closeOnBackdropClick,
  header,
  heading,
  zIndex,
  footer,
  closeIcon = true,
  style,
  width,
  height,
}: {
  children?: any;
  open: boolean;
  handleClose: Function;
  closeOnBackdropClick?: boolean;
  header?: ReactNode;
  heading?: string;
  zIndex?: number;
  footer?: any;
  closeIcon?: boolean;
  style?: any;
  width?: number | string;
  height?: number | string;
}) {
  return (
    <>
      <MaterialModal
        open={open}
        onClose={(_: any, reason: any) => {
          return reason === "backdropClick"
            ? closeOnBackdropClick
              ? handleClose()
              : null
            : handleClose();
        }}
        sx={{
          zIndex: zIndex ? zIndex : 1500,
        }}
        className="custom-modal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="custom-modal-box-container"
          style={{
            ...style,
            width: width ? width : undefined,
            height: height ? height : undefined,
          }}
        >
          {header ? (
            <div className="custom-modal-header-wrapper">{header}</div>
          ) : (
            heading && (
              <>
                <div className="custom-modal-header-wrapper">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <TypographyHeader variant="h4">{heading}</TypographyHeader>
                    {closeIcon ? (
                      <Close
                        height={10}
                        style={{
                          color: "var(--color-primary-text)",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleClose();
                        }}
                      />
                    ) : null}
                  </div>
                </div>
              </>
            )
          )}
          {children}
          {footer ? (
            <div className="custom-modal-footer-wrapper">{footer}</div>
          ) : null}
        </Box>
      </MaterialModal>
    </>
  );
}

export default Modal;
