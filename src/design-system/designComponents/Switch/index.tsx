import { ReactNode } from "react";
import { Switch } from "antd";
import "./styles.scss";

const SwitchWithCard = ({
  value,
  onChange,
  title,
  children,
  desc,
  disabled,
  profileImg,
  imgComponent,
}: {
  value: boolean;
  title: string;
  onChange: (value: boolean) => void;
  children?: ReactNode;
  desc?: string;
  disabled?: boolean;
  profileImg?: boolean;
  imgComponent?: ReactNode;
}) => {
  return (
    <div className="e2e_design_switch_with_Card">
      <div className="card-wrapper">
        <div className="d-flex" style={{ columnGap: "20px" }}>
          {profileImg ? imgComponent : null}
          <div className="switch-wrapper">
            <div>
              <div className="title">{title}</div>
              <div className="desc">{desc}</div>
            </div>
            <div className="switch-container">
              <Switch checked={value} onChange={onChange} disabled={disabled} />
            </div>
          </div>
        </div>
        {value && children}
      </div>
    </div>
  );
};

export default SwitchWithCard;
