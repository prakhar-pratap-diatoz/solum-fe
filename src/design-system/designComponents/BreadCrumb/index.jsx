import { Link } from "react-router-dom";
import "./style.scss";

export default function BreadCrumb({ children, ...restProps }) {
  return (
    <div className="e2e-breadcumbs" {...restProps}>
      {children}
    </div>
  );
}
BreadCrumb.Link = function LinkBreadCrumb({ children, ...restProps }) {
  return (
    <Link className="e2e-breadcrumb-link" {...restProps}>
      <div>{children}</div>
      <div style={{ color: "#BEBEBE", margin: "auto 6px" }}>/</div>
    </Link>
  );
};
BreadCrumb.DisabledLink = function DisabledLinkBreadCrumb({
  children,
  ...restProps
}) {
  return (
    <div className="e2e-breadcrumb-link-disabled" {...restProps}>
      {children}
    </div>
  );
};
BreadCrumb.Tabs = function TabsContainer({ children, ...restProps }) {
  return (
    <div className="e2e-breadcrumb-tabs" {...restProps}>
      {children}
    </div>
  );
};
BreadCrumb.Tab = function Tab({ children, ...restProps }) {
  return (
    <div className="e2e-breadcrumb-tab" {...restProps}>
      {children}
    </div>
  );
};
