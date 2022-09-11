import React, { useEffect } from "react";
import NumberReader from "../playSound/numberReader";

interface Props {
  question: string;
}

const ListenQuestion = ({ question }: Props) => {
  useEffect(() => {
    new NumberReader(question).readPromise();
  }, [question]);

  return (
    <button
      className="btn btn-lg btn-dark"
      onClick={() => new NumberReader(question).readPromise()}
    >
      Play
    </button>
  );
};

export default ListenQuestion;
