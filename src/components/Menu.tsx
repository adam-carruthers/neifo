import React from "react";

interface Props {
  goToGame: () => void;
}

const Menu = ({ goToGame }: Props) => {
  return (
    <div className="container">
      <div className="minh-vh d-flex flex-column justify-content-center align-items-center py-5">
        <h1 className="mb-5">Neifo</h1>
        <button className="btn btn-dark btn-lg" onClick={goToGame}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Menu;
