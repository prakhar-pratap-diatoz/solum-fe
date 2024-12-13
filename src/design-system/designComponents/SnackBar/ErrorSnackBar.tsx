import { Toast } from "..";

export const ErrorSnackBar = ({
  open,
  handleClose,
  title,
}: {
  open: boolean;
  handleClose: (arg0: boolean) => void;
  title?: string;
  hideDuration?: number;
}) => {
  return (
    <>
      {open && (
        <Toast
          open={open}
          title={title ? title : "Something went wrong"}
          type="error"
          onClose={() => handleClose(false)}
        />
      )}
    </>
  );
};
