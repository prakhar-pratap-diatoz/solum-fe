import { SectionChecked, SectionUnchecked } from "../../../../assets/Drawer";
import { HelperInfo } from "../../..";
import "./style.scss";
import { useMediaQuery } from "react-responsive";

function Section({
  index,
  activeStep,
  setActiveStep,
  canProceedToNext,
  sectionData,
  sectionIconCheck,
  handleNextSubmitButton,
  handlePreviousButton,
  setIsNavOpen,
  disableSideNav,
  handleSectionMovement,
}: any) {
  const { icon, title, description, id, ...otherProps } = sectionData;
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <div
      id="section"
      onClick={() => {
        if (disableSideNav) {
          setActiveStep(index);
          handleSectionMovement();
        } else {
          !canProceedToNext(activeStep) &&
          (index === 0 ? true : !canProceedToNext(index - 1))
            ? setActiveStep(index)
            : null;
          isMobile && setIsNavOpen(false);
        }
      }}
    >
      <div
        className={`section-info ${
          activeStep === index ? "selected-section-wrapper" : "section-wrapper"
        } ${otherProps.disabled ? "section-disabled" : ""} ${
          !canProceedToNext(activeStep) ? "can-proceed" : "can-not-proceed"
        }`}
      >
        {activeStep === index ? <div className="selected-sign"></div> : null}
        <div>{icon}</div>
        <div className="d-flex justify-content-between w-100 ml-3">
          <div className="section-info-data">
            <div className="d-flex align-items-center">
              <div className="title">{title}</div>
              {otherProps.errorMessage ? (
                <HelperInfo type="error">
                  <div style={{ fontSize: 11 }}>{otherProps.errorMessage}</div>
                </HelperInfo>
              ) : null}
            </div>

            <div className="section-description ">{description}</div>
          </div>
          <div className="ml-auto">
            {(
              sectionIconCheck
                ? sectionIconCheck(index)
                : !canProceedToNext(index)
            ) ? (
              <SectionChecked className="mb-2" />
            ) : (
              <SectionUnchecked />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
