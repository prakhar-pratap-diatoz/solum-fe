import { ReactNode } from "react";
import "./style.scss";

function CustomBackground({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div id="custom-background" className={className ? className : ""}>
      {children}
    </div>
  );
}

export default CustomBackground;
