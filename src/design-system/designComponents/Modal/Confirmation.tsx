import "./styles.scss";
import { Info, Success, Warning } from "../../assets/toast";
import Button from "../Buttons/Button";
import { Modal } from "antd";
import { TrashIcon } from "../../assets/common";

export enum modalType {
  "info" = "info",
  "error" = "error",
  "success" = "success",
  "warning" = "warning",
}

const fetchIcon = (type: any) => {
  let icon = <Warning />;
  switch (type.toLowerCase()) {
    case "success":
      icon = <Success />;
      break;
    case "error":
      icon = <TrashIcon />;
      break;
    case "info":
      icon = <Info />;
      break;
    case "warning":
      icon = <Warning />;
      break;
    default: // default to info type
      // handle invalid value
      icon = <Warning />;
      break;
  }

  return icon;
};

const ConfirmationModel = ({
  type,
  open,
  onClose,
  onSubmit,
  subHeading,
  heading,
  submitButtonTitle,
  isAudio,
  highlightDesc,
  loading,
}: {
  type: modalType | string;
  open: boolean;
  onClose: (value: boolean) => void;
  onSubmit: () => void;
  subHeading: string;
  heading: string;
  submitButtonTitle?: string;
  isAudio?: boolean;
  highlightDesc?: boolean;
  loading?: boolean;
}) => {
  const onDelete = (e: any) => {
    try {
      if (type === "error") {
        e?.stopPropagation();
        // try {
        //   const audio = new Audio(
        //     "https://drive.google.com/uc?export=download&id=1J5nGOkKlmbal2ELRFimeYAtCb5IiVi00"
        //   );
        //   audio.play();
        // } catch (error) {}
        setTimeout(() => {
          onSubmit();
        }, 500);
      } else {
        onSubmit();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      footer={false}
      closable={false}
      centered
      className="e2e_modal"
      zIndex={1000000}
      onCancel={() => onClose(false)}
    >
      <div className="modal-wrapper">{fetchIcon(type)}</div>
      <div className="modal-title">{heading}</div>
      <div
        className={`modal-desc ${
          highlightDesc ? "confirmation-modal-description-higlighter" : ""
        }`}
      >
        {subHeading}{" "}
      </div>
      <div className="action-wrapper">
        <Button
          title="Cancel"
          variant="cancel"
          onClick={(e: any) => {
            e?.stopPropagation();
            onClose(false);
          }}
        />
        <Button
          title={submitButtonTitle ? submitButtonTitle : "Submit"}
          variant="contained"
          onClick={(e: any) => {
            onDelete(e);
          }}
          isSpinnerActive={loading}
        />
      </div>
    </Modal>
  );
};

export default ConfirmationModel;
