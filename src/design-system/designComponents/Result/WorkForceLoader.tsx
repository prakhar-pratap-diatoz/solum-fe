import Lottie from "react-lottie-player";
import workforceLoaderJson from "../../assets/result/workforceLoader.json";

const WorkForceLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: workforceLoaderJson,
  };

  return (
    <div id="e2e_design_work_force_loader">
      <div className="work-force-loader">
        <Lottie
          play
          {...defaultOptions}
          style={{
            height: 148,
            width: 148,
          }}
        />
      </div>
    </div>
  );
};

export default WorkForceLoader;
