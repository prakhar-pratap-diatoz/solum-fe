import { MouseEventHandler } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import classes from "./AlertModal.module.scss";
import { Button } from "..";

interface AlertModalProps {
  hide: () => void;
  handleCancel: MouseEventHandler<HTMLButtonElement>;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
  open: boolean;
}

const AlertModal = ({
  hide,
  handleCancel,
  handleDelete,
  open,
}: AlertModalProps) => (
  <Dialog
    className={classes.alertModal}
    open={open}
    onClose={hide}
    sx={{
      ".MuiDialog-paper": {
        backgroundColor: "var(--bg-modal)",
      },
    }}
  >
    <DialogTitle>
      <h5
        className="text-center"
        style={{
          color: "var(--color-primary-text)",
        }}
      >
        Are you sure you want to delete?
      </h5>
    </DialogTitle>
    <DialogContent>
      <div className={classes.alertButtons}>
        <Button
          onClick={(e: any) => handleCancel(e)}
          variant="cancel"
          title="Cancel"
        />
        <Button onClick={(e: any) => handleDelete(e)} title="Delete" />
      </div>
    </DialogContent>
  </Dialog>
);

export default AlertModal;
