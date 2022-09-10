import React, { useMemo } from "react";
import { chooseRandomOperator, generateRandomInteger } from "../maths";
import num2wordsEs from "../num2words/es";
import GenericGame, { Stage } from "./GenericGame";

const N_STAGES = 5;
const MIN_NUMBER = -100;
const MAX_NUMBER = 100;

const generateStages = (): Stage[] => {
  const stages: Stage[] = [];

  for (let i = 0; i < N_STAGES; i++) {
    const n1 = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);
    const n2 = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);
    const operator = chooseRandomOperator();
    const correctAnswer = operator.operate(n1, n2).toString();
    const textToShow = `${num2wordsEs(
      n1
    )} ${operator.toUserLocaleString()} ${num2wordsEs(n2)}`;
    const extraHint = `${n1} ${operator.symbol} ${n2}`;

    stages.push({
      i,
      textToShow,
      correctAnswer,
      extraHint,
    });
  }

  return stages;
};

interface Props {
  goToMenu: () => void;
}

const ReadMathsAnswerNGame = ({ goToMenu }: Props) => {
  const stages: Stage[] = useMemo(generateStages, []);

  return <GenericGame goToMenu={goToMenu} stages={stages} />;
};

export default ReadMathsAnswerNGame;
