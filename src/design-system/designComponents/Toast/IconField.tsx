import Lottie from "react-lottie-player";

const IconField = ({
  animationJson,
  width,
}: {
  animationJson: any;
  width: number;
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationJson,
  };

  return (
    <Lottie
      play
      {...defaultOptions}
      style={{
        height: width,
        width: width,
      }}
    />
  );
};

export default IconField;
