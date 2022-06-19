import React, { useState } from "react";
import ReadTextAnswerNGame from "./ReadTextAnswerNGame";
import Menu from "./Menu";
import ReadNAnswerTextGame from "./ReadNAnswerTextGame";

type RouterLocation = "readNAnswerTextGame" | "readTextAnswerNGame" | "menu";

const Router = () => {
  const [location, setLocation] = useState<RouterLocation>("menu");

  const goToReadTextAnswerNGame = () => setLocation("readTextAnswerNGame");
  const goToReadNAnswerTextGame = () => setLocation("readNAnswerTextGame");
  const goToMenu = () => setLocation("menu");

  switch (location) {
    case "menu":
      return (
        <Menu
          goToReadNAnswerTextGame={goToReadNAnswerTextGame}
          goToReadTextAnswerNGame={goToReadTextAnswerNGame}
        />
      );
    case "readTextAnswerNGame":
      return <ReadTextAnswerNGame goToMenu={goToMenu} />;
    case "readNAnswerTextGame":
      return <ReadNAnswerTextGame goToMenu={goToMenu} />;
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = location;
      return <>ERROR</>;
  }
};

export default Router;
