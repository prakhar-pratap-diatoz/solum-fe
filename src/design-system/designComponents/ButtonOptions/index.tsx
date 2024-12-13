import "./style.scss";
const ButtonOptions = ({
  options,
  multiple,
  selectedOption,
  multipleSelectCheck,
  handleMultipleSelect,
  setSelectedOption,
  buttonMinWidth,
  disabledCondition,
  buttonMinHeight,
}: {
  options: any[];
  multiple?: boolean;
  disabledCondition?: Function;
  multipleSelectCheck?: Function;
  handleMultipleSelect?: Function;
  selectedOption?: string | number | any[] | null;
  setSelectedOption?: Function;
  isIconOnly?: boolean;
  layoutOption?: number;
  buttonMinWidth?: number;
  buttonMinHeight?: number;
}) => {
  return (
    <div id="btn-option">
      <div className="option-btn-wrapper">
        {options.map((option: any, idx: number) => (
          <button
            disabled={
              disabledCondition
                ? disabledCondition(idx, option.disabled)
                : false
            }
            key={idx}
            style={{
              minWidth: buttonMinWidth ? buttonMinWidth : undefined,
              minHeight: buttonMinHeight ? buttonMinHeight : undefined,
            }}
            className={`btn ${
              (
                multiple && multipleSelectCheck
                  ? multipleSelectCheck(idx, option.name, option)
                  : String(option.value) === String(selectedOption)
              )
                ? "selected-option-btn"
                : ""
            }
                ${
                  disabledCondition && disabledCondition(idx, option.disabled)
                    ? "btn-options-disabled"
                    : ""
                }`}
            onClick={() =>
              multiple && handleMultipleSelect
                ? handleMultipleSelect(option.name, option.value, idx, option)
                : setSelectedOption
                ? setSelectedOption(option.value)
                : null
            }
          >
            <div className="opacity-100">{option.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonOptions;
