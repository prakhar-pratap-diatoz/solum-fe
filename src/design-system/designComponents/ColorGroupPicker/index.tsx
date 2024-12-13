import { useRef, useState } from "react";
import "./style.scss";
import { ClickAwayListener } from "@mui/material";
import Popper from "../Popper";
import { DropdownIcon } from "../../assets";

function ColorGroupPicker({
  colorGroups,
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
  colorGroups: any[];
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
            {colorGroups.map((group: any, groupIndex: number) => (
              <div key={groupIndex}>
                <div className="group-title">{group.title}</div>
                <div className="color-group-container">
                  {group.colors.map((color: any, colorIndex: number) => (
                    <div
                      className="color-box"
                      role="button"
                      style={{ backgroundColor: color }}
                      key={colorIndex}
                      onClick={() => {
                        handleColor(color);
                        handleClose ? handleClose() : setIsColorPicker(false);
                      }}
                    >
                      {color === value ||
                      (!value && defaultValue && color === defaultValue) ||
                      (!value && !defaultValue && color === group.colors[0]) ? (
                        <div className="checkmark"></div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Popper>
      </ClickAwayListener>
    </div>
  );
}

export default ColorGroupPicker;
