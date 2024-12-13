import { ReactNode } from "react";
import "./LocationCard.scss";
interface LocationCardProps {
  heading: string;
  subHeading?: string;
  image?: ReactNode | string;
  className: string;
  tags?: ReactNode;
  action?: ReactNode;
}
const LocationCard = ({
  subHeading,
  heading,
  image,
  className,
  tags,
  action,
}: LocationCardProps) => {
  return (
    <div id="e2e_design_location_card" className={className}>
      <div className="row align-items-center">
        <div className="col-1 justify-content-start">{image}</div>

        <div className="col-7">
          <div className="location_card_heading">{heading}</div>
          <div className="location_card_sub_heading">{subHeading}</div>
        </div>
        <div className="col-4 d-flex justify-content-end">{action}</div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10">{tags}</div>
      </div>
    </div>
  );
};

export default LocationCard;
