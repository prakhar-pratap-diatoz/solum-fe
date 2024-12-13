import { ReactNode, useState } from "react";
import {
  Select as MaterialSelect,
  MenuItem,
  IconButton,
  InputAdornment,
  FormControl,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import { InfoOutlined as InfoOutlinedIcon } from "@mui/icons-material";
import { DropdownIcon } from "../../assets/Drawer";
import "./style.scss";

interface CustomSelectProps {
  id: string;
  multiple?: boolean;
  smallField?: boolean;
  heading?: string;
  subHeading?: string;
  menuOptions: any[];
  onChange:
    | ((event: SelectChangeEvent<string>, child: ReactNode) => void)
    | undefined;
  fullWidth?: boolean;
  required?: boolean;
  startIcon?: ReactNode | string;
  endIcon?: ReactNode | string;
  value: string | null | undefined | any;
  freeSolo?: boolean;
  disabled?: boolean;
  inputProps?: object;
  MenuProps?: object;
  label?: string;
  error?: boolean;
  helperText?: string;
  height?: number;
  children?: ReactNode;
  renderValue?: (value: any) => ReactNode;

  //access dynamic menu label
  optionLabelIdentifier?: string;

  //dynamic menu value
  optionValueIdentifier?: string;
  defaultValue?: string | null | undefined | any;
}

const Select = ({
  id,
  heading,
  fullWidth = true,
  menuOptions,
  multiple = false,
  required = false,
  disabled = false,
  onChange,
  startIcon,
  endIcon,
  inputProps,
  MenuProps,
  value,
  subHeading,
  smallField,
  label,
  error,
  helperText,
  height,
  optionLabelIdentifier = "label",
  optionValueIdentifier = "value",
  children,
  renderValue,
  defaultValue,
}: CustomSelectProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="e2e-custom-select">
      <div className={heading ? "text-field-wrapper" : ""}>
        <div className="custom-select-heading">
          {heading}
          {required ? <span className="field-required-icon">*</span> : null}
        </div>
        {subHeading ? (
          <div className="custom-select-sub-heading">{subHeading}</div>
        ) : null}
      </div>
      <div className="design-system-select">
        <FormControl fullWidth={fullWidth} error={error}>
          {label && !value ? (
            <InputLabel
              variant="outlined"
              focused={false}
              sx={{
                color: "var(--color-primary-text)",
                opacity: "0.5",
                top: "-8.5px",
                fontSize: "14px",
              }}
              shrink={false}
            >
              {label}
            </InputLabel>
          ) : null}
          <MaterialSelect
            id={id}
            disabled={disabled}
            label={label}
            renderValue={renderValue}
            sx={
              smallField
                ? {
                    ".MuiSelect-select": {
                      height: `${height ? height : 28}px !important`,
                    },
                    "& fieldset": { border: "none" },
                    height: `${height ? height : 28}px !important`,
                  }
                : {
                    ".MuiSelect-select": {
                      height: `${height ? height : 32}px !important`,
                    },
                    "& fieldset": { border: "none" },
                    height: `${height ? height : 39}px !important`,
                  }
            }
            IconComponent={() => null}
            multiple={multiple}
            variant="outlined"
            onChange={onChange}
            value={value !== undefined && value !== null ? value : ""}
            defaultValue={
              defaultValue !== undefined && defaultValue !== null
                ? defaultValue
                : undefined
            }
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            endAdornment={
              <InputAdornment
                disablePointerEvents={disabled}
                position="end"
                onClick={() => {
                  if (!disabled) setOpen(true);
                }}
              >
                <div className="end-adornment-wrapper">
                  {endIcon ? (
                    <p>{endIcon}</p>
                  ) : (
                    <IconButton disabled={disabled}>
                      <DropdownIcon />
                    </IconButton>
                  )}
                </div>
              </InputAdornment>
            }
            startAdornment={
              startIcon ? (
                <InputAdornment position="start">{startIcon}</InputAdornment>
              ) : null
            }
            MenuProps={
              MenuProps
                ? MenuProps
                : {
                    PaperProps: {
                      style: {
                        maxHeight: 48 * 4.5 + 8,
                        backgroundColor: "var(--color-body-bg)",
                      },
                    },
                    style: { zIndex: 3000 },
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                    MenuListProps: {
                      sx: {
                        backgroundColor: "var(--color-body-bg)",
                        color: "var(--color-primary-text) !important",
                        overflow: "auto",
                        display: "flex",
                        flexDirection: "column",
                      },
                    },
                  }
            }
            inputProps={inputProps ? inputProps : undefined}
          >
            {menuOptions && menuOptions?.length
              ? menuOptions.map((option: any, idx: number) => (
                  <MenuItem
                    value={
                      option[optionValueIdentifier]
                        ? option[optionValueIdentifier]
                        : option[optionLabelIdentifier]
                    }
                    key={idx}
                    sx={{
                      display: "block !important",
                      padding: "6px 16px !important",
                    }}
                  >
                    {option[optionLabelIdentifier]}
                  </MenuItem>
                ))
              : children}
          </MaterialSelect>
        </FormControl>
        {error ? (
          <div className="text-field-helper-error-text">
            <InfoOutlinedIcon className="text-field-helper-text-icon" />
            {helperText}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Select;
