import { CSSProperties, FC, ReactNode } from "react";
import "../card.scss";

const E2eCardBody = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <div id="e2e_design_cardbody" style={style}>
      {children}
    </div>
  );
};

export default E2eCardBody;
