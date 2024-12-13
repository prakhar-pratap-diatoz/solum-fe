import {
  ChangeEventHandler,
  KeyboardEventHandler,
  ReactNode,
  WheelEventHandler,
} from "react";
import { InputAdornment, TextField } from "@mui/material";
import { InfoOutlined as InfoOutlinedIcon } from "@mui/icons-material";
import { SearchIcon } from "../../assets";
import "./Textfield.scss";

interface TextFieldProps {
  id?: string;
  className?: string;
  heading?: string;
  required?: boolean;
  subHeading?: string;
  disabled?: boolean;
  value?: string | number | null;
  placeholder?: string;
  error?: boolean;
  onKeyDown?: Function | KeyboardEventHandler<HTMLDivElement> | any;
  onChange:
    | Function
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | any;
  onBlur?:
    | Function
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | any;
  helperText?: string | ReactNode;
  type?: string | "search";
  startIcon?: ReactNode | string;
  endIcon?: ReactNode | string;
  allowClear?: boolean;
  smallField?: boolean;
  minValue?: number;
  maxValue?: number;
  multiline?: boolean;
  autoFocus?: boolean;
  defaultValue?: string;
  rows?: number;
  maxRows?: number;
  inputRef?: any;
  inputProps?: any;
  onWheel?: WheelEventHandler<HTMLDivElement> | undefined;
  onMouseLeave?:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | any;
  onMouseEnter?:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | any;
}

const Textfield = ({
  id,
  heading,
  className,
  required = false,
  subHeading,
  disabled = false,
  value,
  placeholder,
  error = false,
  onChange,
  onKeyDown,
  helperText,
  type,
  startIcon,
  endIcon,
  smallField = false,
  minValue,
  maxValue,
  multiline = false,
  autoFocus = false,
  defaultValue,
  rows,
  maxRows,
  onBlur,
  inputRef = undefined,
  inputProps,
  onWheel,
  onMouseEnter,
  onMouseLeave,
}: TextFieldProps) => {
  return (
    <div id="e2e_design_textfield" className={className ? className : ""}>
      <div className="text-field-heading">
        {heading}
        {required ? <span className="field-required-icon">*</span> : null}
      </div>
      {subHeading ? (
        <div className="text-field-sub-heading">{subHeading}</div>
      ) : null}

      <div
        className={
          subHeading === undefined && heading === undefined
            ? ""
            : "text-field-wrapper"
        }
      >
        <TextField
          defaultValue={defaultValue}
          multiline={multiline}
          rows={rows}
          maxRows={maxRows}
          id={id}
          onWheel={(e: any) => e.target.blur()}
          sx={
            smallField
              ? {
                  ".MuiOutlinedInput-input": {
                    height: "28px",
                  },
                }
              : {
                  ".MuiOutlinedInput-input": {
                    height: "32px",
                  },
                }
          }
          InputProps={{
            startAdornment: startIcon && (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ),

            endAdornment:
              type === "search" ? (
                <InputAdornment position="end">
                  <SearchIcon fill="var(--color-textfield-font-color)" />
                </InputAdornment>
              ) : (
                endIcon && (
                  <InputAdornment position="end">{endIcon}</InputAdornment>
                )
              ),
          }}
          inputProps={{
            min: minValue,
            max: maxValue,
            ...inputProps,
          }}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          error={error}
          fullWidth
          disabled={disabled}
          variant="outlined"
          value={value}
          helperText={
            error && helperText ? (
              <div className="text-field-helper-error-text">
                <InfoOutlinedIcon className="text-field-helper-text-icon" />
                {helperText}
              </div>
            ) : (
              helperText && (
                <div className="text-field-helper-text">{helperText}</div>
              )
            )
          }
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          onKeyDown={onKeyDown}
          autoFocus={autoFocus}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
};

export default Textfield;
