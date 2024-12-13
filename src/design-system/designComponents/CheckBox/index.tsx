import { Checkbox } from "antd";
import "./styles.scss";

const CheckBoxField = ({
  onChange,
  value,
  required,
  label,
  disabled,
  desc,
  className,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
  required?: boolean;
  label?: string;
  disabled?: boolean;
  isReadOnlyField?: boolean;
  desc?: string;
  className?: string;
}) => {
  return (
    <div className="e2e-design-checkbox">
      <Checkbox
        checked={value}
        value={value}
        disabled={disabled}
        className={className}
        onChange={(e) => onChange(e?.target?.checked)}
      >
        {label && (
          <div className="input-wrapper-field-label">
            {label}
            {required ? <span className="text-danger">&nbsp;*</span> : ""}
          </div>
        )}
      </Checkbox>
      {desc && <div className="input-wrapper-field-label-desc">{desc}</div>}
    </div>
  );
};

export default CheckBoxField;
