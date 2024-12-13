import { DatePicker, DatePickerProps } from "antd";
import moment from "moment";
import { InfoOutlined } from "@mui/icons-material";
import { Calender } from "../../assets/common";
import "./datefield.scss";
import { ReactNode } from "react";

interface DateFieldProps {
  id?: string;
  heading?: string;
  required?: boolean;
  subHeading?: string;
  disabled?: boolean;
  value?: string | number | any;
  placeholder?: string;
  error?: boolean;
  allowClear?: boolean;
  picker?: "date" | "week" | "month" | "quarter" | "year";
  disabledDate?: (current: any) => any;
  onChange: (value: string) => void;
  format?: any;
  status?: "error" | "warning" | undefined;
  helperText?: string | ReactNode;
  showTime?: object | boolean;
  open?: boolean;
  onBlur?: any;
}

const DateField = ({
  id,
  heading,
  required = false,
  subHeading,
  disabled = false,
  allowClear = false,
  value,
  placeholder,
  disabledDate,
  onChange,
  onBlur,
  picker,
  format,
  status,
  helperText,
  showTime,
  open,
}: DateFieldProps) => {
  const onDateChange: DatePickerProps["onChange"] = (
    _: any,
    dateString: any
  ) => {
    onChange(dateString);
  };

  return (
    <div id="e2e_design_date_field">
      <div className="text-field-heading">
        {heading}
        {required ? <span className="field-required-icon">*</span> : null}
      </div>
      {subHeading ? (
        <div className="text-field-sub-heading">{subHeading}</div>
      ) : null}

      <div
        className={
          subHeading !== undefined || heading !== undefined
            ? "text-field-wrapper"
            : ""
        }
      >
        <DatePicker
          id={id}
          open={open}
          dropdownClassName={`date-picker-field`}
          placeholder={placeholder ? placeholder : ""}
          className={`date-field-wrapper ${status ? status + "-field" : ""}`}
          value={value ? moment(value) : undefined}
          onChange={onDateChange}
          disabled={disabled}
          disabledDate={disabledDate}
          allowClear={allowClear}
          suffixIcon={<Calender fill="var(--color-primary-text)" />}
          picker={picker ? picker : undefined}
          format={format ? format : undefined}
          status={status}
          showTime={showTime ? showTime : undefined}
          onBlur={onBlur}
        />
        {status && status === "error" && helperText ? (
          <div className="text-field-helper-error-text">
            <InfoOutlined className="text-field-helper-text-icon" />
            {helperText}
          </div>
        ) : (
          helperText && (
            <div className="text-field-helper-text">{helperText}</div>
          )
        )}
      </div>
    </div>
  );
};
export default DateField;
