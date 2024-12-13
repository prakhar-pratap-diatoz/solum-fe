import Lottie from "react-lottie-player";

const AnimalJson = ({
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
  return (
    <Lottie
      play
      {...defaultOptions}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export default AnimalJson;
