import { ReactNode } from "react";
import { BackIcon } from "../../../../assets/Drawer";
import { IconButton } from "@mui/material";
import Menu from "../../../../assets/Drawer/Menu";
import "./style.scss";

const SectionHeader = ({
  sectionTitle,
  sectionIcon,
  handleClose,
  sectionDesc,
  setIsNavOpen,
  sectionList,
  activeStep,
}: {
  sectionTitle: string;
  sectionIcon: any;
  handleClose: any;
  sectionDesc: ReactNode;
  setIsNavOpen: (value: boolean) => void;
  sectionList: any[];
  activeStep: number;
}) => {
  return (
    <div className="full-drawer-mobile-header">
      {sectionIcon || sectionTitle ? (
        <div className="mobile-main-nav-wrapper">
          <div className="mobile-nav-section-header">
            <div
              className="back-btn"
              role="button"
              onClick={() => handleClose()}
            >
              <BackIcon fill="var(--color-primary-text)" />
            </div>
            <div className="section-info">
              {sectionIcon}
              <h6 className="section-title">{sectionTitle}</h6>
            </div>
          </div>
          <div className="section-desc">{sectionDesc} </div>
        </div>
      ) : null}
      <div className="full-drawer-nav-wrap">
        <div className="side-nav-section-handler-wrap">
          <IconButton onClick={() => setIsNavOpen(true)} className="icon-wrap">
            <Menu fill="var(--navbar-menu-color)" />
          </IconButton>
        </div>
        <div className="full-drawer-step-name-display">
          <div>{sectionList[activeStep]?.icon}</div>
          <p className="display-name">{sectionList[activeStep]?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
