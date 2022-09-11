import num2wordsEs from "../num2words/es";
import Stage, { StageWithoutAnswerType } from "./stage";

export const preStageToNumberStage = (
  preStage: StageWithoutAnswerType
): Stage => ({
  ...preStage,
  correctAnswer: preStage.correctAnswerN.toString(),
});

export const preStageToTextStage = (
  preStage: StageWithoutAnswerType
): Stage => ({
  ...preStage,
  correctAnswer: num2wordsEs(preStage.correctAnswerN),
});
