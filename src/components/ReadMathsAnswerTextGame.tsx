import React, { useMemo } from "react";
import num2wordsEs from "../num2words/es";
import GenericGame, { Stage } from "./GenericGame";
import { generateStages as generateStagesAnswerN } from "./ReadMathsAnswerNGame";

interface Props {
  goToMenu: () => void;
}

const generateStages = () =>
  generateStagesAnswerN().map((stage) => ({
    ...stage,
    correctAnswer: num2wordsEs(parseInt(stage.correctAnswer)),
  }));

const ReadMathsAnswerTextGame = ({ goToMenu }: Props) => {
  const stages: Stage[] = useMemo(generateStages, []);

  return <GenericGame goToMenu={goToMenu} stages={stages} />;
};

export default ReadMathsAnswerTextGame;
