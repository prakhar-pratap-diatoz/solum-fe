import { ReactNode } from "react";
import { EditIcon } from "../../../assets/common";
import { Button } from "../../";
import "./styles.scss";

interface ViewDetailCardProps {
  sectionTitle: string;
  description?: string;
  children?: ReactNode;
  icon?: ReactNode;
  index: number;
  onEdit?: () => void;
  id?: string;
  disableEdit?: boolean;
}

const ViewCard = ({
  sectionTitle,
  description,
  icon,
  children,
  index,
  onEdit,
  id,
  disableEdit,
}: ViewDetailCardProps) => {
  return (
    <div id={id}>
      <div id="e2e_design_view_detail_card">
        <div className="section-heading-container">
          <div className="heading-wrap">
            <div className="">
              <div className="d-flex">
                {icon ? <div className="mr-2">{icon}</div> : null}
                <div className="d-flex flex-column">
                  <div className="section-heading">{sectionTitle}</div>
                  <div className="section-sub-heading-container">
                    {description}
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              {onEdit && (
                <div
                  role="button"
                  style={{
                    cursor: disableEdit ? "not-allowed" : "pointer",
                    opacity: disableEdit ? 0.5 : 1,
                  }}
                >
                  <Button
                    variant="text"
                    title={"Edit"}
                    height={32}
                    onClick={onEdit}
                    disabled={disableEdit}
                    startIcon={
                      <EditIcon
                        onClick={onEdit}
                        fill={"var(--color-secondary)"}
                      />
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="section-field-container">{children}</div>
      </div>
    </div>
  );
};

export default ViewCard;
