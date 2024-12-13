import React from "react";
import { Button } from "@mui/material";
import "./style.scss";

interface NoDataFoundProps {
  title: string;
  description: string;
  actionButtonTitle: string;
  handleClick: Function;
  insideView: boolean;
  secondarybuttonText?: string;
  handleSecondaryClick?: Function;
}

const NoDataFound = ({
  title,
  description,
  actionButtonTitle,
  handleClick,
  insideView,
  secondarybuttonText,
  handleSecondaryClick,
}: NoDataFoundProps) => {
  return (
    <div
      className="no-data-found-web-view-container-design-system"
      style={{
        height: insideView ? "auto" : "calc(100vh - 250px)",
        marginTop: insideView ? "100px" : "0px",
      }}
    >
      <div className="colored-box-container">
        <div className="colored-box"></div>
      </div>
      <div className="title-text">{title}</div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="description-text">{description}</div>
      </div>

      <div className="action-btn-wrapper d-flex" style={{ columnGap: "20px" }}>
        <Button
          onClick={() => (handleClick ? handleClick() : null)}
          variant="contained"
          className="primary-contained"
        >
          {actionButtonTitle}
        </Button>

        {secondarybuttonText ? (
          <Button
            onClick={() =>
              handleSecondaryClick ? handleSecondaryClick() : null
            }
            variant="outlined"
            className="primary-outlined"
          >
            {secondarybuttonText}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default NoDataFound;
