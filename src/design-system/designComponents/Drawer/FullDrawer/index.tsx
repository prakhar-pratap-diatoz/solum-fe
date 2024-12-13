import "./style.scss";
import { ReactNode, useEffect, useState } from "react";
import { Drawer, SwipeableDrawer } from "@mui/material";
import SectionComponentRender from "./SectionComponentRender";
import SectionNav from "./SectionNav";
import { FullPageIllustration } from "../..";
import { useMediaQuery } from "react-responsive";
import SectionHeader from "./SectionHeader";

function FullDrawer({
  open,
  handleClose,
  activeStep,
  nextSubmitButtonText,
  canProceedToNext,
  handleDraftButton,
  handleNextSubmitButton,
  isSaveDraftButton = true,
  setActiveStep,
  sectionComponent,
  sectionTitle,
  sectionIcon,
  sectionList,
  isLandingPage,
  setIsLandingPage,
  sectionIconCheck,
  saveDraftButtonTitle,
  canProceedToNextForSaveDraft,
  sectionDesc,
  handlePreviousButton,
  disableNextButton,
  bannerText,
  handleBannerAction,
  additionalSectionInfo,
  handleSaveClose,
  saveAndCloseText,
  submitBtnLoader,
  draftInLastSection,
  disableSideNav,
  handleSectionMovement,
}: {
  additionalSectionInfo?: ReactNode;
  open: boolean;
  handleClose: Function;
  activeStep: number;
  nextSubmitButtonText: string;
  handleNextSubmitButton: Function;
  isSaveDraftButton?: boolean;
  canProceedToNext: Function;
  handleDraftButton?: Function;
  setActiveStep: (value: number) => void;
  sectionList: any[];
  sectionTitle: string;
  sectionDesc?: ReactNode;
  sectionIcon: any;
  sectionComponent: any;
  isLandingPage?: boolean;
  setIsLandingPage?: (status: boolean) => void;
  sectionIconCheck?: Function;
  saveDraftButtonTitle?: string;
  canProceedToNextForSaveDraft?: Function;
  handlePreviousButton?: Function | undefined;
  disableNextButton?: boolean;
  bannerText?: string;
  handleBannerAction?: Function;
  handleSaveClose?: Function;
  saveAndCloseText?: string;
  submitBtnLoader?: boolean;
  draftInLastSection?: boolean;
  disableSideNav?: boolean;
  handleSectionMovement?: Function;
}) {
  const [maxView, setMaxView] = useState(false);
  const [key, setKey] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  useEffect(() => {
    const isDark = localStorage.getItem("theme")?.toLowerCase() === "dark";
    document.documentElement.setAttribute(
      "data-bs-theme",
      isDark ? "dark" : "light"
    );
  }, []);

  return (
    <Drawer
      id="full-drawer"
      anchor="bottom"
      sx={{ zIndex: 1500, height: "100%" }}
      open={open}
      onClose={() => {
        if (key === false) {
          handleClose();
        }
      }}
      onKeyDown={({ key }: any) => {
        if (key === "Escape") {
          setMaxView(false);
          setKey(true);
        }
      }}
    >
      {isLandingPage && setIsLandingPage ? (
        <FullPageIllustration
          setIsLandingPage={setIsLandingPage}
          handleClose={handleClose}
        />
      ) : (
        <>
          {!isMobile ? (
            <div className="row no-gutters h-100">
              {maxView ? null : (
                <SectionNav
                  handleClose={handleClose}
                  sectionTitle={sectionTitle}
                  sectionIcon={sectionIcon}
                  sectionList={sectionList}
                  canProceedToNext={canProceedToNext}
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  sectionIconCheck={sectionIconCheck}
                  sectionDesc={sectionDesc}
                  handlePreviousButton={handlePreviousButton}
                  handleNextSubmitButton={handleNextSubmitButton}
                  additionalSectionInfo={additionalSectionInfo}
                  disableSideNav={disableSideNav}
                  handleSectionMovement={handleSectionMovement}
                />
              )}

              <SectionComponentRender
                maxView={maxView}
                setMaxView={setMaxView}
                activeStep={activeStep}
                draftInLastSection={draftInLastSection}
                setActiveStep={setActiveStep}
                handleClose={handleClose}
                canProceedToNext={canProceedToNext}
                sectionComponent={sectionComponent}
                nextSubmitButtonText={nextSubmitButtonText}
                handleDraftButton={handleDraftButton}
                handleNextSubmitButton={handleNextSubmitButton}
                isSaveDraftButton={isSaveDraftButton}
                sectionList={sectionList}
                isFullDrawer={true}
                saveDraftButtonTitle={saveDraftButtonTitle}
                canProceedToNextForSaveDraft={canProceedToNextForSaveDraft}
                handlePreviousButton={handlePreviousButton}
                disableNextButton={disableNextButton}
                bannerText={bannerText}
                handleBannerAction={handleBannerAction}
                handleSaveClose={handleSaveClose}
                saveAndCloseText={saveAndCloseText}
                submitBtnLoader={submitBtnLoader}
              />
            </div>
          ) : (
            <>
              <SwipeableDrawer
                open={isNavOpen}
                onOpen={() => setIsNavOpen(true)}
                onClose={() => setIsNavOpen(false)}
                swipeAreaWidth={0}
                className="full-drawer-nav-drawer"
              >
                <SectionNav
                  handleClose={handleClose}
                  sectionTitle={sectionTitle}
                  sectionIcon={sectionIcon}
                  sectionList={sectionList}
                  canProceedToNext={canProceedToNext}
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  setIsNavOpen={setIsNavOpen}
                  sectionIconCheck={sectionIconCheck}
                  sectionDesc={sectionDesc}
                  handlePreviousButton={handlePreviousButton}
                  handleNextSubmitButton={handleNextSubmitButton}
                  additionalSectionInfo={additionalSectionInfo}
                />
              </SwipeableDrawer>
              <div className="full-drawer-mobile-main-wrap h-100">
                <SectionHeader
                  handleClose={handleClose}
                  sectionDesc={sectionDesc}
                  sectionIcon={sectionIcon}
                  sectionTitle={sectionTitle}
                  setIsNavOpen={setIsNavOpen}
                  sectionList={sectionList}
                  activeStep={activeStep}
                />
                <SectionComponentRender
                  maxView={maxView}
                  setMaxView={setMaxView}
                  activeStep={activeStep}
                  draftInLastSection={draftInLastSection}
                  setActiveStep={setActiveStep}
                  handleClose={handleClose}
                  canProceedToNext={canProceedToNext}
                  sectionComponent={sectionComponent}
                  nextSubmitButtonText={nextSubmitButtonText}
                  handleDraftButton={handleDraftButton}
                  handleNextSubmitButton={handleNextSubmitButton}
                  isSaveDraftButton={isSaveDraftButton}
                  sectionList={sectionList}
                  isFullDrawer={true}
                  saveDraftButtonTitle={saveDraftButtonTitle}
                  canProceedToNextForSaveDraft={canProceedToNextForSaveDraft}
                  handlePreviousButton={handlePreviousButton}
                  disableNextButton={disableNextButton}
                  bannerText={bannerText}
                  handleBannerAction={handleBannerAction}
                  handleSaveClose={handleSaveClose}
                  saveAndCloseText={saveAndCloseText}
                  submitBtnLoader={submitBtnLoader}
                />
              </div>
            </>
          )}
        </>
      )}
    </Drawer>
  );
}

export default FullDrawer;
