import { RefAttributes } from "react";
import { TimePicker as AntdTimePicker, TimePickerProps } from "antd";
import {AccessTime} from '@mui/icons-material';
import "./styles.scss";

function TimePicker(props: TimePickerProps & RefAttributes<any>) {
  return (
    <AntdTimePicker
      {...props}
      popupClassName="custom-timepicker-popup"
      className="custom-timepicker"
      suffixIcon={<AccessTime style={{
        color:"var(--color-primary-text)"
      }}/>}
    />
  );
}

export default TimePicker;
