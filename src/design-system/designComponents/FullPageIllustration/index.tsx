import { Checkbox } from "antd";
import Lottie from "react-lottie-player";
import { BackIcon } from "../../assets/Drawer";
import { TypographyHeader } from "../Typography";
import { Button } from "../Buttons";
// import {
//   Button,
//   TypographyHeader,
// } from "../../../../../e2ehiring/e2ehiring-core-frontend/packages/design-system/src";
import JobLandingPageAnimation from "../../assets/common/CreteJobLanding.json";
import "./style.scss";

function FullPageIllustration({
  setIsLandingPage,
  handleClose,
}: {
  setIsLandingPage: (status: boolean) => void;
  handleClose: Function;
}) {
  const options = {
    play: true,
    loop: true,
    autoplay: true,
    animationData: JobLandingPageAnimation,
  };

  return (
    <div id="full-page-illustration">
      <div className="row no-gutters">
        <div className="col-sm-6 col-md-5 col-lg-4">
          <div className="illustration-page-info-container">
            <div className="illustration-page-info">
              <div
                className="back-btn"
                role="button"
                onClick={() => handleClose()}
              >
                <BackIcon fill="var(--color-primary-text)" />
                <span className="ml-1">Back to jobs</span>
              </div>
              <div className="info-wrapper">
                <div className="info-title">
                  <h2 className="info-title-header">Create</h2>
                  <h2 className="mb-0">a Job</h2>
                </div>
                <div className="d-flex flex-column mt-auto">
                  <Button
                    title="Continue"
                    width="50%"
                    onClick={() => setIsLandingPage(false)}
                  />
                  <div className="d-flex flex-row align-items-center mt-3">
                    <Checkbox
                      className="mr-3"
                      // onChange={(e: any) =>
                      //   e.target.checked ? setIsLandingPage(false) : null
                      // }
                    />
                    <TypographyHeader variant="h5">
                      Don’t show this message again
                    </TypographyHeader>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-7 col-lg-8">
          <div className="animation-wrapper">
            <div className="full-page-illustration-text-container">
              <div className="illustration-text">
                "Are you ready to find the perfect candidate for your open
                position? Creating a detailed and well-crafted job posting is
                the first step to attracting top talent.
              </div>
            </div>

            <Lottie {...options} style={{ height: "100%", width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FullPageIllustration;
