import React, { useCallback, useState } from "react";
import backgroundColorContext from "../other/backgroundColorContext";
import classNames from "classnames";

interface InputProps {
  children: React.ReactNode;
}

const DEFAULT_COLOR = "var(--bs-bronze)";

const Background: React.FC<InputProps> = ({ children }) => {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [inFlash, setInFlash] = useState(false);

  const setColorFlash = useCallback(
    (newColor: string, ms: number = 500) => {
      if (inFlash) return;

      setColor(newColor);
      setInFlash(true);

      setTimeout(() => {
        setColor(DEFAULT_COLOR);
        setInFlash(false);
      }, ms);
    },
    [setColor, inFlash]
  );

  return (
    <backgroundColorContext.Provider value={{ color, setColorFlash }}>
      <div
        style={{ backgroundColor: color }}
        className={classNames("minh-vh", "w-100", "background-transition", {
          "background-transition-fast": inFlash,
        })}
      >
        {children}
      </div>
    </backgroundColorContext.Provider>
  );
};

export default Background;
