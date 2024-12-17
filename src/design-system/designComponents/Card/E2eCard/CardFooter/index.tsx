import { CSSProperties, FC, ReactNode } from "react";
import "../card.scss";

const E2eCardFooter = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <div id="e2e_design_cardfooter" style={style}>
      {children}
    </div>
  );
};

export default E2eCardFooter;
