import React, { useMemo } from "react";
import { generateRandomInteger } from "../maths";
import num2wordsEs from "../num2words/es";
import GenericListenGame, { Stage } from "./GenericListenGame";

const N_STAGES = 5;
const MIN_NUMBER = -10000;
const MAX_NUMBER = 10000;

const generateStages = (): Stage[] => {
  const stages: Stage[] = [];

  for (let i = 0; i < N_STAGES; i++) {
    const randomNumber = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);

    stages.push({
      i,
      textToShow: num2wordsEs(randomNumber),
      correctAnswer: randomNumber.toString(),
    });
  }

  return stages;
};

interface Props {
  goToMenu: () => void;
}

const ListenTextAnswerNGame = ({ goToMenu }: Props) => {
  const stages: Stage[] = useMemo(generateStages, []);

  return <GenericListenGame goToMenu={goToMenu} stages={stages} />;
};

export default ListenTextAnswerNGame;
