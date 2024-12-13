import "./styles.scss";

import { useEffect, useState } from "react";

export default function SpeedoMeter({ value }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [targetValue, setTargetValue] = useState(0);
  const steps = 1;
  const lag = 1;

  useEffect(() => {
    setTargetValue(value);
  }, [value]);

  useEffect(() => {
    if (currentValue !== targetValue) {
      setTimeout(() => {
        setCurrentValue((prevCurr) => {
          let distance = Math.abs(targetValue - currentValue);
          let stepSize = Math.ceil(distance / steps);
          return currentValue < targetValue
            ? currentValue + stepSize
            : currentValue - stepSize;
        });
      }, lag);
    }
  }, [currentValue, targetValue]);

  return (
    <div className="speedo-main-wrapper">
      <div className="speedo-wrap">
        {(currentValue + "").split("").map((val, idx) => (
          <div
            className="speedo-digit"
            style={{ marginTop: `-${val}em` }}
            key={idx}
          >
            <div data-val="0">0</div>
            <div data-val="1">1</div>
            <div data-val="2">2</div>
            <div data-val="3">3</div>
            <div data-val="4">4</div>
            <div data-val="5">5</div>
            <div data-val="6">6</div>
            <div data-val="7">7</div>
            <div data-val="8">8</div>
            <div data-val="9">9</div>
          </div>
        ))}
      </div>
    </div>
  );
}
