import { useRef, useState } from "react";
import Popper from "../Popper";
import { ClickAwayListener, SvgIconProps } from "@mui/material";
import Iconconverter from "../IconConverter";
import { renderToString } from "react-dom/server";
import "./style.scss";
import { DropdownIcon } from "../../assets";

function IconPicker({
  icons,
  handleIcon,
  value,
  width,
  disabled,
  defaultValue,
  height,
}: {
  icons: { icon: React.ReactElement<SvgIconProps> }[];
  handleIcon: (value: string) => void;
  value: string;
  width?: string;
  disabled?: boolean;
  defaultValue?: React.ReactElement<SvgIconProps>;
  height?: number;
}) {
  const iconPickerRef = useRef(null);
  const [isIconPicker, setIsIconPicker] = useState(false);

  return (
    <div id="custom-icon-picker">
      <div
        className={
          disabled
            ? "disabled-iconbox-wrapper"
            : iconPickerRef?.current && isIconPicker
            ? "selected-iconbox-wrapper "
            : "icon-box-wrapper"
        }
        style={height ? { height: height } : undefined}
        ref={iconPickerRef}
        onClick={() => (disabled ? null : setIsIconPicker(!isIconPicker))}
      >
        {value ? (
          <Iconconverter icon={value} />
        ) : defaultValue ? (
          defaultValue
        ) : (
          <Iconconverter icon={renderToString(icons[0].icon)} />
        )}
        <DropdownIcon fill="var(--color-primary-text)" className="ml-2" />
      </div>
      <ClickAwayListener onClickAway={() => setIsIconPicker(false)}>
        <Popper
          open={isIconPicker}
          onClose={() => setIsIconPicker(false)}
          anchorEl={iconPickerRef?.current}
        >
          <div
            className="d-flex align-items-center flex-wrap icon-box-container"
            style={{ width: width ? width : 220, padding: 15, gap: 12 }}
          >
            {icons.map((iconData: any, index: number) => {
              const iconString = renderToString(iconData.icon);
              return (
                <div
                  className={
                    iconString === value ||
                    (!value &&
                      defaultValue &&
                      iconString === renderToString(defaultValue)) ||
                    (!value &&
                      !defaultValue &&
                      iconString === renderToString(icons[0].icon))
                      ? "selected-icon-box"
                      : "icon-box"
                  }
                  key={index}
                  onClick={() => {
                    handleIcon(iconString);
                    setIsIconPicker(false);
                  }}
                >
                  <Iconconverter icon={iconString} />
                </div>
              );
            })}
          </div>
        </Popper>
      </ClickAwayListener>
    </div>
  );
}

export default IconPicker;
