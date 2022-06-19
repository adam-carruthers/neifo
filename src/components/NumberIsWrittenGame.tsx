import React, { FormEvent, useContext, useMemo, useState } from "react";
import num2wordsEs from "../num2words/es";
import backgroundColorContext from "../other/backgroundColorContext";
import CorrectAnswerPopUp from "./correctAnswerPopUp/CorrectAnswerPopUp";

interface NumberStage {
  i: number;
  n: number;
  text: string;
}

const N_STAGES = 5;
const MIN_NUMBER = -10000;
const MAX_NUMBER = 10000;

const generateStages = (): NumberStage[] => {
  const randomNumbers: number[] = [];
  for (let index = 0; index < N_STAGES; index++) {
    const randomNumber = Math.round(
      Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER
    );
    randomNumbers.push(randomNumber);
  }

  return randomNumbers.map((n, i) => ({ n, i, text: num2wordsEs(n) }));
};

interface Props {
  goToMenu: () => void;
}

const NumberIsWrittenGame = ({ goToMenu }: Props) => {
  const stages: NumberStage[] = useMemo(generateStages, []);

  const [currentStageI, setCurrentStageI] = useState(0);

  const [guess, setGuess] = useState("");

  const [correctAnswerMessage, setCorrectAnswerMessage] =
    useState<NumberStage | null>(null);

  const currentStage = stages[currentStageI];

  const backgroundColor = useContext(backgroundColorContext);

  const flashCorrectAnswer = (stage: NumberStage) => {
    setCorrectAnswerMessage(stage);

    setTimeout(() => {
      setCorrectAnswerMessage(null);
    }, 3000);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (parseInt(guess) === currentStage.n) {
      backgroundColor.setColorFlash("var(--bs-success)");
    } else {
      backgroundColor.setColorFlash("var(--bs-danger)");
      flashCorrectAnswer(currentStage);
    }

    if (currentStageI < stages.length - 1) {
      setGuess("");
      setCurrentStageI(currentStageI + 1);
    } else {
      setTimeout(goToMenu, 4000);
    }
  };

  return (
    <div className="container">
      <div className="minh-vh d-flex flex-column justify-content-center align-items-center py-5">
        <h1 className="mb-2">Read the text, write the number!</h1>

        <div className="mb-5 fs-4">
          <i>
            Turn {currentStageI + 1}/{stages.length}
          </i>
        </div>

        <div style={{ fontSize: "3em" }} className="mb-5">
          {currentStage.text}
        </div>

        <form
          onSubmit={onSubmit}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <input
            type="text"
            className="form-control form-control-lg mb-5 w-100"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Write the number here!"
          />

          <input
            type="submit"
            className="btn btn-lg btn-dark mb-3"
            value="Submit"
          />
        </form>

        <button className="btn btn-lg btn-dark" onClick={goToMenu}>
          Go back
        </button>
      </div>
      {correctAnswerMessage && (
        <CorrectAnswerPopUp>
          <b>{correctAnswerMessage.text}</b> is actually{" "}
          <b>{correctAnswerMessage.n}</b>
        </CorrectAnswerPopUp>
      )}
    </div>
  );
};

export default NumberIsWrittenGame;
