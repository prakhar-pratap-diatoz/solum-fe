import Lottie from "react-lottie-player";
import NotFoundJson from "../../assets/result/404.json";
import "./styles.scss";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFoundJson,
  };

  return (
    <>
      <Lottie
        {...defaultOptions}
        play
        style={{ margin: 0, height: 263, width: 452 }}
      />
    </>
  );
};

export default NotFound;
