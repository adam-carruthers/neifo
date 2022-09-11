import React, { useMemo } from "react";
import { generateRandomInteger } from "../maths";
import num2wordsEs from "../num2words/es";
import GenericGame, { Stage } from "./GenericGame";

const N_STAGES = 5;
const MIN_NUMBER = -10000;
const MAX_NUMBER = 10000;

const generateStages = (): Stage[] => {
  const stages: Stage[] = [];

  for (let i = 0; i < N_STAGES; i++) {
    const randomNumber = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);
    stages.push({
      i,
      question: randomNumber.toString(),
      correctAnswer: num2wordsEs(randomNumber),
    });
  }

  return stages;
};

interface Props {
  goToMenu: () => void;
}

const ReadNAnswerTextGame = ({ goToMenu }: Props) => {
  const stages: Stage[] = useMemo(generateStages, []);

  return <GenericGame goToMenu={goToMenu} stages={stages} />;
};

export default ReadNAnswerTextGame;
