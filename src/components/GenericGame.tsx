import React, { FormEvent, useContext, useState } from "react";
import backgroundColorContext from "../other/backgroundColorContext";
import CorrectAnswerPopUp from "./correctAnswerPopUp/CorrectAnswerPopUp";

export interface Stage {
  i: number;
  textToShow: string;
  correctAnswer: string;
  extraHint?: string;
}

interface Props {
  goToMenu: () => void;
  stages: Stage[];
}

const GenericGame = ({ goToMenu, stages }: Props) => {
  const [currentStageI, setCurrentStageI] = useState(0);

  const [guess, setGuess] = useState("");

  const [correctAnswerMessage, setCorrectAnswerMessage] =
    useState<Stage | null>(null);

  const currentStage = stages[currentStageI];

  const backgroundColor = useContext(backgroundColorContext);

  const flashCorrectAnswer = (stage: Stage) => {
    setCorrectAnswerMessage(stage);

    setTimeout(() => {
      setCorrectAnswerMessage(null);
    }, 8000);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (guess === currentStage.correctAnswer) {
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

        <div style={{ fontSize: "3em", textAlign: "center" }} className="mb-5">
          {currentStage.textToShow}
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
          <b>{correctAnswerMessage.textToShow}</b>
          {correctAnswerMessage.extraHint &&
            ` (${correctAnswerMessage.extraHint})`}{" "}
          is actually <b>{correctAnswerMessage.correctAnswer}</b>
        </CorrectAnswerPopUp>
      )}
    </div>
  );
};

export default GenericGame;
