import React from "react";

export type GoToMenu = () => void;

export interface GameProps {
  goToMenu: GoToMenu;
  gameName: string;
}

export type GameComponent = (props: GameProps) => JSX.Element;

export interface NamedGameComponent {
  component: GameComponent;
  name: string;
}
