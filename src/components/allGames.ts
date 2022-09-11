import {
  generateStagesMathsToNumber,
  generateStagesMathsToText,
} from "../stages/mathsStage";
import {
  generateStagesNumberToText,
  generateStagesTextToNumber,
  generateStagesTextToText,
} from "../stages/numberStage";
import { NamedGameComponent } from "./gameComponentTypes";
import {
  GenericListenGame,
  GenericReadGame,
  makeGameComponent,
} from "./GenericGame";

const allGames: { [key: string]: NamedGameComponent } = {
  readNAnswerTextGame: {
    component: makeGameComponent(generateStagesNumberToText, GenericReadGame),
    name: "Read Number Answer Text Game",
  },
  readTextAnswerNGame: {
    component: makeGameComponent(generateStagesTextToNumber, GenericReadGame),
    name: "Read Text Answer Number Game",
  },
  readMathsAnswerNGame: {
    component: makeGameComponent(generateStagesMathsToNumber, GenericReadGame),
    name: "Read Maths Answer Number Game",
  },
  readMathsAnswerTextGame: {
    component: makeGameComponent(generateStagesMathsToText, GenericReadGame),
    name: "Read Maths Answer Text Game",
  },
  listenTextAnswerNGame: {
    component: makeGameComponent(generateStagesTextToNumber, GenericListenGame),
    name: "Listen Number Answer Number Game",
  },
  listenTextAnswerTextGame: {
    component: makeGameComponent(generateStagesTextToText, GenericListenGame),
    name: "Listen Number Answer Number Game",
  },
  listenMathsAnswerNGame: {
    component: makeGameComponent(
      generateStagesMathsToNumber,
      GenericListenGame
    ),
    name: "Listen Maths Answer Number Game",
  },
  listenMathsAnswerTextGame: {
    component: makeGameComponent(generateStagesMathsToText, GenericListenGame),
    name: "Listen Maths Answer Text Game",
  },
};

export default allGames;
