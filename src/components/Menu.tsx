import React from "react";
import allGames from "./allGames";

interface Props {
  setLocation: (location: keyof typeof allGames) => void;
}

const Menu = ({ setLocation }: Props) => {
  return (
    <div className="container">
      <div className="minh-vh d-flex flex-column justify-content-center align-items-center py-5">
        <h1 className="mb-5">Neifo</h1>
        {Object.entries(allGames).map(([key, { name }]) => (
          <button
            key={key}
            className="btn btn-dark btn-lg mb-2"
            onClick={() => setLocation(key as keyof typeof allGames)}
          >
            Start {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
