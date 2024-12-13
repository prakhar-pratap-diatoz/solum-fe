import { ReactNode, useState } from "react";
import SvgChangeStatusIcon from "../../assets/common/ChangeStatusIcon";
import SvgCopy from "../../assets/common/Copy";
import SvgDelete from "../../assets/common/Delete";
import SvgEdit from "../../assets/common/Edit";
import SvgMoreVertical from "../../assets/common/MoreVertical";
import IconButton from "../IconButton";
import { MenuItem } from "../Menu";
import {
  MenuList,
  ClickAwayListener,
  Fade,
  Paper,
  Popper,
  IconButton as IconBtn,
} from "@mui/material";
import "./style.scss";

interface IExtraActionsProps {
  name: string;
  action: Function;
  icon?: ReactNode;
  disabled?: boolean;
}

function MoreVerticalOptions({
  type,
  passedAnchorEl,
  disableEdit,
  handleEdit,
  disableChangeStatus,
  handleChangeStatus,
  handleDuplicate,
  disableDelete,
  handleDelete,
  passedHandleClose,
  isIconButton,
  editMenuText,
  editIcon,
  deleteIcon,
  deleteMenuText,
  disablePortal = true,
  duplicateMenuText,
  extraActions,
  placement,
}: {
  type?: "button" | "icon" | undefined;
  disableEdit?: boolean | undefined;
  passedAnchorEl?: null | HTMLElement;
  handleDuplicate?: Function;
  handleEdit?: Function;
  disableChangeStatus?: boolean;
  handleChangeStatus?: Function;
  disableDelete?: boolean | undefined;
  handleDelete?: Function;
  //For having icon button with background and border
  isIconButton?: boolean;
  passedHandleClose?: any;
  editMenuText?: string;
  editIcon?: ReactNode;
  deleteIcon?: ReactNode;
  deleteMenuText?: string;
  disablePortal?: boolean;
  duplicateMenuText?: string;
  extraActions?: IExtraActionsProps[];
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
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(passedHandleClose ? passedAnchorEl : anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div id="more-vertical-options">
      {/* if you don't want default icon defined in this component pass `passedHandleClose and passedAnchorEl` as props */}
      {type === "button" && !passedHandleClose ? (
        isIconButton ? (
          <IconButton
            id="more-vertical-icon"
            aria-controls={open ? "more-vertical-icon-btn" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            className="ml-3"
            icon={<SvgMoreVertical fill="var(--color-primary-text)" />}
            handleClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.stopPropagation();
              handleClick(event);
            }}
          />
        ) : (
          <IconBtn
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.stopPropagation();
              handleClick(event);
            }}
          >
            <SvgMoreVertical fill="var(--color-primary-text)" />
          </IconBtn>
        )
      ) : type === "icon" && !passedHandleClose ? (
        <SvgMoreVertical
          fill="var(--color-primary-text)"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            handleClick(event);
          }}
        />
      ) : null}

      <Popper
        sx={{ zIndex: "16000" }}
        open={open}
        anchorEl={passedHandleClose ? passedAnchorEl : anchorEl}
        role={undefined}
        placement={placement ? placement : "bottom-end"}
        disablePortal={disablePortal}
        transition
      >
        {({ TransitionProps }: any) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin:
                // placement === "bottom-start" ? "left top" : "left bottom",
                "left-top",
            }}
          >
            <Paper
              sx={{
                borderTop: "1px solid var(--color-border-card)",
                backgroundColor: "var(--color-body-bg)",
              }}
            >
              <ClickAwayListener
                onClickAway={
                  passedHandleClose ? passedHandleClose : handleClose
                }
              >
                <MenuList id="custom_menulist">
                  {handleEdit ? (
                    <MenuItem
                      disabled={disableEdit}
                      onClick={(e: any) => {
                        e.stopPropagation();
                        handleEdit();
                        passedHandleClose ? passedHandleClose() : handleClose();
                      }}
                    >
                      {editIcon ? (
                        editIcon
                      ) : (
                        <SvgEdit fill="var(--color-primary-text)" />
                      )}
                      {editMenuText ? editMenuText : "Edit"}
                    </MenuItem>
                  ) : null}
                  {handleDuplicate ? (
                    <MenuItem
                      onClick={(e: any) => {
                        e.stopPropagation();
                        handleDuplicate();
                        passedHandleClose ? passedHandleClose() : handleClose();
                      }}
                    >
                      <SvgCopy fill="var(--color-primary-text)" />
                      {duplicateMenuText ? duplicateMenuText : "Duplicate"}
                    </MenuItem>
                  ) : null}
                  {handleChangeStatus ? (
                    <MenuItem
                      disabled={disableChangeStatus}
                      onClick={(e: any) => {
                        e.stopPropagation();
                        handleChangeStatus();
                        passedHandleClose ? passedHandleClose() : handleClose();
                      }}
                    >
                      <SvgChangeStatusIcon
                        fill="var(--color-primary-text)"
                        style={{ width: 14 }}
                      />
                      Change status
                    </MenuItem>
                  ) : null}
                  {handleDelete ? (
                    <MenuItem
                      disabled={disableDelete}
                      onClick={(e: any) => {
                        e.stopPropagation();
                        handleDelete();
                        passedHandleClose ? passedHandleClose() : handleClose();
                      }}
                    >
                      {deleteIcon ? (
                        deleteIcon
                      ) : (
                        <SvgDelete fill="var(--color-primary-text)" />
                      )}
                      {deleteMenuText ? deleteMenuText : "Delete"}
                    </MenuItem>
                  ) : null}

                  {extraActions?.map(
                    ({ action, name, icon, disabled }: IExtraActionsProps) => {
                      return (
                        <MenuItem
                          disabled={disabled}
                          onClick={(e: any) => {
                            e.stopPropagation();
                            action();
                            passedHandleClose
                              ? passedHandleClose()
                              : handleClose();
                          }}
                        >
                          {icon}
                          {name}
                        </MenuItem>
                      );
                    }
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

export default MoreVerticalOptions;
