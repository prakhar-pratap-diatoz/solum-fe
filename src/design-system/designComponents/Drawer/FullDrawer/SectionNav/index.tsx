import "./style.scss";
import { BackIcon } from "../../../../assets/Drawer";
import { ReactNode } from "react";
import Section from "../Section";
import { useMediaQuery } from "react-responsive";
import { CloseRounded } from "@mui/icons-material";

function SectionNav({
  handleClose,
  sectionTitle,
  sectionIcon,
  sectionList,
  canProceedToNext,
  sectionIconCheck,
  activeStep,
  setActiveStep,
  sectionDesc,
  handleNextSubmitButton,
  handlePreviousButton,
  additionalSectionInfo,
  setIsNavOpen,
  setHeadertitle,
  disableSideNav,
  handleSectionMovement,
}: {
  handleClose: Function;
  sectionTitle?: string;
  sectionIcon?: any;
  sectionList: any[];
  sectionIconCheck?: Function;
  canProceedToNext: Function;
  activeStep: number;
  setActiveStep: Function;
  sectionDesc?: ReactNode;
  handleNextSubmitButton?: Function | undefined;
  handlePreviousButton?: Function | undefined;
  additionalSectionInfo?: ReactNode;
  setIsNavOpen?: (value: boolean) => void;
  setHeadertitle?: (value: string) => void;
  disableSideNav?: boolean;
  handleSectionMovement?: Function;
}) {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <div
      className={
        isMobile ? "section-nav-drawer-wrap" : "col-sm-4 col-lg-3 col-xxl-2"
      }
    >
      <div id="section-nav">
        {sectionIcon || sectionTitle ? (
          <>
            <div
              className={
                isMobile
                  ? "mobile-nav-section-wrapper nav-section-wrapper"
                  : "nav-section-wrapper"
              }
            >
              <div
                className={
                  isMobile
                    ? "mob-nav-section-header nav-section-header"
                    : "nav-section-header"
                }
              >
                {!isMobile && (
                  <div
                    className="back-btn"
                    role="button"
                    onClick={() => handleClose()}
                  >
                    <BackIcon fill="var(--color-primary-text)" />
                    <span className="ml-1">Back</span>
                  </div>
                )}
                <div className="section-info">
                  {sectionIcon}
                  <h6 className="section-title">{sectionTitle}</h6>
                </div>
                {isMobile && (
                  <div
                    className="sidenav-close-icon"
                    onClick={() => setIsNavOpen && setIsNavOpen(false)}
                  >
                    <CloseRounded
                      style={{
                        color: "var(--color-primary-text)",
                        width: "16px",
                        height: "16px",
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="section-desc">{sectionDesc} </div>
            </div>
          </>
        ) : null}
        {!isMobile ? additionalSectionInfo : null}
        <div
          className={`section-list-wrapper ${
            sectionIcon || sectionTitle ? "" : "bottom-drawer-section-list"
          } ${isMobile ? "mob-section-list-wrapper" : ""}`}
        >
          {sectionList.map((sectionData: any, idx: number) => (
            <Section
              key={idx}
              sectionData={sectionData}
              sectionIconCheck={sectionIconCheck}
              index={idx}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              canProceedToNext={canProceedToNext}
              handleNextSubmitButton={handleNextSubmitButton}
              handlePreviousButton={handlePreviousButton}
              setIsNavOpen={setIsNavOpen}
              disableSideNav={disableSideNav}
              handleSectionMovement={handleSectionMovement}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionNav;
