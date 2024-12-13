import { ReactNode } from "react";
import Empty from "./Empty";

const EmptyIllustration = ({
  componentName,
  actionRender,
  primaryColor,
  title,
}: {
  componentName?: string;
  actionRender?: ReactNode;
  primaryColor?: string;
  title?: string;
}) => {
  return (
    <div id="e2e_ds_empty_illustration">
      <div className="empty-illustration-wrapper">
        <Empty
          componentName={componentName}
          primaryColor={primaryColor}
          title={title}
        />
        <div className="empty-illus-action-render-wrap">{actionRender}</div>
      </div>
    </div>
  );
};

export default EmptyIllustration;
