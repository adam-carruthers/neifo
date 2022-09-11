import num2wordsEs from "../num2words/es";
import { chooseRandomOperator, generateRandomInteger } from "./maths";
import { preStageToNumberStage, preStageToTextStage } from "./preStageToStage";
import Stage, { StageWithoutAnswerType } from "./stage";

const N_STAGES = 5;
const MIN_NUMBER = -100;
const MAX_NUMBER = 100;

export const generatePreStagesMaths = (): StageWithoutAnswerType[] => {
  const preStages: StageWithoutAnswerType[] = [];

  for (let i = 0; i < N_STAGES; i++) {
    const n1 = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);
    const n2 = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);
    const operator = chooseRandomOperator();
    const correctAnswerN = operator.operate(n1, n2);
    const textToShow = `${num2wordsEs(
      n1
    )} ${operator.toUserLocaleString()} ${num2wordsEs(n2)}`;
    const extraHint = `${n1} ${operator.symbol} ${n2}`;

    preStages.push({
      question: textToShow,
      correctAnswerN,
      extraHint,
    });
  }

  return preStages;
};

export const generateStagesMathsToNumber = (): Stage[] =>
  generatePreStagesMaths().map(preStageToNumberStage);

export const generateStagesMathsToText = (): Stage[] =>
  generatePreStagesMaths().map(preStageToTextStage);
