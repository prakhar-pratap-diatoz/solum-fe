import { ReactElement } from "react";
import { Tooltip as MaterialToolTip } from "@mui/material";
import "./style.scss";

type Placement =
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left-end"
  | "left-start"
  | "left"
  | "right-end"
  | "right-start"
  | "right"
  | "top-end"
  | "top-start"
  | "top";
interface TooltipProps {
  children: ReactElement;
  placement?: Placement;
  title: string | ReactElement;
}

const Tooltip = ({ placement, children, title }: TooltipProps) => {
  return (
    <div id="e2e_design_tool_tip_custom">
      <MaterialToolTip
        title={title}
        arrow
        placement={placement ? placement : "bottom-start"}
        id="e2e_design_tool_tip_custom"
        sx={{ background: "#0080a5" }}
        disableFocusListener={true}
      >
        {children}
      </MaterialToolTip>
    </div>
  );
};
export default Tooltip;
