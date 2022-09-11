import num2wordsEs from "../num2words/es";
import { generateRandomInteger } from "./maths";
import Stage from "./stage";

const N_STAGES = 5;
const MIN_NUMBER = -10000;
const MAX_NUMBER = 10000;

const generateMultipleRandomNumbers = (): number[] => {
  const randNums: number[] = [];

  for (let i = 0; i < N_STAGES; i++) {
    const randomNumber = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);

    randNums.push(randomNumber);
  }

  return randNums;
};

export const generateStagesNumberToText = (): Stage[] =>
  generateMultipleRandomNumbers().map((randN) => ({
    question: randN.toString(),
    correctAnswer: num2wordsEs(randN),
  }));

export const generateStagesTextToNumber = (): Stage[] =>
  generateMultipleRandomNumbers().map((randN) => ({
    question: num2wordsEs(randN),
    correctAnswer: randN.toString(),
  }));

export const generateStagesTextToText = (): Stage[] =>
  generateMultipleRandomNumbers().map((randN) => ({
    question: num2wordsEs(randN),
    correctAnswer: num2wordsEs(randN),
  }));
