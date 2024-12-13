import { useEffect, useMemo, useState } from "react";
import { AnimalDarkBg, AnimalLightBg } from "../../assets/result";
import catAnimation from "../../assets/result/cat-resize.json";
import dogAnimation from "../../assets/result/dog-resize.json";
import foxAnimation from "../../assets/result/fox-resize.json";
import AnimalJson from "./AnimalJson";
import "./styles.scss";

const Empty = ({
  componentName,
  primaryColor,
  title,
}: {
  componentName?: string;
  primaryColor?: string;
  title?: string;
}) => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const isDark = localStorage.getItem("theme")?.toLowerCase() === "dark";
    setTheme(isDark ? "dark" : "light");
  }, []);
  const animalJson = [
    {
      animal: "cat",
      animatedJson: catAnimation,
    },
    {
      animal: "dog",
      animatedJson: dogAnimation,
    },
    {
      animal: "fox",
      animatedJson: foxAnimation,
    },
  ];
  const fetchAnimationJson = useMemo(() => {
    return animalJson[Math.floor(Math.random() * animalJson.length)];
  }, []);

  return (
    <div className="e2e-ds-empty-result">
      <div className="empty-patch-with-content-container">
        <div className="empty-patch-with-content-wrap">
          <div className="animation-wrap">
            {theme === "dark" ? (
              <AnimalDarkBg width={"100%"} height={"100%"} />
            ) : (
              <AnimalLightBg width={"100%"} height={"100%"} />
            )}
            <div className="animal-field-wrap">
              <AnimalJson
                animationJson={fetchAnimationJson?.animatedJson}
                activeAnimation={fetchAnimationJson?.animal}
              />
            </div>
          </div>

          <div className="empty-illus-details-desc">
            {title ? (
              <div className="illus-main-title" style={{ color: primaryColor }}>
                {title}
              </div>
            ) : (
              <div className="illus-main-title" style={{ color: primaryColor }}>
                No {componentName} found
              </div>
            )}
            <div className="illus-desc" style={{ color: primaryColor }}>
              but here's
              {fetchAnimationJson?.animal === "dog"
                ? " a cute "
                : " an awesome "}
              {fetchAnimationJson?.animal} for you
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empty;
