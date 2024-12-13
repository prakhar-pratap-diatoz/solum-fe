import "./style.scss";
import { MaxIcon, MinIcon } from "../../../../assets/Drawer";
import { Button } from "../../..";
import { MobileStepper } from "@mui/material";
import { Popover } from "antd";
import { Warning } from "../../../../assets/common";
import { useMediaQuery } from "react-responsive";

function SectionComponentRender({
  sectionComponent,
  maxView,
  setMaxView,
  canProceedToNext,
  activeStep,
  setActiveStep,
  isSaveDraftButton,
  handleDraftButton,
  nextSubmitButtonText,
  handleNextSubmitButton,
  sectionList,
  isFullDrawer,
  saveDraftButtonTitle,
  canProceedToNextForSaveDraft,
  handlePreviousButton,
  disableNextButton,
  bannerText,
  handleBannerAction,
  handleClose,
  handleSaveClose,
  saveAndCloseText,
  submitBtnLoader,
  draftInLastSection,
}: {
  maxView?: boolean;
  setMaxView?: (status: boolean) => void;
  handleClose: Function;
  activeStep: number;
  sectionList: any[];
  nextSubmitButtonText: string;
  handleNextSubmitButton: Function;
  isSaveDraftButton?: boolean;
  canProceedToNext: Function;
  sectionComponent: any;
  handleDraftButton?: Function;
  setActiveStep: (value: number) => void;
  isFullDrawer?: boolean;
  saveDraftButtonTitle?: string;
  canProceedToNextForSaveDraft?: Function;
  handlePreviousButton?: Function | undefined;
  disableNextButton?: boolean;
  bannerText?: string;
  handleBannerAction?: Function | undefined;
  handleSaveClose?: Function | undefined;
  saveAndCloseText?: string;
  submitBtnLoader?: boolean;
  draftInLastSection?: boolean;
}) {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <div
      className={`${
        isMobile
          ? "full-drawer-mobile-section-component"
          : maxView
          ? "col-12 h-100"
          : "col-sm-8 col-lg-9 col-xxl-10 h-100"
      }`}
    >
      <div id="section-component-render">
        <div style={{ height: "calc(100% - 73px)", overflow: "auto" }}>
          <div className="section-data-wrapper">
            {bannerText ? (
              <div className="full-drawer-banner">
                <div className="banner-wrapper">
                  <Warning className="mr-2" />
                  <div className="banner-text">{bannerText}</div>
                  {handleBannerAction ? (
                    <Button
                      title="Republish"
                      className="ml-3"
                      height={28}
                      onClick={() => {
                        handleBannerAction();
                      }}
                    />
                  ) : null}
                </div>
              </div>
            ) : null}
            <div
              className={
                isFullDrawer
                  ? "section-data-container"
                  : "bottom-drawer-section-wrapper"
              }
            >
              {!isMobile && isFullDrawer && setMaxView ? (
                <div className="min-max" onClick={() => setMaxView(!maxView)}>
                  <Popover
                    trigger="hover"
                    content={
                      maxView
                        ? "Expand to full screen"
                        : "Minimize to default screen"
                    }
                  >
                    {maxView ? <MinIcon /> : <MaxIcon />}
                  </Popover>
                </div>
              ) : null}

              <div className="section-data">{sectionComponent}</div>
            </div>
          </div>
        </div>
        <div className="section-action-wrapper">
          <MobileStepper
            variant="progress"
            steps={sectionList?.length}
            position="static"
            activeStep={activeStep}
            sx={[
              {
                maxWidth: 400,
                flexGrow: 1,
              },
              {
                ".MuiLinearProgress-bar": {
                  bgcolor: `${sectionList.length > 1 ? "#0080a5" : "#ccc"}`,
                },
              },
            ]}
            nextButton={null}
            backButton={null}
          />
          <div className="section-action-buttons-wrapper">
            {activeStep === 0 ? null : (
              <Button
                title="Previous"
                variant="cancel"
                disabled={activeStep === 0 || canProceedToNext(activeStep - 1)}
                onClick={() =>
                  handlePreviousButton
                    ? handlePreviousButton()
                    : setActiveStep(activeStep - 1)
                }
              />
            )}

            <div className="d-flex align-items-center ml-auto">
              <Button
                className="ml-3"
                title={
                  canProceedToNext(activeStep) || disableNextButton
                    ? "Close"
                    : saveAndCloseText
                    ? "Save & Close"
                    : "Close"
                }
                variant={
                  !(canProceedToNext(activeStep) || disableNextButton)
                    ? "outlined"
                    : "cancel"
                }
                disabled={handleSaveClose ? handleSaveClose() : false}
                onClick={() => {
                  if (handleSaveClose) {
                    const saveClosePromise = new Promise(() => {
                      handleSaveClose();
                    });
                    saveClosePromise.then(() => {
                      handleClose(false);
                    });
                  } else {
                    handleClose(false);
                  }
                }}
                loading={handleSaveClose ? submitBtnLoader : false}
              />

              {isSaveDraftButton &&
              handleDraftButton &&
              (activeStep !== sectionList?.length - 1 || draftInLastSection) ? (
                <Button
                  className="ml-3"
                  title={
                    saveDraftButtonTitle
                      ? saveDraftButtonTitle
                      : "Save as Draft"
                  }
                  variant="cancel"
                  disabled={
                    canProceedToNextForSaveDraft &&
                    canProceedToNextForSaveDraft(activeStep)
                      ? true
                      : false
                  }
                  onClick={() => {
                    handleDraftButton();
                  }}
                />
              ) : null}

              <Button
                className="ml-3"
                title={nextSubmitButtonText}
                variant="contained"
                disabled={canProceedToNext(activeStep) || disableNextButton}
                onClick={() => {
                  handleNextSubmitButton();
                }}
                loading={submitBtnLoader}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionComponentRender;
