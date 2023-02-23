import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function PreviousGuessList({ previousGuesses }) {
  const guessCells = previousGuesses.map((guess, index) => (
    <p className="guess" key={index}>
      {Array.from(guess).map((letter, index) => (
        <span className="cell" key={index}>
          {letter}
        </span>
      ))}
    </p>
  ));
  const blankCells = range(previousGuesses.length, NUM_OF_GUESSES_ALLOWED).map(
    (key) => (
      <p className="guess" key={key}>
        {range(5).map((_, index) => (
          <span className="cell" key={index}></span>
        ))}
      </p>
    )
  );

  return <div className="guess-results">{[...guessCells, ...blankCells]}</div>;
}

export default PreviousGuessList;
