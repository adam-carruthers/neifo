import ReadMathsAnswerNGame from "./ReadMathsAnswerNGame";
import ReadMathsAnswerTextGame from "./ReadMathsAnswerTextGame";
import ReadNAnswerTextGame from "./ReadNAnswerTextGame";
import ReadTextAnswerNGame from "./ReadTextAnswerNGame";

export type GameComponent = (props: { goToMenu: () => void }) => void;

const allGames = {
  readNAnswerTextGame: {
    component: ReadNAnswerTextGame,
    name: "Read Number Answer Text Game",
  },
  readTextAnswerNGame: {
    component: ReadTextAnswerNGame,
    name: "Read Text Answer Number Game",
  },
  readMathsAnswerNGame: {
    component: ReadMathsAnswerNGame,
    name: "Read Maths Answer Number Game",
  },
  readMathsAnswerTextGame: {
    component: ReadMathsAnswerTextGame,
    name: "Read Maths Answer Text Game",
  },
};

export default allGames;
