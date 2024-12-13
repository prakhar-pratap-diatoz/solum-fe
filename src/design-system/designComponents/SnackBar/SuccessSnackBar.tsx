import { Toast } from "..";

export const SuccessSnackBar = ({
  open,
  handleClose,
  title,
}: {
  open: boolean;
  handleClose: (event?: any) => void;
  title?: string;
}) => {
  return (
    <>
      {open && (
        <Toast
          open={open}
          title={title ? title : "Something went wrong"}
          type="success"
          onClose={() => handleClose(false)}
        />
      )}
    </>
  );
};
