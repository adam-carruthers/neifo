import React, { useState } from "react";
import NumberIsWrittenGame from "./NumberIsWrittenGame";
import Menu from "./Menu";

type RouterLocation = "menu" | "game";

const Router = () => {
  const [location, setLocation] = useState<RouterLocation>("menu");

  const goToGame = () => setLocation("game");
  const goToMenu = () => setLocation("menu");

  switch (location) {
    case "menu":
      return <Menu goToGame={goToGame} />;
    case "game":
      return <NumberIsWrittenGame goToMenu={goToMenu} />;
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = location;
      return <>ERROR</>;
  }
};

export default Router;
