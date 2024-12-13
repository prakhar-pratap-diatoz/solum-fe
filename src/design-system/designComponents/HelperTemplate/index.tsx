import { ReactNode, ReactElement } from "react";
import { Button } from "@mui/material";
import SvgAddIcon from "../../assets/AddIcon";
import "./style.scss";

function HelperTemplate({
  helperMessage,
  messageDescription,
  buttonText,
  onClickHandler,
  children,
  customIcon,
}: {
  helperMessage: string;
  messageDescription?: string;
  buttonText?: string;
  onClickHandler?: Function;
  children?: ReactNode | ReactElement;
  customIcon?: ReactNode | ReactElement;
}) {
  return (
    <div id="helper-template">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="empty-illustration"></div>
        <h6 className="data-unavaibility-message">{helperMessage}</h6>
        {messageDescription ? (
          <p className="data-unavaibility-description">{messageDescription}</p>
        ) : null}
        {children ? children : null}
        {buttonText && onClickHandler ? (
          <div className="helper-template-btn">
            <Button
              onClick={() => (onClickHandler ? onClickHandler() : null)}
              className="helper-template-btn"
              variant="outlined"
              startIcon={customIcon ? customIcon : <SvgAddIcon />}
            >
              {buttonText}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default HelperTemplate;
