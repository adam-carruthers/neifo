import React, { useState } from "react";
import Menu from "./Menu";
import allGames from "./allGames";

type RouterLocation = "menu" | keyof typeof allGames;

const Router = () => {
  const [location, setLocation] = useState<RouterLocation>("menu");

  const goToMenu = () => setLocation("menu");

  if (location === "menu") {
    return <Menu setLocation={setLocation} />;
  } else {
    const CurrentGame = allGames[location].component;

    return (
      <CurrentGame goToMenu={goToMenu} gameName={allGames[location].name} />
    );
  }
};

export default Router;
