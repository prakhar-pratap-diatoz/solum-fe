import { ReactNode } from "react";
import "./style.scss";

function TypographyHeader({
  variant,
  children,
  opacity,
}: {
  variant: string;
  children: ReactNode;
  opacity?: number;
}) {
  return (
    <div id="custom-header">
      <div
        className={`custom-${variant}`}
        style={{ opacity: opacity ? opacity : undefined }}
      >
        {children}
      </div>
    </div>
  );
}
export default TypographyHeader;
