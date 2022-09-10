import React, { useMemo } from "react";
import { generateRandomInteger } from "../maths";
import num2wordsEs from "../num2words/es";
import GenericGame, { Stage } from "./GenericGame";

const N_STAGES = 5;
const MIN_NUMBER = -10000;
const MAX_NUMBER = 10000;

const generateStages = (): Stage[] => {
  const randomNumbers: number[] = [];
  for (let index = 0; index < N_STAGES; index++) {
    const randomNumber = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);
    randomNumbers.push(randomNumber);
  }

  return randomNumbers.map((n, i) => ({
    i,
    textToShow: num2wordsEs(n),
    correctAnswer: n.toString(),
  }));
};

interface Props {
  goToMenu: () => void;
}

const ReadTextAnswerNGame = ({ goToMenu }: Props) => {
  const stages: Stage[] = useMemo(generateStages, []);

  return <GenericGame goToMenu={goToMenu} stages={stages} />;
};

export default ReadTextAnswerNGame;
