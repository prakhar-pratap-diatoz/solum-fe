import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import "./styles.scss";

const Card = ({
  width,
  height,
  gap,
  fullScreen,
}: {
  gap?: number;
  width: number;
  height: number;
  fullScreen?: boolean;
}) => {
  const [noOfTimes, setNoOfTimes] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rendomArrayForMap = Array.from({
    length: !fullScreen ? (noOfTimes ? noOfTimes : 1) : 1,
  });

  const getNumCards = () => {
    const totalWidth = screenWidth - (gap ? gap : 16);
    const numCards = Math.floor(totalWidth / (width + (gap ? gap : 16)));
    return numCards >= 1 ? numCards : 1;
  };

  useEffect(() => {
    const listCardCount = getNumCards();
    setNoOfTimes(listCardCount);
  }, [screenWidth]);

  return (
    <div id="e2e_design_skeleton">
      <div className="skeleton-wrapper" style={{ gap: gap ? gap : 16 }}>
        {rendomArrayForMap?.map((_, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            width={fullScreen ? "100%" : width}
            height={height}
            animation={"pulse"}
            sx={{ bgcolor: "var(--color-skeleton-bg)" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
