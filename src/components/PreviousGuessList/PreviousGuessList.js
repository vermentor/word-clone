import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function PreviousGuessList({ previousGuesses }) {
  const guessCells = range(NUM_OF_GUESSES_ALLOWED).map((num) => (
    <Guess key={num} guessBreakdown={previousGuesses[num]} />
  ));

  return <div className="guess-results">{guessCells}</div>;
}

export default PreviousGuessList;
