import React from "react";
import "./correctAnswerPopUp.css";

interface Props {
  children: React.ReactNode;
}

const CorrectAnswerPopUp: React.FC<Props> = ({ children }) => {
  return <div className="correct-answer-popup">❌ {children}</div>;
};

export default CorrectAnswerPopUp;
