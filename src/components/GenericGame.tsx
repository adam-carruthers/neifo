import React, { FormEvent, useContext, useMemo, useState } from "react";
import backgroundColorContext from "../other/backgroundColorContext";
import Stage, { GenerateStagesFunction } from "../stages/stage";
import CorrectAnswerPopUp from "./correctAnswerPopUp/CorrectAnswerPopUp";
import { GameComponent, GameProps } from "./gameComponentTypes";
import ListenQuestion from "./ListenQuestion";

interface QuestionMethodDefinedProps extends GameProps {
  generateStagesFunction: GenerateStagesFunction;
}

interface GenericGameProps extends QuestionMethodDefinedProps {
  questionDisplay: (question: string) => React.ReactNode;
}

const GenericGame = ({
  goToMenu,
  generateStagesFunction,
  questionDisplay,
  gameName,
}: GenericGameProps) => {
  const [currentStageI, setCurrentStageI] = useState(0);

  const [guess, setGuess] = useState("");

  const [correctAnswerMessage, setCorrectAnswerMessage] =
    useState<Stage | null>(null);

  const stages = useMemo(generateStagesFunction, [generateStagesFunction]);

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
        <h1 className="mb-2">{gameName}</h1>

        <div className="mb-5 fs-4">
          <i>
            Turn {currentStageI + 1}/{stages.length}
          </i>
        </div>

        <div style={{ fontSize: "3em", textAlign: "center" }} className="mb-5">
          {questionDisplay(currentStage.question)}
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
          <b>{correctAnswerMessage.question}</b>
          {correctAnswerMessage.extraHint &&
            ` (${correctAnswerMessage.extraHint})`}{" "}
          is actually <b>{correctAnswerMessage.correctAnswer}</b>
        </CorrectAnswerPopUp>
      )}
    </div>
  );
};

export type QuestionMethodDefinedGenericGameComponent = (
  props: QuestionMethodDefinedProps
) => JSX.Element;

export const GenericReadGame: QuestionMethodDefinedGenericGameComponent = (
  props
) => <GenericGame questionDisplay={(question) => question} {...props} />;

export const GenericListenGame: QuestionMethodDefinedGenericGameComponent = (
  props
) => (
  <GenericGame
    questionDisplay={(question) => <ListenQuestion question={question} />}
    {...props}
  />
);

export const makeGameComponent =
  (
    generateStagesFunction: GenerateStagesFunction,
    QuestionMethodDefinedGenericGameComponent: QuestionMethodDefinedGenericGameComponent
  ): GameComponent =>
  (gameProps: GameProps) => {
    return (
      <QuestionMethodDefinedGenericGameComponent
        generateStagesFunction={generateStagesFunction}
        {...gameProps}
      />
    );
  };
