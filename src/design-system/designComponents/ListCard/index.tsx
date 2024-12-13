import "./style.scss";

import Button from "../Buttons/Button";
import { ReactNode } from "react";
import SvgDelete from "../../assets/common/Delete";
import SvgEdit from "../../assets/common/Edit";
import { TypographyHeader } from "../Typography";

interface LocationCardProps {
  heading: string;
  subHeading?: string;
  className: string;
  footer?: ReactNode;
  handleEdit?: Function;
  handleDelete?: Function;
  isAccordion?: boolean;
}
const ListCard = ({
  subHeading,
  heading,
  className,
  handleEdit,
  handleDelete,
  footer,
  isAccordion,
}: LocationCardProps) => {
  return (
    <div id="e2e-design-list-card">
      <div
        className={`${isAccordion ? "" : "list-card-container"} ${
          className ? className : ""
        }`}
      >
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="w-70">
            <TypographyHeader variant="h5">{heading}</TypographyHeader>
            <div className="list-card-sub-heading">{subHeading}</div>
          </div>
          <div className="w-30 d-flex justify-content-end">
            <div className="d-flex align-items-center">
              {handleEdit ? (
                <Button
                  startIcon={<SvgEdit fill="var(--color-primary-text" />}
                  title="Edit"
                  variant="text"
                  textColor="var(--color-primary-text)"
                  onClick={() => handleEdit()}
                />
              ) : null}
              {handleDelete ? (
                <Button
                  startIcon={<SvgDelete fill="var(--color-primary-text" />}
                  title="Delete"
                  variant="text"
                  textColor="var(--color-primary-text)"
                  onClick={() => {
                    handleDelete();
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
        {footer ? <div>{footer}</div> : null}
      </div>
    </div>
  );
};

export default ListCard;
