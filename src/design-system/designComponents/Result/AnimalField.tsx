import { useMediaQuery } from "react-responsive";
import Lottie from "react-lottie-player";

const AnimalField = ({
  animationJson,
  activeAnimation,
}: {
  animationJson: any;
  activeAnimation: string;
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationJson,
  };
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const animationHeightValues: Record<string, number> = {
    dog: isTabletOrMobile ? 520 : 548,
    fox: 148,
    default: isTabletOrMobile ? 330 : 368,
  };

  const animationWidthValues: Record<string, number> = {
    dog: isTabletOrMobile ? 453 : 548,
    fox: 235,
    default: isTabletOrMobile ? 330 : 368,
  };

  return (
    <Lottie
      {...defaultOptions}
      play
      style={{
        height:
          animationHeightValues[activeAnimation] ||
          animationHeightValues.default,
        width:
          animationWidthValues[activeAnimation] || animationWidthValues.default,
      }}
    />
  );
};

export default AnimalField;
