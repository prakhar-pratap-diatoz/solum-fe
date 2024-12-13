import { MaxIcon, MinIcon } from "../../assets/Drawer";
import { Popover } from "antd";
import "./MaxminViewButton.scss";

interface MaxminViewButtonProps {
  setMaxView: (value: boolean) => void;
  maxView: boolean;
}

const MaxminViewButton = ({ setMaxView, maxView }: MaxminViewButtonProps) => {
  return (
    <div className="min-max-container" onClick={() => setMaxView(!maxView)}>
      <Popover
        trigger="hover"
        overlayClassName="minMax-popover-style"
        placement={maxView ? "bottomLeft" : "topLeft"}
        content={
          !maxView ? "Expand to full screen" : "Minimize to default screen"
        }
      >
        {maxView ? <MinIcon /> : <MaxIcon />}
      </Popover>
    </div>
  );
};

export default MaxminViewButton;
