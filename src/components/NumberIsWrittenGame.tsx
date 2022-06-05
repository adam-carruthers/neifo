import React, { FormEvent, useMemo, useState } from "react";
import num2wordsEs from "../num2words/es";

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

  const currentStage = stages[currentStageI];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (parseInt(guess) == currentStage.n) {
      alert("correct!");
    } else {
      alert(
        `not right this time, the answer for ${currentStage.text} was ${currentStage.n}`
      );
    }

    if (currentStageI < stages.length - 1) {
      setGuess("");
      setCurrentStageI(currentStageI + 1);
    } else {
      alert("You finished the game!");
      goToMenu();
    }
  };

  return (
    <div className="container">
      <div className="minh-vh d-flex flex-column justify-content-center align-items-center py-5">
        <h1 className="mb-2">Number Is Written Game!</h1>

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
    </div>
  );
};

export default NumberIsWrittenGame;
