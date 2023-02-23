import React from "react";
import { NUM_LETTERS_IN_WORD } from "../../constants";
import { range } from "../../utils";

function Guess({ value = "" }) {
  return (
    <p className="guess">
      {range(NUM_LETTERS_IN_WORD).map((num) => (
        <span className="cell" key={num}>
          {value[num]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
