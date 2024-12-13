import { ReactNode } from "react";
import { ErrorInfo, Info } from "../../assets/common";
import "./style.scss";

function HelperInfo({
  type,
  children,
  isIcon = true,
  className,
}: {
  type: "info" | "error";
  children: ReactNode;
  isIcon?: boolean;
  className?: string;
}) {
  return (
    <div id="custom-helper-info" className={className ? className : ""}>
      <div
        className={`helper-info-wrapper ${
          type === "info" ? "info" : type === "error" ? "error" : ""
        }`}
      >
        {isIcon && (
          <div className="mr-2">
            {type === "info" ? (
              <Info />
            ) : type === "error" ? (
              <ErrorInfo />
            ) : null}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default HelperInfo;
