import React, { useContext } from "react";
import backgroundColorContext from "../other/backgroundColorContext";

interface Props {
  goToReadNAnswerTextGame: () => void;
  goToReadTextAnswerNGame: () => void;
  goToReadMathsAnswerNGame: () => void;
}

const Menu = ({
  goToReadNAnswerTextGame,
  goToReadTextAnswerNGame,
  goToReadMathsAnswerNGame,
}: Props) => {
  const backgroundColor = useContext(backgroundColorContext);

  return (
    <div className="container">
      <div className="minh-vh d-flex flex-column justify-content-center align-items-center py-5">
        <h1 className="mb-5">Neifo</h1>
        <button
          className="btn btn-dark btn-lg mb-2"
          onClick={goToReadNAnswerTextGame}
        >
          Start Read Number Answer Text Game
        </button>
        <button
          className="btn btn-dark btn-lg mb-2"
          onClick={goToReadTextAnswerNGame}
        >
          Start Read Text Answer Number Game
        </button>
        <button
          className="btn btn-dark btn-lg mb-2"
          onClick={goToReadMathsAnswerNGame}
        >
          Start Read Maths Answer Number Game
        </button>
        <button
          className="btn btn-dark btn-lg"
          onClick={() => backgroundColor.setColorFlash("var(--bs-success)")}
        >
          Flash green
        </button>
      </div>
    </div>
  );
};

export default Menu;
