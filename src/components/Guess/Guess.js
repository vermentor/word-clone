import React from "react";
import { NUM_LETTERS_IN_WORD } from "../../constants";
import { range } from "../../utils";

function Guess({ guessBreakdown }) {
  if (guessBreakdown === undefined) {
    return (
      <p className="guess">
        {range(NUM_LETTERS_IN_WORD).map((num) => (
          <span className="cell" key={num}>
          </span>
        ))}
      </p>
    );
  }

  return (
    <p className="guess">
      {range(NUM_LETTERS_IN_WORD).map((num) => (
        <span className={`cell ${guessBreakdown[num].status}`} key={num}>
          {guessBreakdown[num].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
