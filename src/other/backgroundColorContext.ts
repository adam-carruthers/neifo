import React from "react";

const defaultBackGroundColorContextValue = {
  color: "",
  setColorFlash: (color: string, ms?: number) => {},
};

const backgroundColorContext = React.createContext(
  defaultBackGroundColorContextValue
);

export default backgroundColorContext;
