import Lottie from "react-lottie-player";
import swwJson from "../../assets/result/sww.json";
import { Button } from "..";
import "./styles.scss";

const SomethingWentWrong = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: swwJson,
  };

  return (
    <div className="something-went-wrong-e2e-design">
      <div className="went-wrong-content-wrap">
        <div className="sww-title text-center">UH-OH!</div>
        <div className="sww-title">Something Went Wrong at our end</div>
        <div className="my-3 text-center">
          <a href={"/"}>
            <Button
              variant="outlined"
              title={"Go To Home"}
              id="something-went-wrong-gohome-btn"
            />
          </a>
        </div>
      </div>
      <div className="went-wrong-json-wrap">
        <Lottie play {...defaultOptions} style={{ margin: 0 }} />
      </div>
    </div>
  );
};

export default SomethingWentWrong;
