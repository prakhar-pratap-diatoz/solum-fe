import React from "react";
import Lottie from "react-lottie-player";
import CoffeeBreakJson from "./coffee-break.json";
import { Refresh } from "@mui/icons-material";
import { Button } from "../Buttons";
import "./style.scss";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: CoffeeBreakJson,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function ErrorIllustration({
  error,
  retry,
}: {
  error: string;
  retry?: () => void;
}) {
  return (
    <div id="error-illustration">
      <div className="error-illustration-wrapper">
        <Lottie style={{ height: 160, width: 160 }} play {...defaultOptions} />
        <p className="error-illustration-heading">{error}</p>
        <p className="error-illustration-subHeading">
          Click refresh, wake 'em up!
        </p>
        <Button
          id="error-illustration-btn"
          variant="outlined"
          startIcon={<Refresh sx={{ rotate: "180deg" }} />}
          title="Refresh"
          className="refresh-button"
          textColor="var(--color-primary-text)"
          onClick={() => (retry ? retry() : window.location.reload())}
        />
      </div>
    </div>
  );
}

export default ErrorIllustration;
