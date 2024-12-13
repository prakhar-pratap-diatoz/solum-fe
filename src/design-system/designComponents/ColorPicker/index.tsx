import { useRef, useState } from "react";
import Popper from "../Popper";
import "./style.scss";
import { ClickAwayListener } from "@mui/material";
import { DropdownIcon } from "../../assets";

function ColorPicker({
  colors,
  handleColor,
  value,
  width,
  disabled,
  defaultValue,
  height,
  passedRef,
  openState,
  handleClose,
}: {
  colors: string[];
  handleColor: (value: string) => void;
  value: string;
  width?: string;
  disabled?: boolean;
  defaultValue?: string;
  height?: number;
  passedRef?: any;
  openState?: boolean;
  handleClose?: () => void;
}) {
  const colorPickerRef = useRef(null);
  const [isColorPicker, setIsColorPicker] = useState(false);
  return (
    <div id="custom-color-picker">
      {passedRef ? null : (
        <div
          className={
            disabled
              ? "disabled-color-box-wrapper"
              : isColorPicker && colorPickerRef?.current
              ? "selected-color-box-wrapper"
              : "color-box-wrapper"
          }
          style={height ? { height: height } : undefined}
          ref={colorPickerRef}
          onClick={() => (disabled ? null : setIsColorPicker(!isColorPicker))}
        >
          {/* <div className="d-flex  align-items-center"> */}
          <div
            onClick={() => (disabled ? null : setIsColorPicker(true))}
            className="color-box"
            style={{
              backgroundColor: value
                ? value
                : defaultValue
                ? defaultValue
                : "transparent",
            }}
          ></div>
          <DropdownIcon fill="var(--color-primary-text)" className="ml-2" />
          {/* </div> */}
        </div>
      )}

      <ClickAwayListener
        onClickAway={() =>
          handleClose ? handleClose() : setIsColorPicker(false)
        }
      >
        <Popper
          open={openState ? openState : isColorPicker}
          onClose={() =>
            handleClose ? handleClose() : setIsColorPicker(false)
          }
          anchorEl={passedRef ? passedRef.current : colorPickerRef?.current}
        >
          <div
            className="d-flex align-items-center flex-wrap"
            style={{ width: width ? width : 186, padding: 15, gap: 7 }}
          >
            {colors.map((color: any, index: number) => (
              <div
                className="color-box"
                role="button"
                style={{ backgroundColor: color }}
                key={index}
                onClick={() => {
                  handleColor(color);
                  handleClose ? handleClose() : setIsColorPicker(false);
                }}
              >
                {color === value ||
                (!value && defaultValue && color === defaultValue) ||
                (!value && !defaultValue && color === colors[0]) ? (
                  <div className="checkmark"></div>
                ) : null}
              </div>
            ))}
          </div>
        </Popper>
      </ClickAwayListener>
    </div>
  );
}

export default ColorPicker;
