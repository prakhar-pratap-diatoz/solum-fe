import { DatePicker } from "antd";
import moment from "moment";
import { FieldLabel } from "../Typography";
import "./style.scss";

const { RangePicker } = DatePicker;

interface RangePickerProps {
  handleChange: any;
  value: any;
  heading?: string;
  required?: boolean;
  disableFromDate?: string;
  disbaleToDate?: string;
  disabled?: boolean;
}

const CustomRangePicker = ({
  handleChange,
  value,
  heading,
  required,
  disableFromDate,
  disbaleToDate,
  disabled,
}: RangePickerProps) => {
  return (
    <>
      <FieldLabel heading={heading} required={required} />
      <div className="custom-date-range">
        <RangePicker
          style={{ height: "40px" }}
          className="custom-date-range-picker"
          dropdownClassName="custom-date-range-picker-dropdown"
          value={value}
          format="YYYY-MM-DD"
          onChange={handleChange}
          getPopupContainer={(trigger: any) => trigger.parentNode}
          disabledDate={(current: any) => {
            return (
              current &&
              disableFromDate &&
              disbaleToDate &&
              (current < moment(disableFromDate) ||
                current > moment(disbaleToDate))
            );
          }}
          disabled={disabled}
        />
      </div>
    </>
  );
};

export default CustomRangePicker;
