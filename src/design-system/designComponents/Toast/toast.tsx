import { ReactNode, useEffect, useState } from "react";
import {
  toast,
  Slide,
  ToastContainer,
  ToastPosition,
  ToastOptions,
} from "react-toastify";
import successTickJson from "../../assets/toast/SuccessTick.json";
import errorJson from "../../assets/toast/Error.json";
import infoJson from "../../assets/toast/Info.json";
import warningJson from "../../assets/toast/Warning.json";
import "react-toastify/dist/ReactToastify.css";
import IconField from "./IconField";
import { Close, Done } from "@mui/icons-material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Scrollbars from "react-custom-scrollbars-2";
import "./styles.scss";

enum ToastType {
  success = "success",
  error = "error",
  info = "info",
  warning = "warning",
}

interface CopyProps {
  copyData?: string;
  copyEnabled?: boolean;
  onCopy?: () => void;
}

interface ToastProps {
  open: boolean;
  onClose: (value: boolean) => void;
  type?: ToastType | string;
  title?: string;
  desc?: string;
  extraActions?: ReactNode;
  // position?: ToastPosition;
  position?: any;
  autoClose?: false | number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  // transition?: ToastOptions["transition"];
  transition?: any;
  closeButton?: boolean;
  copyProps?: CopyProps;
}

const Toast = ({
  open,
  type = ToastType.info,
  desc,
  title,
  onClose,
  position = "top-center",
  autoClose = 5000,
  hideProgressBar = true,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = false,
  transition = Slide,
  closeButton = false,
  copyProps,
}: ToastProps) => {
  let width = 64;
  let renderJson: any = successTickJson;
  let renderTitle = "Success";

  switch (type.toLowerCase()) {
    case "success":
      renderJson = successTickJson;
      width = 64;
      renderTitle = "Success";
      break;
    case "error":
      renderJson = errorJson;
      width = 38;
      renderTitle = "Error";
      break;
    case "info":
      renderJson = infoJson;
      width = 28;
      renderTitle = "Info";
      break;
    case "warning":
      renderJson = warningJson;
      width = 28;
      renderTitle = "Warning";
      break;
    default:
      renderJson = infoJson;
      renderTitle = "Info";
      break;
  }

  const ToastContainerField = () => {
    const [isCopied, setIsCopied] = useState(false);

    return (
      <div className="toast-container-field-wrapper">
        <div className="toast-container-field-box">
          <div className="icon-field-wrapper">
            <IconField animationJson={renderJson} width={width} />
          </div>
          <div className="toast-details-box-container">
            <div className="title">
              {renderTitle} {title ? "-" : ""} {title}
            </div>
            <div className="desc-container">
              {desc && (
                <Scrollbars
                  autoHide
                  autoHeight
                  autoHeightMin={17}
                  autoHeightMax={75}
                >
                  <div className="desc">{desc || title}</div>{" "}
                </Scrollbars>
              )}

              {copyProps?.copyEnabled && (
                <CopyToClipboard
                  text={copyProps?.copyData}
                  onCopy={() => {
                    setIsCopied(true);
                    if (copyProps?.onCopy) copyProps?.onCopy();
                    setTimeout(() => {
                      setIsCopied(false);
                    }, 3000);
                  }}
                >
                  <div className="copy-field">
                    <>
                      {isCopied ? (
                        <Done
                          style={{ width: 16 }}
                          htmlColor="var(--color-secondary)"
                        />
                      ) : (
                        <ContentCopyIcon
                          style={{ width: 16 }}
                          htmlColor="var(--color-secondary-text)"
                        />
                      )}
                    </>
                  </div>
                </CopyToClipboard>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const notify = () => {
    if (open) {
      toast(<ToastContainerField />, {
        position,
        autoClose,
        hideProgressBar,
        closeOnClick,
        pauseOnHover,
        draggable,
        transition,
        onClose: () => onClose(false),
        closeButton: closeButton ? undefined : false,
        className: `toastify-e2e-design ${renderTitle.toLowerCase()}-toast-field-wrapper`,
      });
    }
  };

  useEffect(() => {
    if (open) notify();
  }, [open]);

  return (
    <div className="e2e-design-toast">
      <ToastContainer
        position={position}
        hideProgressBar={hideProgressBar}
        newestOnTop={false}
        closeOnClick={closeOnClick}
        rtl={false}
        pauseOnFocusLoss
        draggable={draggable}
        pauseOnHover={pauseOnHover}
        theme="light"
        transition={transition}
        closeButton={
          <div
            className="close-icon"
            onClick={() => {
              if (onClose) onClose(false);
            }}
          >
            <Close
              htmlColor="var(--color-secondary-text)"
              style={{ width: 16 }}
            />
          </div>
        }
      />
    </div>
  );
};

export default Toast;
